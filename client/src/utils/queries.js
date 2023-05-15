import { gql } from "@apollo/client";

export const QUERY_BOOK = gql`
    query book($title: String!) {
        book(title: $title) {
            title
            subtitle
            author
            publishedDate
            pageCount
            description
            image
            _id
        }
    }
`;

export const QUERY_BOOKS = gql`
    query books($title: String!) {
        books(title: $title) {
            title
            subtitle
            author
            publishedDate
            pageCount
            description
            image
            users
        }
    }
`;

export const QUERY_BOOK_ID = gql`
    query GetBooksByIds($ids: [ID!]!) {
        booksByIds(ids: $ids) {
            title
            author
            image
        }
    }
`;