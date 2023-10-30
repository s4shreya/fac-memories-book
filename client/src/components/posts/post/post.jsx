import moment from "moment";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Modal,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Post = ({ post, setCurrentId }) => {
  console.log(`in posts component, posts is: ${post}`);

  return (
    <Card>
      <CardMedia
        image={post.selectedFile}
        title={post.title}
        style={{ width: "300px", height: "200px" }}
      />
      <div>
        <Button
          style={{ color: "black", float: "right" }}
          size="small"
          onClick={() => {setCurrentId(post._id)}}
        >
          <MoreHorizIcon fontSize="small" />
        </Button>
      </div>
      <div>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" size="small" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button color="primary" size="small" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
