import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "oneNews",
  initialState: {
    isLoading: false,
    one: undefined,
    isError: false,
  },
  reducers: {
    findStarted: (state) => {
      return { ...state, isLoading: true };
    },
    findSuccess: (state, action) => {
      return { ...state, one: action.payload, isLoading: false, isError: false };
    },
    findError: (state) => {
      return { ...state, isLoading: false, isError: true };
    },
  },
});

const { findStarted, findSuccess, findError } = newsSlice.actions;

const selectIsLoading = (state) => state.oneNews.isLoading;
const selectNewsOne = (state) => state.oneNews.one;
const selectIsError = (state) => state.oneNews.isError;

export default newsSlice.reducer;
export { newsSlice, findStarted, findSuccess, findError, selectIsLoading, selectNewsOne, selectIsError };
