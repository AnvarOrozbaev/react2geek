import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../const';
import axios from 'axios';

export interface article {
  id: number;
  title: string;
}
export interface articlesState {
  articles: article[];
  error: string;
}

const initialState: articlesState = {
  articles: [],
  error: '',
};
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(api);
      return response.data as article[];
    } catch (error) {
      let message = '';
      if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.error = '';
      state.articles = payload;
    }),
      builder.addCase(fetchArticles.rejected, (state, { payload }) => {
        state.error = payload as string;
      });
  },
});

export default articlesSlice.reducer;
