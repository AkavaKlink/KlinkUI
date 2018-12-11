import * as React from "react";
import Header from "./components/header";
import { Container, Grid, Button } from "semantic-ui-react";

class ProjectDetails extends React.Component<{},{}> {

  public render(): JSX.Element {
    return (
      <div>
        <Header/>
        <Container>
          <Grid>
            <Grid.Row>
              <h1>Project & Position Requirements</h1>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <img src="https://placehold.it/300x300"/>
                <p>Income: $86,0000</p>
                <p>Referral: $6,0000</p>
                <p>Location: Smalltown, NE</p>
              </Grid.Column>
              <Grid.Column width={12}>
                <h2>Project Details</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                 Sed nisi. Nulla quis sem at nibh elementum imperdiet. </p>
                 <h2>Skill Requirements</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  Sed nisi. Nulla quis sem at nibh elementum imperdiet. </p>
                  <h2>Terms</h2>
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={15}>
                <Button>Back</Button>
              </Grid.Column>
              <Grid.Column width={1}>
                <Button>Select</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default ProjectDetails;
