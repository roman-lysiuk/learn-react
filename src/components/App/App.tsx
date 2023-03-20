// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from '../../pages/HomePage';
import AboutUsPage from '../../pages/AboutUsPage';
import Page404 from '../../pages/Page404';
import Header from '../Header/Header';
import { WithRouterProps } from '../../helpers/withRouter';
type AppProps = WithRouterProps;

class App extends React.Component<AppProps> {
  render(): React.ReactNode {
    console.log(this.props.location?.pathname);
    return (
      <>
        <Header path={this.props.location?.pathname as string} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </>
    );
  }
}

export default App;
