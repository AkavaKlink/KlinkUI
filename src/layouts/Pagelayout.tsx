import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "src/pages/dashboard";
import Landing from "src/pages/landing";
import Community from 'src/pages/community';
import NewReferral from 'src/pages/newReferral';

const Pagelayout = () => {
  return(
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/new-referral" component={NewReferral} />
      </Switch>
    </div>
  );
};

export default Pagelayout;
