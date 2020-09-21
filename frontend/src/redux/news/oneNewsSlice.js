import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "oneNews",
  initialState: {
    isLoading: false,
    one: undefined,
  },
  reducers: {
    findStarted: (state) => {
      return { ...state, isLoading: true };
    },
    findSuccess: (state, action) => {
      return { ...state, one: action.payload, isLoading: false };
    },
  },
});

const { findStarted, findSuccess } = newsSlice.actions;

const selectIsLoading = (state) => state.oneNews.isLoading;
const selectNewsOne = (state) => state.oneNews.one;

export default newsSlice.reducer;
export { newsSlice, findStarted, findSuccess, selectIsLoading, selectNewsOne };
