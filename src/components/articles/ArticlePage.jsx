import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spin from "../../gifs/Spin-1s-200px.gif";
// graphql
import { GET_POST } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
// MUI
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// components
import CommentForm from "../comment/CommentForm";

const ArticlePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, loading } = useQuery(GET_POST, {
    variables: {
      slug: params.slug,
    },
  });
  console.log({loading,data})
  return (
    <Container maxWidth="lg" sx={{minHeight:'100vh'}}>
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
        <Grid container>
          <Grid item xs={12} mt={9} sx={{display:'flex', justifyContent:'space-between' }}>
              <ArrowBackIosIcon sx={{marginTop:'10px', ":hover":{cursor:"pointer"}}} onClick={()=>navigate(-1)} />
            <Typography
              component="h2"
              variant="h4"
              color="primary"
              fontWeight="900"
            >
              {data.post.title}
            </Typography>
            <div></div>
          </Grid>
          <Grid item xs={12} mt={6} >
            <img src={data.post.coverPhoto.url} alt={data.post.slug} width="100%" style={{borderRadius:15}}/>
          </Grid>
          <Grid item xs={12} mt={7} sx={{display:"flex", alignItems:'center'}}>
            <Avatar src={data.post.author.avatar.url} sx={{width:'80px', height:"80px", marginRight:"20px"}}/>
            <Box component="div">
            <Typography component='h3' variant="h6">{data.post.author.name}</Typography>
            <Typography component='h3' variant="h6" color="text.secondary">{data.post.author.field}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mt={10} fontSize={23}>
            <div dangerouslySetInnerHTML={{__html:data.post.content.html}}></div>
          </Grid>
          <Grid item xs={12}>
            <CommentForm slug={data.post.slug} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default ArticlePage;
