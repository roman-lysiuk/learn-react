import Header from '../components/Header/Header';
import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <>
      <Header isSearch={false} />
      <h1 className="page--error-title">404 Error</h1>
      <Link to="/">Go to home?</Link>
    </>
  );
}

export default Page404;
