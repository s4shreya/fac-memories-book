import axios from "axios";

const BASE_URL = "http://localhost:5000/posts";

export const getPosts = () => axios.get(BASE_URL);
export const createPost = (newPost) => axios.post(BASE_URL, newPost);
