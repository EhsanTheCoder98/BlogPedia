import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });
  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("Please Fill All Sections!", {
        position: "top-center",
      });
    }
    if (data) {
      toast.success("Your comment is being reviewed and approved!", {
        position: "top-center",
      });
      setText("")
    }
  };
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight="700" color="primary">
          Let Us Know Your Comment!
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="UserName"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="Email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="Comment Text"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={5}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {!loading ? (
          <Button variant="contained" color="primary" onClick={sendHandler}>
            Send Your Comment
          </Button>
        ) : (
          <Button variant="disabled" color="primary">
            Sending...
          </Button>
        )}
        
        <ToastContainer />
      </Grid>
    </Grid>
  );
};

export default CommentForm;
