const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    firstName: String
    lastName: String
    books: [Book]
  }

  type Book {
    _id: ID
    title: String
    subtitle: String
    author: String
    publishedDate: String
    pageCount: Int
    description: String
    image: String
    users: User
  }

  input BookInput {
    _id: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    books(title: String): [Book]
    userBook(username: String!): Book
    book(title: String!): [Book]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(username: String!, book: BookInput!): [Book!]!  }
`;

module.exports = typeDefs;
