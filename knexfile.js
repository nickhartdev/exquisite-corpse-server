require('dotenv').config()

module.exports = {
  development: {
    client: "pg",
    connection: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/exquisite_data`,
    migrations: {
      directory: "./db/promigrations",
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true,
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/promigrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
};
