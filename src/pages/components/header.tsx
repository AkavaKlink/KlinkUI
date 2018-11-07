import * as React from "react";
import { Menu, Dropdown } from 'semantic-ui-react';

class Header extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Menu secondary>
        <Menu.Item header>
            Klink
        </Menu.Item>
        <Menu.Item position="right">
          <Dropdown item text="Menu">
            <Dropdown.Menu>
              <Dropdown.Item>
                <a href="/dashboard">Dashboard</a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="/community">Community</a>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            Log Out
          </Menu.Item>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
