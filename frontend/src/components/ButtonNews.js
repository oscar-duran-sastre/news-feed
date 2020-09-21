import React from "react";
import { Button } from "reactstrap";

const ButtonNews = (props) => {
  return <Button color={props.color}>{props.title}</Button>;
};

export default ButtonNews;
