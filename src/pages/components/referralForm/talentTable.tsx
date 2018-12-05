import * as React from "react";
import { Table, Button, Grid  } from "semantic-ui-react";

interface TalentTableProps {
  type: string;
  name: string;
  data: any;
}

interface TalentData {
  company: string;
  income: number;
  location: string;
  referral: number;
  type: string;
}

class TalentTable extends React.Component<TalentTableProps, {}> {

  public constructor(props: TalentTableProps) {
    super(props);
    console.log(props);
  }


  // will take some JSON, and format it out
  public renderTable(type: string, data: any): JSX.Element {
    let table: any = [];
    data.forEach((element: TalentData, index: number) => {
      if(type === "") {
        table.push(
          <Table.Row key={index}>
            <Table.Cell>{element.company}</Table.Cell>
            <Table.Cell>${element.income}</Table.Cell>
            <Table.Cell>{element.location}</Table.Cell>
            <Table.Cell>${element.referral}</Table.Cell>
            <Table.Cell>
              <Button>Learn More</Button>
            </Table.Cell>
          </Table.Row>
        );
      } else if (type === element.type) {
        table.push(
          <Table.Row key={index}>
            <Table.Cell>{element.company}</Table.Cell>
            <Table.Cell>${element.income}</Table.Cell>
            <Table.Cell>{element.location}</Table.Cell>
            <Table.Cell>${element.referral}</Table.Cell>
            <Table.Cell>
              <Button>Learn More</Button>
            </Table.Cell>
          </Table.Row>
        );
      }
    });
    return table;
  }

  public render(): JSX.Element {
    const { type, name, data } = this.props;
    return (
      <div style={{width: "100%"}}>
        <Grid.Row>
          <h2>Now Viewing Positions for: {name}</h2>
        </Grid.Row>
        <Grid.Row width={16}>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Company</Table.HeaderCell>
              <Table.HeaderCell>Income</Table.HeaderCell>
              <Table.HeaderCell>Project Location</Table.HeaderCell>
              <Table.HeaderCell>Referral Bonus</Table.HeaderCell>
              <Table.HeaderCell>Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderTable(type, data)}
          </Table.Body>
        </Table>
        </Grid.Row>
      </div>
    );
  }
}

export default TalentTable;
