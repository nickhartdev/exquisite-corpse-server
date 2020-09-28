require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/exquisite`,
});

class UserHelper {
  static findAuthorById = async id => {
    try {
      return knex('authors')
        .groupBy('id')
        .select()
        .having('id', '=', id)
    } catch (error) {
      console.error(error.message)
    }
  }

  static makeSecureUserResponse = ({
    id,
    name,
    email,
    bio,
    created_at,
    updated_at,
  }) => {
    return {
      id: id,
      name: name,
      email: email,
      bio: bio,
      created_at: created_at,
      updated_at: updated_at,
    };
  }

  static checkLoginInfo = (info) => {
    const infoProvided = Object.keys(info)
    const result = { hasEnoughInfo: false, message: '', username: '' }
    if (!infoProvided.includes("password")) {
      result.message = 'You need to provide a password'
    } else if (infoProvided.length === 0 && infoProvided[0] === 'password') {
      result.message = 'Please provide a username or an email to login'
    } else {
      result.hasEnoughInfo = true
      result.username = info.username
    }
    return result
  }

  static authenticateUser = (userAccount, attemptedPassword, response) => {
    try {
      if (userAccount[0].password === attemptedPassword) {
        response.header("Access-Control-Allow-Origin", "*");
        return response.status(200).json(this.makeSecureUserResponse(userAccount[0]))
      } else {
        response.header("Access-Control-Allow-Origin", "*");
        return response.status(422).json('An incorrect password was provided!')
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  static findAuthorByUsername = async username => {
    let usernameType
    usernameType = username.includes('@') ? 'email' : 'name'
    try {
      return knex("authors")
        .groupBy("id")
        .select()
        .having(usernameType, "=", username);
    } catch (error) {
      console.error(error.message);
    }
  }

  static userIsTaken = async (author) => {
    const { name, email } = author 
    const checkAgainst = ["name", "email"]
    try {
      const result = [name, email].reduce(async (isTaken, thing, i) => {
        const resolvedUsers = await Promise.resolve(isTaken);
        return await this.findAuthorByUsername(thing).then((user) => {
          return user.length > 0
            ? resolvedUsers.concat(checkAgainst[i])
            : resolvedUsers;
        });
      }, []);
      return await result;
    } catch (error) {
      console.error(error.message);
    }
  }

}

class PromptHelper {
  static promptGenerator = (genre) => {
    try {
      const allPrompts = () => {
        return knex("prompts").groupBy("id").select();
      }
      const filterPrompts = () => {
        return genre === 'any' ? allPrompts() : allPrompts().having("genre", "=", genre);
      }
      return filterPrompts().then((prompts) => {
        const randomIndex = Math.round(Math.random() * prompts.length - 1);
        return prompts[randomIndex]
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  static findSpecificPrompt = (id) => {
    try {
      return knex("prompts").groupBy("id").select().having("id", "=", id);
    } catch (error) {
      console.error(error.message);
    }
  }
}

class StoryHelper {

  static findViableId = async table => {
    try {
      return knex(table)
        .groupBy("id")
        .select("id")
        .then((data) => {
          const sortedIds = data.sort((a, b) => b.id - a.id);
          return sortedIds.length > 0 ? sortedIds[0].id + 1 : 1;
        });
    } catch (error) {
      console.error(error.message);
    }
  }

  static checkForProblems = (story) => {
    const requiredFields = ['contributions', 'contributors']
    const problems = []
    const missingFields = requiredFields.filter(field => !Object.keys(story).includes(field))
    missingFields.length > 0 && problems.push(`Your entry is missing this data: ${missingFields.join(", ")}.`)
    Object.keys(story).forEach(field => {
      if (field === "contributions" && typeof story.contributions !== "string") {
        problems.push('Contributions should be a string.')
      } else if (field === 'contributors' && isNaN(story.contributors)) {
        problems.push('Contributors should be denoted by their id, a number.')
      } else if (field === 'prompt' || field === 'title' || field === 'id') {
        problems.push(`${fields}s are not allowed to be updated`)
      } else if (field === 'is_complete' && typeof story.is_complete !== "boolean") {
        problems.push('Stories being complete should be true or false.')
      } else if (field === 'created_at' || field === 'updated_at') {
        problems.push('You can not manually update publishing dates')
      }
    })
    return problems
  }

  static findStory = async (id) => {
    try {
      return knex('stories')
        .groupBy('id')
        .select()
        .having('id', '=', id)
    } catch (error) {
      console.error(error.message)
    }
  }

  static updateStory = async (newInfo, oldStory, response) => {
      const updatesToMake = Object.keys(newInfo)
      const newStory = updatesToMake.reduce((newStory, update, i) => {
        if (i === 0) newStory = oldStory
        if (update === 'contributions' || update === 'contributors') {
          newStory[update].push(newInfo[update])
        } else if (update === 'is_complete') {
          newStory.is_complete = newInfo.is_complete
        }
        return newStory
      }, {})
      try {
        knex('stories')
          .where({id: oldStory.id})
          .update({ 
            contributions: newStory.contributions,
            contributors: newStory.contributors,
            is_complete: newStory.is_complete
          })
          .then(() => {
            this.findStory(oldStory.id).then(story => {
              response.header("Access-Control-Allow-Origin", "*");
              response.status(200).json(story)
            })
          })
      } catch (error) {
        console.error(error.message)
      }
  }
}

module.exports = { UserHelper, PromptHelper, StoryHelper };