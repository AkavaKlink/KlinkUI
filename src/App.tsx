import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagelayout from "./layouts/Pagelayout";

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route render={() => <Pagelayout />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
