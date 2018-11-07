import * as React from "react";
import Header from "./components/header";
import Login from "./components/login";
import { Container, Grid } from 'semantic-ui-react';

class Landing extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Header />
        <Container>
          <Grid>
            <Grid.Row className="hero-title">
              <h1>Welcome</h1>
            </Grid.Row>
            <Login/>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Landing;
