import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation Mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

export const ADD_USER = gql`
    mutation Mutation(
        $username: String!
        $email: String!
        $password: String!
        $firstName: String!
        $lastName: String!
    ) {
        addUser(
            username: $username
            email: $email
            password: $password
            firstName: $firstName
            lastName: $lastName
        ) {
            token
        }
    }
`;

export const ADD_BOOK = gql`
    mutation UpdateUser($id: ID!, $bookID: ID!) {
        updateUser(id: $id, bookID: $bookID) {
            _id
            books {
                _id
            }
        }
    }
`;
