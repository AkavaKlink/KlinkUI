import * as React from "react";
import { Table, Button, Grid  } from "semantic-ui-react";

interface TalentTableProps {
  type: string;
  data: any;
}

class TalentTable extends React.Component<TalentTableProps, {}> {

  public constructor(props: TalentTableProps) {
    super(props);
  }


  // will take some JSON, and format it out
  public renderTable(): JSX.Element {
    return (
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
          <Table.Row>
            <Table.Cell>Company, Inc.</Table.Cell>
            <Table.Cell>$86,000</Table.Cell>
            <Table.Cell>Smalltown, NE</Table.Cell>
            <Table.Cell>$1,000</Table.Cell>
            <Table.Cell>
              <Button>Learn More</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }

  public render(): JSX.Element {
    const { type } = this.props;
    return (
      <div style={{width: "100%"}}>
        <Grid.Row>
          <h2>Now Viewing Positions for: {type}</h2>
        </Grid.Row>
        <Grid.Row width={16}>
          {this.renderTable()}
        </Grid.Row>
      </div>
    );
  }
}

export default TalentTable;
