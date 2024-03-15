import { gql } from "@apollo/client";

const GET_ARTICLE_INFO = gql`
  query {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      name
      slug
      avatar {
        url
      }
      field
      id
    }
  }
`;

const GET_AUTHOR = gql`
  query getAutor($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;
const GET_POST = gql`
  query postInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
      slug
    }
  }
`;
export { GET_ARTICLE_INFO, GET_AUTHORS_INFO, GET_AUTHOR, GET_POST };
