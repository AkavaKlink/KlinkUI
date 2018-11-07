import * as React from "react";
import { Table, Icon, Button } from 'semantic-ui-react';

class ReferralTable extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan={4}>
                <h2>Referrals Rewards: $8,832</h2>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name='calendar' /> August 13th, 2018
              </Table.Cell>
              <Table.Cell>
                You Referred <strong>Name</strong> to <strong>Company</strong>
              </Table.Cell>
              <Table.Cell>
                $5,0000
              </Table.Cell>
              <Table.Cell collapsing textAlign='right'>
                <Button primary>Track</Button>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
              <Icon name='calendar' /> August 13th, 2018
              </Table.Cell>
              <Table.Cell>
                You Referred <strong>Name</strong> to <strong>Company</strong>
              </Table.Cell>
              <Table.Cell>
                $5,0000
              </Table.Cell>
              <Table.Cell textAlign='right'>
                <Button primary>Track</Button>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
              <Icon name='calendar' /> August 13th, 2018
              </Table.Cell>
              <Table.Cell>
                You Referred <strong>Name</strong> to <strong>Company</strong>
              </Table.Cell>
              <Table.Cell>
                $5,0000
              </Table.Cell>
              <Table.Cell textAlign='right'>
                <Button primary>Track</Button>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
              <Icon name='calendar' /> August 13th, 2018
              </Table.Cell>
              <Table.Cell>
                You Referred <strong>Name</strong> to <strong>Company</strong>
              </Table.Cell>
              <Table.Cell>
                $5,0000
              </Table.Cell>
              <Table.Cell textAlign='right'>
                <Button primary>Track</Button>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
              <Icon name='calendar' /> August 13th, 2018
              </Table.Cell>
              <Table.Cell>
                You Referred <strong>Name</strong> to <strong>Company</strong>
              </Table.Cell>
              <Table.Cell>
                $5,0000
              </Table.Cell>
              <Table.Cell textAlign='right'>
                <Button primary>Track</Button>
              </Table.Cell>
            </Table.Row>
            
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default ReferralTable;
