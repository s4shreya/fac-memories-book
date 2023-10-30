import { createSlice, nanoid } from "@reduxjs/toolkit";

import { getPosts, createPost, updatePost } from "../actions/posts";

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
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      });
  },
});

// export const { postsReducer } = postsSlice.actions;
export default postsSlice.reducer;
