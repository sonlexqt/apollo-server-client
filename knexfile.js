module.exports = {
  // development: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'apollo_blog',
  //     user: 'sonle',
  //     password: '123456',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
  development: {
    client: 'postgresql',
    connection: {
      host: '54.82.189.232',
      port: 5432,
      database: 'apollo_blog',
      user: 'aviddoc',
      password: '12345678',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

// module.exports = {
//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3',
//     },
//   },
//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user: 'username',
//       password: 'password',
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: 'knex_migrations',
//     },
//   },
//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user: 'username',
//       password: 'password',
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: 'knex_migrations',
//     },
//   },
// }
