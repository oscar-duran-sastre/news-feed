import React, { useEffect } from "react";
import toGetNews from "../api/toGetNews";
import { useDispatch, useSelector } from "react-redux";
import { findStarted, findSuccess, selectIsLoading, selectNewsList } from "../redux/news/newsSlice";
import "./ToListMainNews.css";
import SpinnerCard from "./SpinnerCard";
import NewsCard from "./NewsCard";

const ToListMainNews = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const news = useSelector(selectNewsList);

  const fetchData = async () => {
    dispatch(findStarted());
    const data = await toGetNews();
    console.log(data);
    dispatch(findSuccess(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <SpinnerCard />
      ) : (
        <NewsCard news={news} _id={news._id} image={news.image} title={news.title} />
      )}
    </div>
  );
};

export default ToListMainNews;
