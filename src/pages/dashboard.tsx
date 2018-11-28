import * as React from "react";
import Header from './components/header';
import { Container, Grid, Button } from 'semantic-ui-react';
// import ReferralTable from "./components/referralTable";

class Dashboard extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Header/>
        <Container>
          <Grid>
            <Grid.Row>
              <h1>Welcome Back!</h1>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
              <a href="/new-referral">
                <Button primary>Submit A Referral</Button>
              </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
