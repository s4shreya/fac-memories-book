import { useSelector } from "react-redux";

import { Grid, CircularProgress } from "@mui/material";

import Post from "./post/post";

const Posts = (props) => {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {!posts.posts.length ? (
        <CircularProgress />
      ) : (
        <Grid container alignItems="stretch" spacing={3}>
          {posts.posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} setCurrentId={props.setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
export default Posts;
