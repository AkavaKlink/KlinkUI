import * as React from "react";
import { Grid, Button } from "semantic-ui-react";
import TalentTable from "./talentTable";

interface TalentFormState {
  type: string;
}

interface TalentFormProps {
  data: any;
  talentTypes: any;
}

interface TalentType {
  type: string;
  name: string;
}

class TalentForm extends React.Component<TalentFormProps, TalentFormState> {

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

  public renderTalentSelect(talentType: any) {
    let talentSelectArray: any = [];
    talentType.forEach((element: TalentType, index: number) => {
      talentSelectArray.push(
        <Button
          key={index}
          secondary
          onClick={() => this.updateTalentType(element.type)}>
          {element.name}
        </Button>
      );
    });
    return talentSelectArray;
  }


  public render(): JSX.Element {
    let { type } = this.state;
    let { data, talentTypes } = this.props;
    return (
      <Grid>
        <Grid.Row>
          <h1>Talent Form</h1>
        </Grid.Row>
        <Grid.Row>
          {this.renderTalentSelect(talentTypes)}
        </Grid.Row>
        <Grid.Row>
          <TalentTable data={data} type={type}/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default TalentForm;
