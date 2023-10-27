import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../api";

// Action creators of asynchronous actions
// createAsyncThunk accepts 2 arguments- type of action: pending, fulfilled and rejected;
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

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  try {
    const { data } = await api.createPost(post);
    return data;
  } catch (error) {
    console.log(`An error occurred:- ${error}`);
    return error.message;
  }
});
