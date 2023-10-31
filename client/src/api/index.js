import axios from "axios";

const BASE_URL = "http://localhost:5000/posts";

export const getPosts = () => axios.get(BASE_URL);
export const createPost = (newPost) => axios.post(BASE_URL, newPost);
export const updatePost = (id, postData) =>
  axios.patch(`${BASE_URL}/${id}`, postData);
export const deletePost = (id) => axios.delete(`${BASE_URL}/${id}`);
