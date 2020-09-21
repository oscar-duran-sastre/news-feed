import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    isLoading: false,
    list: [],
  },
  reducers: {
    findStarted: (state) => {
      return { ...state, isLoading: true };
    },
    findSuccess: (state, action) => {
      return { ...state, list: action.payload, isLoading: false };
    },
  },
});

const { findStarted, findSuccess } = newsSlice.actions;

const selectIsLoading = (state) => state.news.isLoading;
const selectNewsList = (state) => state.news.list;

export default newsSlice.reducer;
export { newsSlice, findStarted, findSuccess, selectIsLoading, selectNewsList };
