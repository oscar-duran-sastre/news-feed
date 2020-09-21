import React, { useEffect } from "react";
import toGetOneNews from "../api/toGetOneNews";
import { useDispatch, useSelector } from "react-redux";
import {
  findStarted,
  findSuccess,
  findError,
  selectIsLoading,
  selectNewsOne,
  selectIsError,
} from "../redux/news/oneNewsSlice";
import { useParams } from "react-router-dom";
import "./ToListMainNews.css";
import SpinnerCard from "./SpinnerCard";
import OneNewsCard from "./OneNewsCard";
import ErrorMessage from "./ErrorMessage";

const ToListOneNews = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const oneNews = useSelector(selectNewsOne);
  const isError = useSelector(selectIsError);

  const { _id } = useParams();
  console.log(_id);

  const fetchData = async () => {
    try {
      dispatch(findStarted());
      const data = await toGetOneNews(_id);
      console.log(data);
      dispatch(findSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(findError());
    }
  };

  useEffect(() => {
    fetchData();
  }, [_id]);

  let result = null;

  if (isLoading) {
    result = <SpinnerCard />;
  } else if (isError) {
    result = <ErrorMessage fetch={fetchData} />;
  } else if (oneNews) {
    result = <OneNewsCard news={oneNews} />;
  }

  return result;
};

export default ToListOneNews;
