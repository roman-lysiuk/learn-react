import React, { useState } from 'react';

interface ModalContext {
  openModal: () => void;
  closeModal: () => void;
  isOpenModal: boolean;
}

export const ContextModal = React.createContext<ModalContext>({
  isOpenModal: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalState = function ({ children }: { children: React.ReactNode }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <ContextModal.Provider value={{ openModal, closeModal, isOpenModal }}>
      {children}
    </ContextModal.Provider>
  );
};
