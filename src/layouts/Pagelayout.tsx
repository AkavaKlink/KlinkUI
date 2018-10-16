import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Landing from "../pages/landing";

const Pagelayout = () => {
  return(
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default Pagelayout;
