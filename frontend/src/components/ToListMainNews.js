import React, { useEffect } from "react";
import toGetNews from "../api/toGetNews";
import { useDispatch, useSelector } from "react-redux";
import {
  findStarted,
  findSuccess,
  findError,
  selectIsLoading,
  selectNewsList,
  selectIsError,
} from "../redux/news/newsSlice";
import "./ToListMainNews.css";
import SpinnerCard from "./SpinnerCard";
import NewsCard from "./NewsCard";
import ErrorMessage from "./ErrorMessage";

const ToListMainNews = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const news = useSelector(selectNewsList);
  const isError = useSelector(selectIsError);

  const fetchData = async () => {
    try {
      dispatch(findStarted());
      const data = await toGetNews();
      console.log(data);
      dispatch(findSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(findError());
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let result = null;

  if (isLoading) {
    result = <SpinnerCard />;
  } else if (isError) {
    result = <ErrorMessage fetch={fetchData} />;
  } else if (news) {
    result = <NewsCard news={news} />;
  }

  return result;
};

export default ToListMainNews;
