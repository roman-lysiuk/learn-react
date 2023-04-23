import { IUserCard } from '../../components/UserCard/UserCard';
import React, { useState } from 'react';
import data from '../../Data/listCountry.json' assert { type: 'json' };
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import SelectInput from '../../components/SelectInput/SelectInput';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { validateBirthday, validationCheckbox, validationFirstName } from '../../helpers/validate';
import { useAppDispatch } from '../../hooks/redux';
import { formCardSlice } from '../../store/reducers/FormCardSlice';

export type FormInput = {
  firstName: string;
  birthday: string;
  country: string;
  gender: string;
  avatar: FileList;
  agreeData: boolean;
  agreePolicy: boolean;
};

function Form() {
  const dispatch = useAppDispatch();
  const [isSuccessForm, setIsSuccessForm] = useState(false);
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
      country: data.country[1],
      gender: 'male',
      agreeData: false,
      agreePolicy: true,
    },
  });

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
    dispatch(formCardSlice.actions.addUserCard(userCard));
    reset();
    setIsSuccessForm(true);

    setTimeout(() => {
      setIsSuccessForm(false);
    }, 2000);
  }

  return (
    <div>
      {isSuccessForm && <h2 className="text-data-save">Your data has been saved!</h2>}

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
          listOption={data.country}
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
