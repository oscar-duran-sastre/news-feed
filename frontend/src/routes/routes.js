import React from "react";
import { Switch, Route } from "react-router-dom";
import ToListMainNews from "../components/ToListMainNews";
import ToListOneNews from "../components/ToListOneNews";
import Home from "../components/Home";
import { ENDPOINT_NEWS } from "../api/constants";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path={ENDPOINT_NEWS}>
        <ToListMainNews />
      </Route>
      <Route exact path={ENDPOINT_NEWS + "/:_id"}>
        <ToListOneNews />
      </Route>
    </Switch>
  );
}

export default Routes;
