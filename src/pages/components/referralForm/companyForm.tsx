import * as React from "react";
import { Grid, Form, Input, TextArea, Button } from "semantic-ui-react";

class CompanyForm extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Form>
        <Grid>
          <Grid.Row>
            <h1>Company Form</h1>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form.Field>
                <Input type="string" placeholder="Your Name"/>
              </Form.Field>
              <Form.Field>
                <Input type="tel" placeholder="Phone Number"/>
              </Form.Field>
              <Form.Field>
                <Input type="email" placeholder="Email Address"/>
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form.Field>
                <Input type="string" placeholder="Client Name"/>
              </Form.Field>
              <Form.Field>
                <Input type="string" placeholder="Contact Name/Title"/>
              </Form.Field>
              <Form.Field>
                <Input type="tel" placeholder="Contact Phone Number"/>
              </Form.Field>
              <Form.Field>
                <Input type="email" placeholder="Contact Email Number"/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Form.Field>
                <TextArea
                  type="string"
                  placeholder="Tell us about more your project..."
                />
              </Form.Field>
              <Button seconday>Submit</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
  }
}

export default CompanyForm;
