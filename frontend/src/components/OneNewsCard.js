import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import ButtonNews from "./ButtonNews";

const OneNewsCard = (props) => {
  const { title, image, publicationDate, content, relatedNews, sourceUrl } = props.news;

  return (
    <div class="row d-flex justify-content-around">
      <div class="col-11 py-3 mb-3 mb-md-5 newsCard">
        <Card body outline color="white">
          <CardBody>
            <CardTitle color="dark">
              <h3 class="newsTitle">{title}</h3>
            </CardTitle>
          </CardBody>
          <CardImg top width="100%" src={image} alt="" />
          <CardBody>
            <CardTitle color="dark">
              <span>{publicationDate}</span>
            </CardTitle>
            <CardText className="mb-4">
              <span>{content}</span>
            </CardText>
            <Link to={`/news/${relatedNews}`}>
              <ButtonNews color="secondary" title="Siguiente noticia relacionada" />
            </Link>
            <a href={sourceUrl}>
              <CardText className="mt-4">
                <small class="oneNewsURL">{sourceUrl}</small>
              </CardText>
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default OneNewsCard;
