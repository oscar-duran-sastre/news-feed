import React from "react";
import { Card, CardBody, Spinner } from "reactstrap";

const SpinnerCard = () => {
  return (
    <div class="row d-flex justify-content-center">
      <div class="col-11 py-3 newsCard">
        <Card body outline color="white">
          <CardBody className="text-center">
            <h3 class="my-5">Un momento mientras terminamos de cargar la información.</h3>
            <Spinner style={{ width: "5rem", height: "5rem" }} color="dark" className="my-5" />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default SpinnerCard;
