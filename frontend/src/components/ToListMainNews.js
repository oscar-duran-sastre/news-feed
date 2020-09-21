import React, { useEffect } from "react";
import toGetNews from "../api/toGetNews";
import { useDispatch, useSelector } from "react-redux";
import { findStarted, findSuccess, selectIsLoading, selectNewsList } from "../redux/news/newsSlice";
import { Spinner, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import "./ToListMainNews.css";

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
          {news.map((news) => {
            return (
              <div class="col-11 col-md-5 py-3 mb-3 mb-md-5 newsCard" key={news._id + news.publicationDate}>
                <Link to={`/news/${news._id}`}>
                  <Card>
                    <CardImg top width="50%" src={news.image} alt="" />
                    <CardBody>
                      <CardTitle color="dark">
                        <h5 class="newsTitle">{news.title}</h5>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ToListMainNews;
