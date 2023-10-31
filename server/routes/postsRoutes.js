import express from 'express';

import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
// ":" colon is used in path to specify that it is dynamic
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;