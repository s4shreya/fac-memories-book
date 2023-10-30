import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
// ":" colon is used in path to specify that it is dynamic
router.patch("/:id", updatePost);

export default router;