import * as React from "react";
import { Grid } from "semantic-ui-react";

class Landing extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
          <div>
            <Grid>
             <Grid.Column width={8}>
               Text
             </Grid.Column>
             <Grid.Column width={8}>
               Text
             </Grid.Column>
           </Grid>
          </div>
        );
    }
}

export default Landing;
