require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/exquisite_data`,
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

  static authenticateUser = (userAccount, attemptedPassword, response) => {
    try {
      if (userAccount[0].password === attemptedPassword) {
        return response.status(200).json(this.makeSecureUserResponse(userAccount[0]))
      } else {
        return response.status(422).json('An incorrect password was provided!')
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  static findAuthorByNameOrEmail = async (queryType, queryValue) => {
    return knex('authors')
      .groupBy('id')
      .select()
      .having(queryType, '=', queryValue)
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
    return knex("prompts")
      .groupBy("id")
      .select()
      .having("id", "=", id)
  }
}

export { UserHelper, PromptHelper }