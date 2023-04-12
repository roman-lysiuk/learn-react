import Header from '../components/Header/Header';
import React from 'react';
import Main from '../components/Main/Main';
import { ModalState } from '../components/Modal/ContextModal';

function HomePage() {
  return (
    <ModalState>
      <Header isSearch={true} />
      <Main />
    </ModalState>
  );
}

export default HomePage;
