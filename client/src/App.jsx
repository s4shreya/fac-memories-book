import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

import memories from "./images/memories.png";
import Posts from './components/posts/Posts';
import Form from './components/form/Form';

const App = () => {
  return (
    <>
      <Container maxidth="lg">
        <AppBar position="static" color="inherit">
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
