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

app.get('/authors', async(request, response) => {
  try {
    knex.select().from("authors")
      .then((authors) => response.status(200).json(authors))
  } catch (error) {
    console.error(error.message)
  }
})

app.post('/authors', async(request, response) => {
  const author = request.body
  const requiredKeys = ['name', 'email']
  if (requiredKeys.every(value => Object.keys(author).includes(value))) {
    try {
      knex('authors').insert({ name: author.name, email: author.email })
        .then((response) => console.log(response))
    } catch (error) {
      console.error(error.message)
    }
  } else {
    //return an error message
    response.status(422).json(`You don't got the right info`)
  }
})

app.listen(app.get('port'), () => {
  console.log(`This server is running on http://localhost:${app.get('port')}`)
})