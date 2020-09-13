require('dotenv').config()

import express from 'express'
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
  const requiredKeys = ['name', 'email']

  if (requiredKeys.every((value) => Object.keys(author).includes(value))) {
    try {
      knex('authors')
        .insert({ 
          name: author.name, 
          email: author.email, 
          password: author.password 
        })
        .then((response) => console.log(response))
    } catch (error) {
      console.error(error.message)
    }
  } else {
    response.status(422).json(`You don't got the right info`)
  }
});
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