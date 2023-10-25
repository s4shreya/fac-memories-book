import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
        switch(action.type) {
            case "FETCH_ALL": {
                return action.payload;
            }
            default: {
                return state;
            }
        }
    }
  },
//   extraReducers: (builder) => {}
});

export const { getPosts, createPost } = postsSlice.actions;
export default postsSlice.reducer;
