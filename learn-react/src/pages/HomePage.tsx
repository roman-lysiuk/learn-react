import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

class HomePage extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App container">
        <Header />
        <h1 className="page-title">Home</h1>
        <Main />
      </div>
    );
  }
}

export default HomePage;
