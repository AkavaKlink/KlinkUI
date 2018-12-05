import * as React from "react";
import Header from './components/header';
import { Container, Grid, Button } from 'semantic-ui-react';
import CompanyForm from './components/referralForm/companyForm';
import TalentForm from './components/referralForm/talentForm';
import * as talentData from "../data/talentData.json";
import * as talentTypes from "../data/talentType.json";

interface referralState {
  company: boolean,
  talent: boolean,
};

class NewReferral extends React.Component<{}, referralState> {

  public constructor(props: any) {
    super(props);
    this.state = {
      company: false,
      talent: false,
    };
  }

  public onSelectCompany(): void {
    console.log("company selected");
    this.setState({
      company: true,
      talent: false,
    });
  };

  public onSelectTalent(): void {
    console.log("company selected");
    this.setState({
      company: false,
      talent: true,
    });
  };

  public resetState(): void {
    this.setState({
      company: false,
      talent: false,
    });
  }

  public renderQuestions(): JSX.Element {
    if ( this.state.company ) {
      return (
        <div>
          <CompanyForm/>
          <Button onClick={() => this.resetState()} primary>Back</Button>
        </div>
      );
    }

    if ( this.state.talent ) {
      return (
        <div>
          <TalentForm data={talentData} talentTypes={talentTypes}/>
          <Button onClick={() => this.resetState()} primary>Back</Button>
        </div>
      );
    }
    return (
      <Grid>
        <Grid.Row>
          <h1>Who are you Referring?</h1>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Button onClick={() => this.onSelectCompany()} primary>Company</Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <Button onClick={() => this.onSelectTalent()} secondary>Talent</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  public render(): JSX.Element {
    return (
      <div>
        <Header/>
        <Container>
          {this.renderQuestions()}
        </Container>
      </div>
    );
  }
}

export default NewReferral;
