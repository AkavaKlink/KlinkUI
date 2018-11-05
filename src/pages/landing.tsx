import * as React from "react";
import Header from "./components/header";

class Landing extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Landing;
