import React from 'react';
import { Link } from 'react-router-dom';
class Menu extends React.Component {
  render() {
    return (
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
      </nav>
    );
  }
}
export default Menu;
