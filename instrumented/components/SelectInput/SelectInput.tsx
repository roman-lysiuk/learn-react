import React from 'react';
import { FieldErrors, FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps<Type extends FieldValues> {
  labelName: string;
  name: FieldPath<Type>;
  register: UseFormRegister<Type>;
  errors: FieldErrors<Type>;
  listOption: string[];
}

export default function SelectInput<Type extends FieldValues>(props: InputProps<Type>) {
  const { labelName, name, errors, register, listOption } = props;
  return (
    <label>
      {labelName}
      <select {...register(name)}>
        {listOption.map((nameOption, i) => {
          return (
            <option key={i} value={nameOption}>
              {nameOption}
            </option>
          );
        })}
      </select>
      {errors[name] && <div className="text-error">{errors[name]?.message?.toString()}</div>}
    </label>
  );
}
