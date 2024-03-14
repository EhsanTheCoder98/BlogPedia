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

const GET_AUTHOR = gql`
query getAutor($slug:String!){
  author(where: {slug:$slug}) {
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

`
export {GET_ARTICLE_INFO,GET_AUTHORS_INFO,GET_AUTHOR} ;