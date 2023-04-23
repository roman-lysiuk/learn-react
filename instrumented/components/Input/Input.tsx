import React from 'react';
import {
  FieldErrors,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

interface InputProps<Type extends FieldValues> {
  labelName: string;
  name: FieldPath<Type>;
  register: UseFormRegister<Type>;
  validation?: RegisterOptions<Type>;
  type: 'text' | 'date' | 'file' | 'checkbox' | 'radio';
  errors: FieldErrors<Type>;
  placeholder?: string;
  accept?: string | undefined;
  value?: string;
}

export default function Input<Type extends FieldValues>(props: InputProps<Type>) {
  const { value, accept, labelName, name, validation, type, errors, register, placeholder } = props;
  return (
    <label>
      {labelName}
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        {...register(name, validation)}
        accept={accept}
        value={value}
      />
      {errors[name] && <div className="text-error">{errors[name]?.message?.toString()}</div>}
    </label>
  );
}
