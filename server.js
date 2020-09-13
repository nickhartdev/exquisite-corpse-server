require("dotenv").config();

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

app.get('/api/v1/authors', async(request, response) => {
  try {
    knex.select().from("authors")
      .then((authors) => response.status(200).json(authors))
  } catch (error) {
    console.error(error.message)
  }
})

app.get("/api/v1/prompts", async (request, response) => {
  try {
    knex.select().from("prompts")
      .then((prompts) => response.status(200).json(prompts));
  } catch (error) {
    console.error(error.message);
  }
});  

app.get('/api/v1/prompts/:genre', async (request, response) => {
  try {
    knex('prompts')
      .groupBy('id')
      .select()
      .having('genre', '=', request.params.genre)
      .then(promptData => {
        const allPrompts = response.json(promptData)
        const randomIndex = Math.round(Math.random() * allPrompts.length)

        return allPrompts[randomIndex]
      })
  } catch (error) {
    console.error(error.message)
  }
})

app.post("/api/v1/authors", async (request, response) => {
  const author = request.body
  const requiredKeys = ["name", "email"];
  if (requiredKeys.every((value) => Object.keys(author).includes(value))) {
    try {
      knex("authors")
        .insert({ 
          name: author.name, 
          email: author.email, 
          password: author.password 
        })
        .then((response) => console.log(response));
    } catch (error) {
      console.error(error.message);
    }
  } else {
    //return an error message
    response.status(422).json(`You don't got the right info`);
  }
});

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

app.post("/api/v1/stories", (request, response) => {
  const storyInfo = request.body

  try {
    knex("stories")
      .insert({ 
        title: storyInfo.title, 
        story: storyInfo.story, 
        prompt: storyInfo.prompt 
      })
      .then(response => console.log(response));
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(app.get('port'), () => {
  console.log(`This server is running on http://localhost:${app.get('port')}`)
})