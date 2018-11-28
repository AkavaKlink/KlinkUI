import * as React from "react";
import Header from './components/header';
import { Container, Grid } from 'semantic-ui-react';
import ReferralTable from "./components/referralTable";

const data = require ("../data/main.json");

interface CommunityState {
  data: any;
}

class Community extends React.Component<{}, CommunityState> {

  public constructor(props: any) {
    super(props);
    this.state = {
      data: data,
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
              <h1>Community</h1>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
              <ReferralTable data={data} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Community;
