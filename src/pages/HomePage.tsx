import Header from '../components/Header/Header';
import React, { Suspense } from 'react';
import Main from '../components/Main/Main';
import Loader from '../components/Loader/Loader';

function HomePage() {
  return (
    <>
      <Header isSearch={true} />
      <Suspense fallback={<Loader />}>
        <Main />
      </Suspense>
    </>
  );
}

export default HomePage;
