import React from 'react';
import './error.scss';

interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <div className="error">
      Error: <strong>{message}</strong>
    </div>
  );
}
