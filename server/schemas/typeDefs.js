// this file is adapted from module 22 activity 24

const typeDefs = `
  type User {
    _id: ID
    userName: String
    email: String
  }
  
  type Auth {
    token: ID
    user: User
  }
  
  type Query {
    user: User
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `;
module.exports = typeDefs;
