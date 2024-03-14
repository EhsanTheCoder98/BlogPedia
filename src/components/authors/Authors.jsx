import React from "react";

// graphql
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";

const Authors = () => {
  const { data, loading } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <h1>loading authors</h1>;
  console.log(data);
  return (
    <div>
      {data.authors.map((author) => {
        return <h1>{author.name}</h1>;
      })}
    </div>
  );
};

export default Authors;
