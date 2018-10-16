import * as React from "react";
import { Container, Menu, Dropdown } from "semantic-ui-react";

class Header extends React.Component<{}, {}> {

  public render():JSX.Element {
    return (
      <Menu fixed="top">
        <Container>
          <Menu.Item as="a" href="/" header>
            Klink.io
          </Menu.Item>
          <Menu.Menu position='right'>
            <Dropdown item text='Menu'>
              <Dropdown.Menu>
                <Dropdown.Item href='/dashboard'>Dashboard</Dropdown.Item>
                <Dropdown.Item>Referrals</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item name='logout' href='/'>
              Log Out
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Header;
