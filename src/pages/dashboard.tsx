import * as React from "react";
import Header from './components/header';
import { Container, Grid, Button } from 'semantic-ui-react';
import ReferralTable from "./components/referralTable";
import * as data from  "../data/main.json";

interface DashboardState {
  data: any;
}

class Dashboard extends React.Component<{}, DashboardState> {

  public constructor(props: any) {
    super(props);
    // when ingesting data, filter by only you
    this.state = {
      data: data
    };
  }

  public render(): JSX.Element {
    const { data } = this.state;
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
              <ReferralTable data={data} />
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
