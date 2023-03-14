import React from 'react';
import Menu from './Menu';
import Search from './Search';
class Header extends React.Component<{}, {}> {
  render() {
    return (
      <header className="header">
        <Menu />
        <Search />
      </header>
    );
  }
}
export default Header;
