require('dotenv').config()

module.exports = {
  development: {
    client: "pg",
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/exquisite`,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds/dev",
    },
    useNullAsDefault: true,
  },
  
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds/dev",
    },
    useNullAsDefault: true,
  },
};
