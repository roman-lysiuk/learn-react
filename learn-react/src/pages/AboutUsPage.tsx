import React from 'react';
import { Link } from 'react-router-dom';

class AboutUsPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App container">
        <h1 className="page-title">About Us</h1>
        <Link to="/">Go to home?</Link>
      </div>
    );
  }
}

export default AboutUsPage;
