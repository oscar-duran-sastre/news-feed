import React, { useEffect } from "react";
import toGetOneNews from "../api/toGetOneNews";
import { useDispatch, useSelector } from "react-redux";
import { findStarted, findSuccess, selectIsLoading, selectNewsOne } from "../redux/news/oneNewsSlice";
import { useParams } from "react-router-dom";
import "./ToListMainNews.css";
import SpinnerCard from "./SpinnerCard";
import OneNewsCard from "./OneNewsCard";

const ToListOneNews = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const oneNews = useSelector(selectNewsOne);

  const { _id } = useParams();
  console.log(_id);

  const fetchData = async () => {
    dispatch(findStarted());
    const data = await toGetOneNews(_id);
    console.log(data);
    dispatch(findSuccess(data));
  };

  useEffect(() => {
    fetchData();
  }, [_id]);

  return (
    <div>
      {isLoading || !oneNews ? (
        <SpinnerCard />
      ) : (
        <OneNewsCard
          title={oneNews.title}
          image={oneNews.image}
          publicationDate={oneNews.publicationDate}
          content={oneNews.content}
          relatedNews={oneNews.relatedNews}
          sourceUrl={oneNews.sourceUrl}
        />
      )}
    </div>
  );
};

export default ToListOneNews;
