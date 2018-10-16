import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import Dashboard from "../pages/dashboard";
import Landing from "../pages/landing";

const Pagelayout = () => {
  return(
    <div>
      <Menu fixed="top">
        <Container>
          <Menu.Item as="a" header>
            Klink.io
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='signup'>
              Sign Up
            </Menu.Item>

            <Menu.Item name='help'>
              Help
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
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
