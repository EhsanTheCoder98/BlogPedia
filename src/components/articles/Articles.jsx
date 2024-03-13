import React from "react";
// MUI
import { Grid } from "@mui/material";
// components
import ArticleContainer from "./ArticleContainer";
// graphql
import { useQuery } from "@apollo/client";
import { GET_ARTICLE_INFO } from "../../graphql/queries";

const Articles = () => {
  const { loading, data } = useQuery(GET_ARTICLE_INFO);
  if (!loading)
    return (
      <Grid container spacing={2}>
        {data.posts.map((post) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ArticleContainer info={post} />
            </Grid>
          );
        })}
      </Grid>
    );
};

export default Articles;
