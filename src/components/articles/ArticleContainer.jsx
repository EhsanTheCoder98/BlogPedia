import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const ArticleContainer = ({ info }) => {
  const { title, slug, coverPhoto, author } = info;
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 , height:'400px' }}>
      <CardHeader
        avatar={<Avatar src={author.avatar.url} sx={{marginRight:2}} />}
        title={
          <Typography component="p" variant="p" color="text.secondary">
            {author.name}
          </Typography>
        }
      />
      <CardMedia component='img' height='194' image={coverPhoto.url} alt={slug} />
      <CardContent>
        <Typography component='h3' variant="h6" color='text.primary' fontWeight='300' fontSize='small'>{title}</Typography>
      </CardContent>
      <Divider variant="middle" sx={{marginBottom:1}}/>
      <CardActions>
        <Button variant="outlined" size="small" sx={{width:'100%' , borderRadius:2}}>Read The Article</Button>
      </CardActions>
    </Card>
  );
};

export default ArticleContainer;
