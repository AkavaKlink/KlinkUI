import * as React from "react";
import { Button } from "semantic-ui-react";

class Success extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Success! We'll contact you soon</h1>
        <Button>Submit Another</Button>
      </div>
    );
  }
}

export default Success;
