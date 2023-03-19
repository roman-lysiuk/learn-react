import pageTitleFromPath from '../helpers/pageTitleFromPath';
import { WithRouterProps } from 'helpers/withRouter';
import React from 'react';

import Menu from './Menu';
import Search from './Search';

interface PropsHeader {
  path: string;
}
type StateHeader = {};

class Header extends React.Component<PropsHeader, StateHeader> {
  pageTitleFromPath(): string {
    const currentPath = this.props.path;
    if (currentPath === '/') {
      return 'Home';
    }
    if (currentPath !== '/about') {
      return 'Page not found';
    }
    return currentPath.replace('/', '');
  }
  render() {
    console.log(this.props);
    return (
      <header className="header">
        <h1 className="page-title">{this.pageTitleFromPath()}</h1>
        <Menu />
        <Search />
      </header>
    );
  }
}
export default Header;
