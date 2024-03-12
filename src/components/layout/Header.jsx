import React from "react";

// MUI
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Header = () => {
  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth='lg'>
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            BlogPedia
          </Typography>
          <AutoStoriesIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
