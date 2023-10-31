import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api";

// Action creators of asynchronous actions
// createAsyncThunk accepts 2 arguments- prefix for type of action: pending, fulfilled and rejected;
// and a callback payload creator that returns a promise containing result of asynchronous logic
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const { data } = await api.getPosts();
    return data;
  } catch (error) {
    console.log(`An error occurred:- ${error}`);
    return error.message;
  }
});

// action for creating post
export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  try {
    const { data } = await api.createPost(post);
    return data;
  } catch (error) {
    console.log(`An error occurred:- ${error}`);
    return error.message;
  }
});

// action for updating post
export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
  try {
    const id = post.currentId;
    const postData = post.postData;
    const { data } = await api.updatePost(id, postData);
    return data;
  } catch (error) {
    console.log(`Error:- ${error}`);
    return error;
  }
});

// action for deleting post
export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  try {
    await api.deletePost(id);
    return id;
  } catch (error) {
    console.log(`Error is:- ${error}`);
    return error;
  }
});
