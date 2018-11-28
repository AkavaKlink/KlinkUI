import * as React from "react";
import { Table, Button, Grid  } from "semantic-ui-react";

interface TalentTableProps {
  type: string;
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
          <Table.HeaderCell>Company</Table.HeaderCell>
          <Table.HeaderCell>Income</Table.HeaderCell>
          <Table.HeaderCell>Project Location</Table.HeaderCell>
          <Table.HeaderCell>Referral Bonus</Table.HeaderCell>
          <Table.HeaderCell>Details</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Cell>Company, Inc.</Table.Cell>
          <Table.Cell>$86,000</Table.Cell>
          <Table.Cell>Smalltown, NE</Table.Cell>
          <Table.Cell>$1,000</Table.Cell>
          <Table.Cell>
            <Button>Learn More</Button>
          </Table.Cell>
        </Table.Body>
      </Table>
    );
  }

  public render(): JSX.Element {
    const { type } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Row>
            <h2>Now Viewing Positions for: {type}</h2>
            {this.renderTable()}
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Button>Back to Talent</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

export default TalentTable;
