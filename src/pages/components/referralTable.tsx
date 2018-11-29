import * as React from "react";
import { Table, Icon, Button } from 'semantic-ui-react';

interface ReferralTableProps {
  data: any;
}

interface ReferralDataObject {
  date: string;
  user: string;
  client: string;
  prospect: string;
  amount: number;
}

class ReferralTable extends React.Component<ReferralTableProps, {}> {
  public constructor(props: ReferralTableProps) {
    super(props);
    console.log(props);
  }

  public renderRows(data: any) {
    let table: any = [];
    data.forEach((element: ReferralDataObject, index: number) => {
      table.push(
        <Table.Row key={index}>
          <Table.Cell collapsing>
            <Icon name='calendar' /> {element.date}
          </Table.Cell>
          <Table.Cell>
            {element.user} Referred <strong>{element.prospect}</strong> to <strong>{element.client}</strong>
          </Table.Cell>
          <Table.Cell>
            ${element.amount}
          </Table.Cell>
          <Table.Cell collapsing textAlign='right'>
            <Button primary>Track {element.prospect}</Button>
          </Table.Cell>
        </Table.Row>
      );
    });
    return table;
  }

  public returnTotalAmount(data: any) {
    let total = 0;
    data.forEach((element: ReferralDataObject) => {
      total += element.amount;
    });
    return total;
  }

  public render(): JSX.Element {
    const { data } = this.props;
    return (
      <div>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={4}>
                <h2>Referrals Rewards: ${this.returnTotalAmount(data)}</h2>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderRows(data)}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default ReferralTable;
