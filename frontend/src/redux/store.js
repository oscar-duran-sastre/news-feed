import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news/newsSlice";
import oneNewsReducer from "./news/oneNewsSlice";

export default configureStore({
  reducer: {
    news: newsReducer,
    oneNews: oneNewsReducer,
  },
});
