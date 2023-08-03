// this file is adapted from module 22 activity 24
// create type for ImageDetails model and then new query called uploads to receive the array of ImageDetails
// create mutation to allow for uploadImage

const typeDefs = `
  type Category{
    _id: ID
    name: String
  }
  
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    userName: String
    email: String
    bio: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type UserWithImages {
    _id: ID
    userName: String
    email: String
    bio: String
    images: [ImageDetails!]
  }
  
  type Comment {
    _id: ID
    user: User
    comment: String
    createdAt: String
  }

  type ImageDetails{
    _id: ID
    image: String
    title: String!
    description: String!
    declaration: Boolean!
    critique: Boolean
    price: Float
    canPurchase: Boolean
    purchasePrice: Float
    canDownload: Boolean
    selectedMedium: String
    user: User
    comments: [Comment]
  }

  type Auth {
    token: ID
    user: User
  }
  
  type Query {
    user: User
    users: [User]
    images: [ImageDetails]
    getUserImages(_id: ID): [ImageDetails]
    getUserProfile(_id: ID): User
    image(imageId: ID!): ImageDetails
    usersWithImages: [UserWithImages]
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(userName: String!, bio: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    uploadImage(userId: ID!, image: String, title: String!, description: String!, declaration: Boolean!, critique: Boolean, price: Float, canDownload: Boolean, purchasePrice: Float, canPurchase: Boolean, selectedMedium: String): ImageDetails!
    addComment(imageId: ID!, comment: String!): ImageDetails
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product
  }
  `;
module.exports = typeDefs;
