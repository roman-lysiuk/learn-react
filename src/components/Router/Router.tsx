import AboutUsPage from '../../pages/AboutUsPage';
import FormPage from '../../pages/FormPage';
import HomePage from '../../pages/HomePage';
import Page404 from '../../pages/Page404';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
