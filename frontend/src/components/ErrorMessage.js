import React from "react";
import { Card, CardBody } from "reactstrap";
import ButtonNews from "./ButtonNews";

const ErrorMessage = (props) => {
  return (
    <div class="row d-flex justify-content-center">
      <div class="col-11 py-3 newsCard">
        <Card body outline color="white">
          <CardBody className="text-center">
            <h3 class="my-5">Se ha producido un error. Por favor, inténtelo de nuevo más tarde.</h3>
            <ButtonNews
              color="secondary"
              size="lg"
              title="Reintentar"
              className="my-5"
              click={() => props.fetch()}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ErrorMessage;
