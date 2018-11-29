import * as React from "react";
import { Grid, Form, Button } from "semantic-ui-react";
import TalentTable from "./talentTable";

interface TalentFormState {
  type: string;
}

class TalentForm extends React.Component<{}, TalentFormState> {

  public constructor(props: any) {
    super(props);
    this.state = {
      type: ""
    };
  }

  public updateTalentType(type: string) {
    this.setState({
      type
    });
  }

  public render(): JSX.Element {
    let { type } = this.state;
    return (
      <Form>
        <Grid>
          <Grid.Row>
            <h1>Talent Form</h1>
          </Grid.Row>
          <Grid.Row>
            <Button
              secondary
              onClick={() => this.updateTalentType('Engineer')}>
              Software Engineer
            </Button>
            <Button
              secondary
              onClick={() => this.updateTalentType('Manager')}>
              Project Manager
            </Button>
            <Button
              secondary
              onClick={() => this.updateTalentType('UX')}>
              UI/UX Engineer
            </Button>
            <Button
              secondary
              onClick={() => this.updateTalentType('Fullstack')}>
              Fullstack Developer
            </Button>
            <Button
              secondary
              onClick={() => this.updateTalentType('React')}>
              React Engineer
            </Button>
            <Button
              secondary
              onClick={() => this.updateTalentType('Frontend')}>
              Frontend Developer
            </Button>
            <Button
              secondary
              onClick={() => this.updateTalentType('Devops')}>
              Devops Engineer
            </Button>
            <Button
              secondary
              onClick={() => this.updateTalentType('Security')}>
              Security Engineer
            </Button>
          </Grid.Row>
          <TalentTable type={type}/>
        </Grid>
      </Form>
    );
  }
}

export default TalentForm;
