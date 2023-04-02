import { IUserCard } from '../../components/UserCard/UserCard';
import React, { useState } from 'react';

import { country } from '../../Data/listCountry.json';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import SelectInput from '../../components/SelectInput/SelectInput';
import RadioGroup from '../../components/RadioGroup/RadioGroup';

type FormProps = {
  changeUserCardArr: (userCard: IUserCard) => void;
};
export type FormInput = {
  firstName: string;
  birthday: string;
  country: string;
  gender: string;
  avatar: FileList;
  agreeData: boolean;
  agreePolicy: boolean;
};

function Form(props: FormProps) {
  const [textDataSave, setTextDataSave] = useState('');
  const genderList = [
    { value: 'male', labelName: 'Male' },
    { value: 'female', labelName: 'Female' },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    reValidateMode: 'onSubmit',
    mode: 'onSubmit',
    defaultValues: {
      firstName: '',
      birthday: '2018-07-22',
      country: country[1],
      gender: 'male',
      agreeData: false,
      agreePolicy: true,
    },
  });

  const { emptyErrorMessage, minLengthErrorMessage, maxLengthErrorMessage } = {
    emptyErrorMessage: 'This field is required',
    minLengthErrorMessage: `Minimum length characters `,
    maxLengthErrorMessage: `Maximum length characters `,
  };

  function onSubmit(data: FormInput) {
    const fileList: FileList | null | undefined = data.avatar;
    const userCard: IUserCard = {
      id: Date.now().toString(),
      name: data.firstName,
      avatar: fileList ? fileList[0] : null,
      birthday: new Date(data.birthday).toLocaleDateString(),
      country: data.country,
      gender: data.gender,
    };

    props.changeUserCardArr(userCard);

    reset();
    setTextDataSave('Your data has been saved');

    setTimeout(() => {
      setTextDataSave('');
    }, 2000);
  }
  const validationFirstName = {
    required: {
      value: true,
      message: emptyErrorMessage,
    },
    minLength: {
      value: 3,
      message: `${minLengthErrorMessage + 3}`,
    },
    maxLength: {
      value: 15,
      message: `${maxLengthErrorMessage + 15}`,
    },
    pattern: {
      value: /^[A-Z][a-z]{2,}/gm,
      message: 'Lower case name',
    },
  };
  const validateBirthday = {
    valueAsDate: true,
    required: {
      value: true,
      message: emptyErrorMessage,
    },
    validate: (value: string | boolean | FileList | Date): boolean | string => {
      const dateYear = new Date(value as string).getFullYear();
      const currentDate = new Date().getFullYear();
      const yearAge = 5;
      const isValid = dateYear <= currentDate - yearAge;
      return isValid || 'At least 5 years ago';
    },
  };

  const validationCheckbox = { required: { value: true, message: emptyErrorMessage } };
  return (
    <div>
      <h2 className="text-data-save">{textDataSave}</h2>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          labelName="FirstName: "
          register={register}
          name="firstName"
          errors={errors}
          placeholder="Enter FirstName"
          validation={validationFirstName}
        />

        <Input
          type="date"
          labelName="Birthday: "
          register={register}
          name="birthday"
          errors={errors}
          validation={validateBirthday}
        />

        <SelectInput
          name="country"
          labelName="Country:"
          register={register}
          errors={errors}
          listOption={country}
        />

        <RadioGroup register={register} errors={errors} name="gender" listRadio={genderList} />

        <Input
          type="file"
          labelName="Avatar: "
          register={register}
          name="avatar"
          errors={errors}
          accept="image/*"
        />

        <Input
          type="checkbox"
          labelName="I consent to my personal data"
          register={register}
          name="agreeData"
          errors={errors}
          validation={validationCheckbox}
        />

        <Input
          type="checkbox"
          labelName="I read the privacy policy"
          register={register}
          name="agreePolicy"
          errors={errors}
          validation={validationCheckbox}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
