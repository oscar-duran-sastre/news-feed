import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    isLoading: false,
    list: [],
    isError: false,
  },
  reducers: {
    findStarted: (state) => {
      return { ...state, isLoading: true };
    },
    findSuccess: (state, action) => {
      return { ...state, list: action.payload, isLoading: false, isError: false };
    },
    findError: (state) => {
      return { ...state, isLoading: false, isError: true };
    },
  },
});

const { findStarted, findSuccess, findError } = newsSlice.actions;

const selectIsLoading = (state) => state.news.isLoading;
const selectNewsList = (state) => state.news.list;
const selectIsError = (state) => state.news.isError;

export default newsSlice.reducer;
export { newsSlice, findStarted, findSuccess, findError, selectIsLoading, selectNewsList, selectIsError };
