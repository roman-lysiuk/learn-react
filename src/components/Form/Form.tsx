import { IUserCard } from '../../components/UserCard/UserCard';
import React, { useState } from 'react';
import { country } from '../../Data/listCountry.json';
import { useForm } from 'react-hook-form';

type FormProps = {
  changeUserCardArr: (userCard: IUserCard) => void;
};
type DataInput = {
  firstName: string;
  birthday: string;
  country: string;
  gender: string;
  avatar: string;
  agreeData: boolean;
  agreePolicy: boolean;
};

function Form(props: FormProps) {
  const [textDataSave, setTextDataSave] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    reValidateMode: 'onSubmit',
    mode: 'onSubmit',
    defaultValues: {
      firstName: '',
      birthday: '2000-01-01',
      country: country[1],
      gender: 'male',
      avatar: '',
      agreeData: false,
      agreePolicy: true,
    },
  });

  const { emptyErrorMessage, minLengthErrorMessage, maxLengthErrorMessage } = {
    emptyErrorMessage: 'This field is required',
    minLengthErrorMessage: `Minimum length characters `,
    maxLengthErrorMessage: `Maximum length characters `,
  };

  function onSubmit(data: DataInput) {
    const fileList = data.avatar || null;
    const userCard: IUserCard = {
      id: Date.now().toString(),
      name: data.firstName,
      avatar: fileList ? URL.createObjectURL(fileList[0] as unknown as File) : null,
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

  return (
    <div>
      <h2 className="text-data-save">{textDataSave}</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          FirstName:
          <input
            placeholder="Enter FirstName"
            type="text"
            {...register('firstName', {
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
            })}
          />
          {errors.firstName && (
            <div className="text-error">{errors.firstName.message?.toString()}</div>
          )}
        </label>
        <label>
          Birthday :
          <input
            type="date"
            {...register('birthday', {
              required: {
                value: true,
                message: emptyErrorMessage,
              },
              validate: {
                tooSmall: (value) => {
                  const dateYear = new Date(value).getFullYear();
                  const currentDate = new Date().getFullYear();
                  const yearAge = 5;
                  const isValid = dateYear <= currentDate - yearAge;

                  return isValid || 'At least 5 years ago';
                },
              },
              valueAsDate: true,
            })}
          />
          {errors.birthday && (
            <div className="text-error">{errors.birthday?.message?.toString()}</div>
          )}
        </label>

        <label>
          Country:
          <select {...register('country')}>
            {country.map((name, i) => {
              return (
                <option key={i} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
          {errors.country && (
            <div className="text-error">{errors.country?.message?.toString()}</div>
          )}
        </label>

        <div className="choice-gender">
          <label>
            Male
            <input type="radio" value={'male'} {...register('gender')} />
          </label>
          <label>
            Female
            <input type="radio" value={'female'} {...register('gender')} />
          </label>
          {errors.gender && <div className="text-error">{errors.gender?.message?.toString()}</div>}
        </div>

        <label>
          Avatar :
          <input accept="image/*" type="file" {...register('avatar')} />
          {errors.avatar && <div className="text-error">{errors.avatar?.message?.toString()}</div>}
        </label>

        <label>
          I consent to my personal data
          <input
            type="checkbox"
            {...register('agreeData', { required: { value: true, message: emptyErrorMessage } })}
          />
          {errors.agreeData && (
            <div className="text-error">{errors.agreeData?.message?.toString()}</div>
          )}
        </label>
        <label>
          I read the privacy policy
          <input
            type="checkbox"
            {...register('agreePolicy', { required: { value: true, message: emptyErrorMessage } })}
          />
          {errors.agreePolicy && (
            <div className="text-error">{errors.agreePolicy?.message?.toString()}</div>
          )}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
