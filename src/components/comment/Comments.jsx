import React from "react";
// graphQL
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENT } from "../../graphql/queries";
import { Avatar, Box, Grid, Typography } from "@mui/material";

const Comments = ({ slug }) => {
  const { loading, data } = useQuery(GET_POST_COMMENT, {
    variables: {
      slug,
    },
  });
  if (loading) return null;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          COMMENTS
          {data.comments.map((comment) => (
            <Grid
              item
              xs={12}
              key={comment.id}
              m={2}
              p={2}
              border="1px silver solid"
              borderRadius={1}
            >
              <Box
                component="div"
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                mb={3}
              >
                <Avatar>{comment.name[0]}</Avatar>
                <Typography
                  component="span"
                  variant="p"
                  fontWeight={700}
                  ml={1}
                  color="black"
                >
                  {comment.name}
                </Typography>
                <Typography component="p" variant="p" ml={2} color="black" fontWeight={500}>
                    {comment.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Comments;
