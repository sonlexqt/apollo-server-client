exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('authors', (table) => {
      table.increments()
      table.timestamps()
      table.string('first_name')
      table.string('last_name')
    }),
  ])
}

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('authors'),
  ])
}
