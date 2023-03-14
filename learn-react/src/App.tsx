import { useState } from 'react';
import reactLogo from './assets/react.svg';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [currentPage, setCurrentPage] = useState('Home Page');

  return (
    <div className="App container">
      <Header />
      <div className="headers-current-page">{currentPage}</div>
      <Main />
    </div>
  );
}

export default App;
