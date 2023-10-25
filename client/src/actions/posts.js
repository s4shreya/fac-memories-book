import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../api';

// Action creators
export const getPosts = createAsyncThunk( async () => {
    try {
        const { data } = await api.getPosts();
        return {type: "FETCH_ALL", payload: data};
    }
    catch (error) {
        console.log(`An error occurred:- ${error}`);
    }
});