import { Route, Routes } from 'react-router-dom';
import React from 'react';
import HomePage from '../../pages/HomePage';
import AboutUsPage from '../../pages/AboutUsPage';
import Page404 from '../../pages/Page404';
import FormPage from '../../pages/FormPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
