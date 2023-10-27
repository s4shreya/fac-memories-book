import { useSelector } from "react-redux";

import Post from "./post/post";

const Posts = () => {
  const posts = useSelector(state => state.posts);

  console.log(`in posts, array: ${posts.posts}`);

  return (
    <div>
      {posts.posts.map(post => {
        <Post />
        {console.log(`in map func ${post.tags}`)}
      })}
      Posts
      <Post />
      <Post />
    </div>
  );
};
export default Posts;
