import { Container, Grid, Typography } from "@mui/material";
import React from "react";

// components
import Authors from "../authors/Authors";
import Articles from "../articles/Articles";

const Homepage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3}>
          <Typography component="h3" variant="h5" fontWeight="bold" mb={3} >
            Authors
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography component="h3" variant="h5" fontWeight="bold" mb={3}>
            Articles
          </Typography>
          <Articles />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
