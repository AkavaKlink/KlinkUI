import * as React from "react";
import { Grid, Button, Icon, Form, Checkbox, Divider } from 'semantic-ui-react';

class Login extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Grid.Row>
        <Grid.Column width={8}>
          <h2>Log In with social media</h2>
          <Button color="facebook">
            <Icon name="facebook"/> Facebook
          </Button>
          <Button color="twitter">
            <Icon name="twitter"/> Twitter
          </Button>
          <Button color="google plus">
            <Icon name="google plus"/> Google
          </Button>
          <Button color="linkedin">
            <Icon name="linkedin"/> LinkedIn
          </Button>
        </Grid.Column>
        <Grid.Column width={8}>
          <h2>Login with your Email</h2>
          <Form>
            <Form.Field>
              <label>Email Address</label>
              <input placeholder='Email Address' type="email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' type="password" />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit' primary>Login</Button>
            <Divider/>
            <p>Not a Member yet?</p>
            <Button primary>Create an Account</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Login;
