import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Header from "../components/header";
import Dashboard from "../pages/dashboard";
import Landing from "../pages/landing";

const Pagelayout = () => {
  return(
    <div>
      <Header />
      <Container style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Container>
    </div>
  );
};

export default Pagelayout;
