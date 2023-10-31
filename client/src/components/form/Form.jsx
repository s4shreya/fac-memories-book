import { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { TextField, Button, Typography, Paper } from "@mui/material";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (currentId) {
      const data = {currentId, postData};
      dispatch(updatePost(data));
    } else dispatch(createPost(postData));
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={submitHandler}>
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(event) =>
            setPostData({ ...postData, creator: event.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(event) =>
            setPostData({ ...postData, title: event.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(event) =>
            setPostData({ ...postData, message: event.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(event) =>
            setPostData({ ...postData, tags: event.target.value })
          }
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            value={postData.selectedFile}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
