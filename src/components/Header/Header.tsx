import React from 'react';

import Menu from '../Menu/Menu';
import Search from '../Search/Search';

interface PropsHeader {
  path: string;
}

class Header extends React.Component<PropsHeader> {
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
    const currentPage = this.pageTitleFromPath();
    if (currentPage === 'Page not found') {
      //To check componentWillUnmount in Search
      return (
        <header className="header">
          <h1 className="page-title">{this.pageTitleFromPath()}</h1>
          <Menu />
        </header>
      );
    }
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
