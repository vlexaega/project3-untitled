// this file is adapted from module 22 activity 24
// create type for ImageDetails model and then new query called uploads to receive the array of ImageDetails
// create mutation to allow for uploadImage

const typeDefs = `
  type User {
    _id: ID
    userName: String
    email: String
    bio: String
  }
  
  type ImageDetails{
    _id: ID
    image: String
    title: String!
    description: String
    user: User
  }

  type Auth {
    token: ID
    user: User
  }
  
  type Query {
    user: User
    users: [User]
    images: [ImageDetails]
  }

  type Mutation {
    addUser(userName: String!, bio: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    uploadImage(userId: ID!, image: String,
      title: String!, description: String): ImageDetails!

  }
  `;
module.exports = typeDefs;
