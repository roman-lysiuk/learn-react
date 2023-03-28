import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
type CreateInputBlockProps = {
  name: string;
  labelName: string;
  required?: {
    value: boolean;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
};
export default function CreateInputBlock(props: CreateInputBlockProps) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <label>
        {props.labelName}
        <input
          type="text"
          {...register(`${props.name}`, {
            required: props.required ? { ...props.required } : { value: false, message: 'Error' },
            minLength: props.minLength ? { ...props.minLength } : { value: 0, message: 'Error' },
            maxLength: props.maxLength ? { ...props.maxLength } : { value: 100, message: 'Error' },
          })}
        />
      </label>
      <ErrorMessage errors={errors} name={props.name} render={({ message }) => <p>{message}</p>} />
    </>
  );
}
