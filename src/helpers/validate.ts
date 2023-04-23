export const { emptyErrorMessage, minLengthErrorMessage, maxLengthErrorMessage } = {
  emptyErrorMessage: 'This field is required',
  minLengthErrorMessage: `Minimum length characters `,
  maxLengthErrorMessage: `Maximum length characters `,
};

export const validationFirstName = {
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
export const validateBirthday = {
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
export const validationCheckbox = { required: { value: true, message: emptyErrorMessage } };
