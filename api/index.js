import express from 'express'
import bodyParser from 'body-parser'
import { apolloExpress, graphiqlExpress } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools'

import { schema, resolvers } from './schema'
import { Authors } from './sql/models'

// Choose a proprietary port
let PORT = 3010
if (process.env.PORT) {
  PORT = parseInt(process.env.PORT, 10) + 100
}

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))  // parse application/x-www-form-urlencoded
app.use(bodyParser.json())                          // parse application/json
app.use(express.static('public'))

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
})

app.use('/graphql', apolloExpress((req) => {
  // Get the query, the same way express-graphql does it
  // https://github.com/graphql/express-graphql/blob/3fa6e68582d6d933d37fa9e841da5d2aa39261cd/src/index.js#L257
  const query = req.query.query || req.body.query
  if (query && query.length > 2000) {
    // None of our app's queries are this long
    // Probably indicates someone trying to send an overly expensive query
    throw new Error('Query too large.')
  }
  return {
    schema: executableSchema,
    context: {
      Authors: new Authors(),
    },
  }
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}))

app.listen(PORT, () => console.log( // eslint-disable-line no-console
  `Server is now running on http://localhost:${PORT}`
))
