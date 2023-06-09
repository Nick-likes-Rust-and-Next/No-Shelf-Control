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
    booksByIds(ids: [ID!]!): [Book!]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(title: String!, subtitle: String, author: String!, publishedDate: String, pageCount: Int, description: String, image: String): Book
    updateUser(id: ID!, bookID: ID!): User
  }
`;

module.exports = typeDefs;
