import React from "react";
import { Switch, Route } from "react-router-dom";
import ToListMainNews from "../components/ToListUsers";
import ToListOneNew from "./ToListOneNew";
import Home from "../components/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/news">
        <ToListMainNews />
      </Route>
      <Route exact path="/news/:_id">
        <ToListOneNew />
      </Route>
    </Switch>
  );
}

export default Routes;
