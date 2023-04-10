import React, { useContext } from 'react';
import { ContextModal } from './ContextModal';
import Close from '../../components/Close/Close';
type ModalProps = {
  children?: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const { closeModal } = useContext(ContextModal);

  return (
    <div onClick={closeModal} className="modal active">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__body"
      >
        <Close onClick={closeModal} />
        {children}
      </div>
    </div>
  );
}
