import React from "react";

import { gql, useQuery } from "@apollo/client";

const GET_DATA = gql`
  query{
      posts{
        title
      },
      comments{
        name,
        text
      }
    }
`;
const App = () => {
  const { data, loading } = useQuery(GET_DATA);
  console.log({ data, loading });
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
