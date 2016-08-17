import knex from './connector'
import * as _ from 'lodash'

export class Authors {
  getAuthorByName(firstName, lastName) {
    const query = knex('authors')
      .where({
        first_name: firstName,
        last_name: lastName,
      })
    return query.then(([row]) => {
      return _.mapKeys(row, (value, key) => {
        return _.camelCase(key)
      })
    })
  }
}
