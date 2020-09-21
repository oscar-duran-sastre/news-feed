import React, { useEffect, useState } from "react";
import toGetOneNews from "../api/toGetOneNews";
import { useDispatch, useSelector } from "react-redux";
import { findStarted, findSuccess, selectIsLoading, selectNewsOne } from "../redux/news/oneNewsSlice";
import { Spinner, Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
import { useParams } from "react-router-dom";
import "./ToListMainNews.css";
import ButtonNews from "./ButtonNews";
import { Link } from "react-router-dom";

const ToListOneNews = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const oneNews = useSelector(selectNewsOne);

  const [toRefresh, setToRefresh] = useState(0);

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
  }, [toRefresh]);

  return (
    <div>
      {isLoading || !oneNews ? (
        <div class="row d-flex justify-content-center">
          <div class="col-11 py-3 newsCard">
            <Card body outline color="white">
              <CardBody className="text-center">
                <h2 class="my-5">Un momento mientras terminamos de cargar la información.</h2>
                <Spinner style={{ width: "5rem", height: "5rem" }} color="dark" className="my-5" />
              </CardBody>
            </Card>
          </div>
        </div>
      ) : (
        <div class="row d-flex justify-content-around">
          <div class="col-11 py-3 mb-3 mb-md-5 newsCard">
            <Card body outline color="white">
              <CardBody>
                <CardTitle color="dark">
                  <h5 class="newsTitle">{oneNews.title}</h5>
                </CardTitle>
              </CardBody>
              <CardImg top width="100%" src={oneNews.image} alt="" />
              <CardBody>
                <CardTitle color="dark">
                  <span>{oneNews.publicationDate}</span>
                </CardTitle>
                <CardText className="mb-4">
                  <span>{oneNews.content}</span>
                </CardText>
                <Link to={`/news/${oneNews.relatedNews}`} onClick={() => setToRefresh(toRefresh + 1)}>
                  <ButtonNews color="secondary" title="Siguiente noticia relacionada" />
                </Link>
                <a href={oneNews.sourceUrl}>
                  <CardText className="mt-4">
                    <small class="oneNewsURL">{oneNews.sourceUrl}</small>
                  </CardText>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToListOneNews;
