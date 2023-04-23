import React from 'react';
import Close from '../../components/Close/Close';
import { useAppDispatch } from '../../hooks/redux';
import { modalSlice } from '../../store/reducers/ModalSlice';
type ModalProps = {
  children?: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => {
        dispatch(modalSlice.actions.closeModal());
      }}
      className="modal active"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__body"
      >
        <Close
          onClick={() => {
            dispatch(modalSlice.actions.closeModal());
          }}
        />
        {children}
      </div>
    </div>
  );
}
