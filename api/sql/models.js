import knex from './connector'
import * as _ from 'lodash'

const toCamelCase = (row) => {
  return _.mapKeys(row, (value, key) => {
    return _.camelCase(key)
  })
}

export class Authors {
  getAuthorByName(firstName, lastName) {
    const query = knex('authors')
      .where({
        first_name: firstName,
        last_name: lastName,
      })
    return query.then(([row]) => {
      return toCamelCase(row)
    })
  }
  addAuthor(firstName, lastName) {
    return new Promise((resolve, reject) => {
      knex('authors')
      .returning(['id', 'first_name', 'last_name'])
      .insert({
        first_name: firstName,
        last_name: lastName,
        created_at: new Date(),
      })
      .then(([row]) => {
        resolve(toCamelCase(row))
      })
    })
  }
}
