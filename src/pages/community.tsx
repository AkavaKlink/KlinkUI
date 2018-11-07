import * as React from "react";
import Header from './components/header';
import { Container, Grid } from 'semantic-ui-react';
import ReferralTable from "./components/referralTable";

class Community extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Header/>
        <Container>
          <Grid>
            <Grid.Row>
              <h1>Community</h1>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
              <ReferralTable/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Community;
