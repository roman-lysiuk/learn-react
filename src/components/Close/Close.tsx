import React from 'react';
import closeIcon from '../../assets/close-icon.svg';

interface Close {
  onClick: () => void;
}
export default function Close({ onClick }: Close) {
  return (
    <div className="close-icon">
      <img onClick={onClick} src={closeIcon} alt="close icon" />
    </div>
  );
}
