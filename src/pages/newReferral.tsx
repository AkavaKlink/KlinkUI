import * as React from "react";
import Header from './components/header';
import { Container, Grid, Button } from 'semantic-ui-react';

class NewReferral extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Header/>
        <Container>
          <Grid>
            <Grid.Row>
              <h1>Who are you Referring?</h1>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Button primary>Company</Button>
              </Grid.Column>
              <Grid.Column width={8}>
                <Button secondary>Talent</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default NewReferral;
