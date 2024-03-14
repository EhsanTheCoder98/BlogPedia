import React from "react";
import { useParams } from "react-router-dom";
import Spin from "../../gifs/Spin-1s-200px.gif";
import sanitize from "sanitize-html";
// graphql
import { GET_AUTHOR } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
// MUI
import { Avatar, Container, Grid, Typography } from "@mui/material";
// components
import ArticleContainer from "../articles/ArticleContainer";

const AuthorPage = () => {
  const params = useParams();
  const { data, loading } = useQuery(GET_AUTHOR, {
    variables: {
      slug: params.slug,
    },
  });
  console.log({ loading, data });
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      {loading ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "80px",
          }}
        >
          <img src={Spin} />
        </div>
      ) : (
        <Grid container mt={10}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={data.author.avatar.url}
              sx={{ width: "210px", height: "210px" }}
            />
            <Typography component="h3" variant="h6" color="text.primary">
              {data.author.name}
            </Typography>
            <Typography component="h3" variant="p" color="text.secondary">
              {data.author.field}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
            mt={6}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: sanitize(data.author.description.html),
              }} style={{fontSize:"1.3rem"}}
            ></div>
          </Grid>
          <Grid item>
              <Typography component='h3' variant="h5" mt={7}>{data.author.name}'s Articles</Typography>
              <Grid container spacing={5} mt={3}>
                {data.author.posts.map(post=>{
                    return(
                        <Grid item xs={12} sm={6} md={4} >
                            <ArticleContainer info={post}  />
                        </Grid>
                    )
                })}
              </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default AuthorPage;
