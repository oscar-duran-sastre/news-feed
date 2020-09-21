import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

const NewsCard = (props) => {
  return (
    <div class="row d-flex justify-content-around">
      {props.news.map((props) => {
        return (
          <div class="col-11 col-md-5 py-3 mb-3 mb-md-5 newsCard" key={props._id + props.publicationDate}>
            <Link to={`/news/${props._id}`}>
              <Card body outline color="white">
                <CardImg top width="50%" src={props.image} alt="" />
                <CardBody>
                  <CardTitle color="dark">
                    <h5 class="newsTitle">{props.title}</h5>
                  </CardTitle>
                </CardBody>
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
