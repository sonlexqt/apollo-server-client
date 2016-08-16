const rootSchema = [`
type Author {
  id: Int,
  firstName: String,
  lastName: String
}

type Query {
  author(firstName: String!, lastName: String!): Author
}

type Mutation {
  addAuthor(firstName: String!, lastName: String!): Author
}

schema {
  query: Query
  mutation: Mutation
}
`]

const rootResolvers = {
  Query: {
    author(_, { firstName, lastName }, context) {
      return context.Authors.getAuthorByName(firstName, lastName)
    },
  },
  Mutation: {
    addAuthor(_, { firstName, lastName }, context) {
      return Promise.resolve()
      .then(() => ({
        firstName,
        lastName,
      }))
    },
  },
}

export const schema = [...rootSchema]
export const resolvers = rootResolvers
