import { useSelector } from "react-redux";

import Post from "./post/post";

const Posts = () => {
  const posts = useSelector(state => state.posts);

  console.log(`posts array is: ${posts.posts}`);

  return (
    <div>
      Posts
      <Post />
      <Post />
    </div>
  );
};
export default Posts;
