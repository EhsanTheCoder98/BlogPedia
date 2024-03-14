import React from "react";

// graphql
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
// MUI
import { Avatar, Divider, Grid, Typography } from "@mui/material";

const Authors = () => {
  const { data, loading } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <h1>loading authors</h1>;
  console.log(data);
  return (
    <div>
      <Grid
        container
        sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
      >
        {data.authors.map((author,index) => {
          return (
            <React.Fragment key={author.id}>
              <Grid item xs={12} padding={2}>
                <a
                  href={`authors/${author.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  <Avatar src={author.avatar.url} sx={{ marginRight: 2 }} />
                  <Typography component="p" variant="p" color="text.secondary">
                    {author.name}
                  </Typography>
                </a>
              </Grid>
              {index !== data.authors.length -1 && 
              <Grid item xs={12}>
              <Divider variant="middle" />
              </Grid>
              }
            </React.Fragment>
          );
        })}
      </Grid>
    </div>
  );
};

export default Authors;
