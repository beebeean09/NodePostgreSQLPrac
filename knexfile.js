// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      filename: './models/todos.sql'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'todos',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'todos',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
