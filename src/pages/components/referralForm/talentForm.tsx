import * as React from "react";
import { Grid, Button } from "semantic-ui-react";
import TalentTable from "./talentTable";

interface TalentFormState {
  type: string;
  name: string;
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
      type: "",
      name: "All Positions",
    };
  }

  public updateTalentType(type: string, name: string) {
    this.setState({
      type,
      name
    });
  }

  public renderTalentSelect(talentType: any) {
    let talentSelectArray: any = [];
    talentType.forEach((element: TalentType, index: number) => {
      talentSelectArray.push(
        <Button
          key={index}
          secondary
          onClick={() => this.updateTalentType(element.type, element.name)}>
          {element.name}
        </Button>
      );
    });
    return talentSelectArray;
  }


  public render(): JSX.Element {
    let { type, name } = this.state;
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
          <TalentTable data={data} type={type} name={name}/>
        </Grid.Row>
      </Grid>
    );
  }
}

export default TalentForm;
