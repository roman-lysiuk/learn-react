import Header from '../components/Header/Header';
import React from 'react';
import Main from '../components/Main/Main';

function HomePage() {
  return (
    <>
      <Header isSearch={true} />
      <Main />
    </>
  );
}

export default HomePage;
