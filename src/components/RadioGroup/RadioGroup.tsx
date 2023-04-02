import Input from '../../components/Input/Input';
import React from 'react';
import { FieldErrors, FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';
type Radio = {
  labelName: string;
  value: string;
};

interface PropsRadioGroup<Type extends FieldValues> {
  register: UseFormRegister<Type>;
  name: FieldPath<Type>;
  errors: FieldErrors<Type>;
  listRadio: Radio[];
}

export default function RadioGroup<Type extends FieldValues>(props: PropsRadioGroup<Type>) {
  const { name, register, errors, listRadio } = props;
  return (
    <div className={name + '-radio-group'}>
      {listRadio.map((radio, i) => {
        return (
          <Input
            key={i}
            type="radio"
            labelName={radio.labelName}
            register={register}
            name={name}
            errors={errors}
            value={radio.value}
          />
        );
      })}
    </div>
  );
}
