// this file is adapted from module 22 activity 24

const typeDefs = `
  type User {
    _id: ID
    userName: String
    email: string
  }
  
  type Auth {
    token: ID
    user: User
  }`