import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/about">About us</Link>
      <Link to="/form">Form</Link>
    </nav>
  );
}
