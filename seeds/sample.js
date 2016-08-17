
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('authors').insert({id: 1, 'first_name': 'Son', 'last_name': 'Le'}),
        knex('authors').insert({id: 2, 'first_name': 'Hung', 'last_name': 'Vo'}),
        knex('authors').insert({id: 3, 'first_name': 'Trieu', 'last_name': 'Nguyen'}),
      ])
    })
}
