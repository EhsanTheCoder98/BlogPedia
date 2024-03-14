import { gql } from "@apollo/client";

const GET_ARTICLE_INFO = gql`
 query {
    posts{
        author{
            name
            avatar{
                url
            }
        }
        title
        slug
        id
        coverPhoto{
            url
        }
    }
 }
`

const GET_AUTHORS_INFO = gql`
query{
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
`
export {GET_ARTICLE_INFO,GET_AUTHORS_INFO} ;