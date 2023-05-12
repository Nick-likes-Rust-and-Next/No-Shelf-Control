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