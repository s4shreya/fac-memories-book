import { createSlice, nanoid } from "@reduxjs/toolkit";

import { getPosts, createPost } from "../actions/posts";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  // extraReducers has a builder object that allows us to define reducers for asynchronous actions
  // defined outside the slice
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = [...state.posts, action.payload];
      });
  },
});

// export const { postsReducer } = postsSlice.actions;
export default postsSlice.reducer;
