import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
      type: String,
      default: 0,
    },
    createdAt: {
      type: Number,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;