import React from "react";
import { Button } from "reactstrap";

const ButtonNews = (props) => {
  return (
    <Button color={props.color} size={props.size} onClick={props.click}>
      {props.title}
    </Button>
  );
};

export default ButtonNews;
