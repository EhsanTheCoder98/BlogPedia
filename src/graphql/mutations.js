import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation {
    createComment(
      data: { name: "", email: "", text: "", post: { connect: { slug: "" } } }
    ) {
      id
    }
  }
`;

export {SEND_COMMENT} ;
