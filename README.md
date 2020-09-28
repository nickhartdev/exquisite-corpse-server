# Exquisite Corpse

 [Exquisite Corpse](https://exquisite-corpse-2005fe.herokuapp.com/) is a collaborative creative writing game. Participants take turns writing a story, and pass their last sentence as a a prompt to the next contributor. The result is a fun and unpredictable collection of ideas and writing styles that form very unique bodies of text.

 Users of Exquisite Corpse are able to:
 * Read published (completed) stories.
 * Log in with a username and password (or create a new username if it doesn't already exist).
 * When logged in, users can contribute to stories in progress, or start new stories. 
 * When starting a new story, users can select a prompt from a variety of genres, or start from scratch.
 * A user has 2 minutes to write, and then they can pass their story on for contribution. 
 * Stories in progress will show up on the home page. 
 * Any user who is continuing a story can choose to end and publish a story if they see fit!

This was a Mod 3 project in Turing School of Software and Design's Front End Engineering program during the 2008 inning. This project was designed to help students better understand how to:
- Build an application with a React architecture.
- Learn a new technology in under a week.
- Test component and asynchronous functionality with the React Testing Library.
- Understand and utilize CRUD requests to interact with data. 
- Practice a professional GitHub workflow

The biggest learning goal of this project was to research and implement a completely new technology. For our project, we decided to build a back end and a homespun API using PostgresQL, Knex, and Express. this back end keeps track of all of our user's data, all of the stories and writing prompts. 

## Setup/Installation
- Clone down this repo and cd into this directory
- Run `npm install` in the root of the newly created directory to install the necessary dependencies
- Run `knex migrate:latest`
- Run `knex seed:run`
- Run `npm start`

## Contributors
This project was submitted on 9/15/2020 by [Aaron Burris-DeBoskey](https://github.com/Abdeboskey), [Carly Clift](https://github.com/carlymclift), [Greyson Elkins](https://github.com/GreysonElkins), and [Nick Hart](https://github.com/nickhartdev)
