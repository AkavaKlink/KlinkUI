import * as React from "react";
import { Menu } from 'semantic-ui-react';

class Header extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Menu>
        <Menu.Item>
            Klink
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
