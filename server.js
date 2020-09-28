require("dotenv").config();

const environment = process.env.NODE_ENV || "development";
const express = require("express");
const cors = require("cors");
const {
  UserHelper,
  PromptHelper,
  StoryHelper,
} = require("./server-helpers.js");

const app = express();
const knex = require("knex")({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/exquisite`,
});

app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT || 3005);
app.locals.title = "The Exquisite Corpse server";
//AUTHORS AND USERS
app.get("/api/v2/authors", async (request, response, next) => {
  try {
    knex
      .select()
      .from("authors")
      .then((authors) => {
        authors = authors.map((author) =>
          UserHelper.makeSecureUserResponse(author)
        );
        response.status(200).json(authors);
      });
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/api/v2/authors/:id", async (request, response, next) => {
  try {
    UserHelper.findAuthorById(request.params.id).then((author) => {
      if (author.length === 1) {
        response.header("Access-Control-Allow-Origin", "*");
        response.status(200).json(UserHelper.makeSecureUserResponse(author[0]));
      } else if (author.length === 0) {
        response.header("Access-Control-Allow-Origin", "*");
        response.status(404).json("Author not found");
      } else {
        response.header('Access-Control-Allow-Origin', '*')
        response
          .status(500)
          .json(
            `Something's horribly wrong, the server has more than one author with that id`
          );
      }
    });
  } catch (error) {
    console.error(error.message)
  }
});

app.post("/api/v2/authors", async (request, response, next) => {
  const author = request.body;
  const requiredKeys = ["name", "email", "password"];
  if (!Object.keys(author).every((detail) => requiredKeys.includes(detail))) {
    response.header("Access-Control-Allow-Origin", "*")
    response.status(422).json("Please include a name, email, and password");
  }
  UserHelper.userIsTaken(author).then((isTaken) => {
    if (isTaken.length > 0) {
      try {
        response.header("Access-Control-Allow-Origin", "*");
        response
          .status(422)
          .json(`That ${isTaken.join(" and ")} is taken, please try again`);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      try {
        StoryHelper.findViableId("authors").then((newId) => {
          knex("authors")
            .insert({
              id: newId,
              name: author.name,
              email: author.email,
              password: author.password,
            })
            .then(() => {
              UserHelper.findAuthorByUsername(author.name).then((newAuthor) => {
                response.header("Access-Control-Allow-Origin", "*");
                response
                  .status(200)
                  .set('Access-Control-Allow-Origin', '*')
                  .json(UserHelper.makeSecureUserResponse(newAuthor[0]));
              });
            });
        });
      } catch (error) {
        console.error(error.message);
      }
    }
  });
});

app.post("/api/v2/authors/login", async (request, response, next) => {
  const login = UserHelper.checkLoginInfo(request.body);
  if (login.hasEnoughInfo) {
    try {
      UserHelper.findAuthorByUsername(login.username).then((user) => {
        if (user.length === 0) {
          response.header("Access-Control-Allow-Origin", "*");
          return response.status(422).json("A user by that name was not found");
        } else {
          return UserHelper.authenticateUser(
            user,
            request.body.password,
            response
          );
        }
      });
    } catch (error) {
      console.error(error.message);
    }
  } else {
    try {
      response.header("Access-Control-Allow-Origin", "*");
      response.status(422).json(login.message);
    } catch (error) {
      console.error(error.message);
    }
  }
});

app.patch("/api/v2/authors/:id", async (request, response, next) => {
  const info = Object.keys(request.body);
  const acceptableUpdates = ["email", "password", "bio"];
  const getAuthor = () => knex("authors").where({ id: request.params.id });
  return UserHelper.findAuthorById(request.params.id).then((author) => {
    try {
      if (author.length === 0) {
        response.header("Access-Control-Allow-Origin", "*");
        return response.status(404).json(`There is not a user with that id`);
      } else if (
        info.some((detail) => acceptableUpdates.includes(detail) === false)
      ) {
        response.header("Access-Control-Allow-Origin", "*");
        return response
          .status(422)
          .json(`You can only update email, password, or bio`);
      } else {
        try {
          info.forEach(async (detail, i) => {
            knex("authors")
              .where({ id: request.params.id })
              .update({ [detail]: request.body[detail] })
              .then(() => {
                i === info.length - 1 &&
                  UserHelper.findAuthorById(request.params.id).then(
                    (author) => {
                      response.header("Access-Control-Allow-Origin", "*");
                      response.status(200).json(author);
                    }
                  );
              });
          });
        } catch (error) {
          console.error(error.message);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  });
});
// PROMPTS
app.get("/api/v2/prompts", async (request, response, next) => {
  try {
    knex("prompts")
      .select()
      .then((prompts) => {
        response.header("Access-Control-Allow-Origin", "*");
        response.status(200).json(prompts);
      });
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/v2/prompts/:detail", async (request, response, next) => {
  try {
    const detail = request.params.detail;
    let prompt;
    if (isNaN(detail)) {
      await PromptHelper.promptGenerator(detail).then((randomPrompt) => {
        prompt = randomPrompt;
      });
    } else {
      await PromptHelper.findSpecificPrompt(detail).then((specificPrompt) => {
        prompt = specificPrompt;
      });
    }
    response.header("Access-Control-Allow-Origin", "*");
    response.status(200).json(prompt);
  } catch (error) {
    console.error(error);
  }
});
//STORIES
app.get("/api/v2/stories", (request, response, next) => {
  try {
    knex("stories")
      .select()
      .then((stories) => {
        response.header("Access-Control-Allow-Origin", "*");
        response.status(200).json(stories)
      })
        
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/api/v2/stories/:id", (request, response, next) => {
  try {
    knex("stories")
      .groupBy("id")
      .select()
      .having("id", "=", request.params.id)
      .then((story) => {
        response.header("Access-Control-Allow-Origin", "*");
        return response.status(200).json(story);
      });
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/api/v2/stories", async (request, response, next) => {
  const storyInfo = request.body;
  const requiredKeys = ["title", "contributions", "prompt", "contributors"];

  if (requiredKeys.every((key) => Object.keys(storyInfo).includes(key))) {
    try {
      StoryHelper.findViableId("stories").then((new_id) => {
        knex("stories")
          .insert({
            id: new_id,
            title: storyInfo.title,
            contributions: [storyInfo.contributions],
            prompt: storyInfo.prompt,
            contributors: [storyInfo.contributors],
          })
          .then(() => StoryHelper.findStory(new_id))
          .then((story) => {
            response.header("Access-Control-Allow-Origin", "*");
            response.status(200).set('Access-Control-Allow-Origin', '*').json(story)
          });
      });
    } catch (error) {
      console.error(error.message);
    }
  } else {
    response.status(422).set('Access-Control-Allow-Origin', '*').json("Yer missin some info");
  }
});

app.patch("/api/v2/stories/:id", (request, response, next) => {
  const story_id = request.params.id;
  StoryHelper.findStory(story_id).then((story) => {
    const problems = StoryHelper.checkForProblems(request.body);
    try {
      if (story.length === 0) {
        response.header("Access-Control-Allow-Origin", "*");
        response.status(404).json("The story was not found");
      } else if (story[0].is_complete === true) {
        response.header("Access-Control-Allow-Origin", "*");
        response
          .status(422)
          .json(`The story is finished, you can't write more here`);
      } else if (problems.length > 0) {
        response.header("Access-Control-Allow-Origin", "*");
        response.status(422).json(problems.join(" "));
      } else {
        StoryHelper.updateStory(request.body, story[0], response);
      }
    } catch (error) {
      console.error(error.message);
    }
  });
});

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}`
  );
});
