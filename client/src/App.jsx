import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { spacing } from '@mui/system';

import memories from "./images/memories.png";
import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
import { getPosts } from "./actions/posts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Container maxidth="lg">
        <AppBar position="static" color="inherit" sx={{mb: 5}}>
          <Typography variant="h2" align="center">
            Memories Book
            <img src={memories} alt="memories" height="60" />
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              jusify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;
