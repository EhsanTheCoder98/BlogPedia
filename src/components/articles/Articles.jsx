import React from "react";
import Spin from "../../gifs/Spin-1s-200px.gif";
// MUI
import { Grid } from "@mui/material";
// components
import ArticleContainer from "./ArticleContainer";
// graphql
import { useQuery } from "@apollo/client";
import { GET_ARTICLE_INFO } from "../../graphql/queries";

const Articles = () => {
  const { loading, data } = useQuery(GET_ARTICLE_INFO);
  if (loading)
    return (
      <div style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}>
        <img
          src={Spin}
        />
      </div>
    );
  return (
    <Grid container spacing={2}>
      {data.posts.map((post, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ArticleContainer info={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Articles;
