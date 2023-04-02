import Header from '../components/Header/Header';
import React from 'react';
import { Link } from 'react-router-dom';

function AboutUsPage() {
  return (
    <>
      <Header isSearch={false} />
      <h1 className="page-title">About Us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dolores nihil commodi
        corporis cupiditate officiis? Ducimus quos minus fugiat, tempora officia, repellat itaque,
        obcaecati neque sapiente numquam corporis velit sint.
      </p>
      <Link to="/">Go to home?</Link>
    </>
  );
}

export default AboutUsPage;
