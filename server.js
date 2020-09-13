require('dotenv').config()

import express, { response } from 'express'
import cors from 'cors'

const app = express()
const knex = require('knex')({
  client: 'pg',
  connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/exquisite_data`
})

app.use(express.json())
app.use(cors())

app.set('port', process.env.PORT || 3005)
app.locals.title = "The Exquisite Corpse server"

//AUTHORS AND USERS
app.get('/api/v1/authors', async(request, response) => {
  try {
    knex.select().from('authors')
      .then((authors) => response.status(200).json(authors))
  } catch (error) {
    console.error(error.message)
  }
})

app.post('/api/v1/authors', async (request, response) => {
  const author = request.body
  const requiredKeys = ['name', 'email', 'password']

  if (requiredKeys.every((value) => Object.keys(author).includes(value))) {
    try {
      knex('authors')
        .insert({ 
          name: author.name, 
          email: author.email, 
          password: author.password 
        })
        .then((response) => response.status(200).json(`${author.name} has been created`))
    } catch (error) {
      console.error(error.message)
    }
  } else {
    response.status(422).json(`You don't got the right info`)
  }
})

const isAuthor = async (id) => {
  let author 
  await knex("authors")
    .groupBy("id")
    .select()
    .having("id", "=", id)
    .then(foundAuthor => author = foundAuthor);
  return author.length === 1 ? true: false;
};

const checkLoginInfo = (info) => {
  const infoProvided = Object.keys(info)
  const result = { hasEnoughInfo: false, message: '', userType: ''}
  if (!infoProvided.includes("password")) {
    result.message = 'You need to provide a password'
  } else if (!infoProvided.some(info => ["email", "name"].includes(info))) {
    result.message = 'Please provide a username or an email to login'
  } else {
    result.userType = infoProvided.includes('name') ? 'name' : 'email' 
    result.hasEnoughInfo = true
  }
  return result
}

const makeSecureUserResponse = ({ id, name, email, bio, created_at, updated_at}) =>{
  return {
    id: id,
    name: name,
    email: email,
    bio: bio,
    created_at: created_at,
    updated_at: updated_at
  }
}

const authenticateUser = (userAccount, attemptedPassword, response) => {
  try {
    if (userAccount[0].password === attemptedPassword) {
      return response.status(200).json(makeSecureUserResponse(userAccount[0]))
    } else {
      return response.status(422).json('An incorrect password was provided!')
    }
  } catch (error) {
    console.error(error.message)
  }
}

app.post('/api/v1/authors/login', async (request, response) => {
  const login = checkLoginInfo(request.body)
  if (login.hasEnoughInfo) {
    try {
      knex('authors')
        .groupBy('id')
        .select()
        .having(login.userType, '=', request.body[login.userType])
        .then(user => {
          if (user.length === 0) {
            return response.status(422).json('A user by that name was not found')
          } else {
            return authenticateUser(user, request.body.password, response)
          }
        })
    } catch (error) {
      console.error(error.message)
    }
  } else {
    response.status(422).json(login.message)
  }
})

app.patch('/api/v1/authors/:id', async (request, response) => {
  const info = Object.keys(request.body)
  const acceptableUpdates = ['email', 'password', 'bio']
  const getAuthor = () => knex("authors").where({ id: request.params.id })
  return isAuthor(request.params.id)
    .then(isAuthor => {
      if(!isAuthor) {
        return response.status(404).json(`There is not a user with that id`) 
      } else if (info.some(detail => acceptableUpdates.includes(detail) === false)) {
        return response.status(422).json(`You can only update email, password, or bio`)
      } else {
        try {
          info.forEach(async (detail, i) => {
            knex("authors")
              .where({ id: request.params.id })
              .update({ [detail]: request.body[detail] })
              .then(() => {
                i === info.length - 1
                  && response.status(200).json('Your account has been updated!')
              })
            })
        } catch (error) {
          console.error(error.message)
        }
      }
    })
})

// PROMPTS
const promptGenerator = (genre) => {
  try {
    const allPrompts = () => {
      return knex("prompts").groupBy("id").select();
    };
    const filterPrompts = () => {
      return genre ? allPrompts().having("genre", "=", genre) : allPrompts()
    };

    return filterPrompts().then((prompts) => {
      const randomIndex = Math.round(Math.random() * prompts.length - 1);
      return prompts[randomIndex]
    });
  } catch (error) {
    console.error(error.message);
  }
};

const findSpecificPrompt = (id) => {
  return knex("prompts")
    .groupBy("id")
    .select()
    .having("id", "=", id)
}

app.get('/api/v1/prompts', async (request, response) => {
  try {
    promptGenerator().then(prompt => {
      response.status(200).json(prompt)
    })
  } catch (error) {
    console.error(error)
  }
});  

app.get('/api/v1/prompts/:detail', async(request, response) =>  {
  try {
    const detail = request.params.detail
    let prompt;
    if(isNaN(detail)) {
      await promptGenerator(detail).then(randomPrompt => {
        prompt = randomPrompt
      })
    } else {
      await findSpecificPrompt(detail).then(specificPrompt => {
        prompt = specificPrompt
      })
    }
    response.status(200).json(prompt)
  } catch (error) {
    console.error(error);
  }
}) 
//STORIES
app.get('/api/v1/stories', (request, response) => {
  try {
    knex('stories')
      .select()
      .then(stories => response.status(200).json(stories))
  } catch (error) {
    console.error(error.message)
  }
})

app.get('/api/v1/stories/:id', (request, response) => {
  try {
    knex('stories')
      .groupBy('id')
      .select()
      .having('id', '=', request.params.id)
      .then(story => {
        return response.status(200).json(story)
      });
  } catch (error) {
    console.error(error.message)
  }
})

app.post('/api/v1/stories', (request, response) => {
  const storyInfo = request.body
  const requiredKeys = ['title', 'story', 'prompt']

  if (requiredKeys.every(key => Object.keys(storyInfo).includes(key))) {
    try {
      knex('stories')
        .insert({ 
          title: storyInfo.title, 
          story: storyInfo.story, 
          prompt: storyInfo.prompt 
        })
        .then(response => console.log(response))
    } catch (error) {
      console.error(error.message)
    }
  } else {
    response.status(422).json('Yer missin some info')
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`)
})