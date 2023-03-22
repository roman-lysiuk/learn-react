import { IUserCard } from '../../components/UserCard/UserCard';
import React from 'react';
import { country } from '../../Data/listCountry.json';
import CreateInputBlock from '../../helpers/CreateInputBlock';

type FormProps = {
  changeUserCardArr: (userCard: IUserCard) => void;
};
type FormState = {
  textErrorName: string | null;
  textErrorBirthday: string | null;
  textErrorAgreeCheckboxData: string | null;
  textErrorAgreeCheckboxPolicy: string | null;
  textDataSave: string;
};

class Form extends React.Component<FormProps, FormState> {
  state = {
    textErrorName: '',
    textErrorBirthday: '',
    textErrorAgreeCheckboxData: '',
    textErrorAgreeCheckboxPolicy: '',
    textDataSave: '',
  };

  linkInput: {
    nameInput: React.RefObject<HTMLInputElement>;
    birthdayInput: React.RefObject<HTMLInputElement>;
    countryInput: React.RefObject<HTMLSelectElement>;
    sexInput: React.RefObject<HTMLInputElement>;
    fileInput: React.RefObject<HTMLInputElement>;
    agreeCheckboxData: React.RefObject<HTMLInputElement>;
    agreeCheckboxDataPolicy: React.RefObject<HTMLInputElement>;
  };

  constructor(props: FormProps) {
    super(props);
    this.linkInput = {
      nameInput: React.createRef(),
      birthdayInput: React.createRef(),
      countryInput: React.createRef(),
      sexInput: React.createRef(),
      fileInput: React.createRef(),
      agreeCheckboxData: React.createRef(),
      agreeCheckboxDataPolicy: React.createRef(),
    };
  }

  render() {
    return (
      <div>
        <h2 className="text-data-save">{this.state.textDataSave}</h2>
        <form className="form">
          <CreateInputBlock
            id="form-name"
            labelTitle="Name"
            typeInput="text"
            ref={this.linkInput.nameInput}
            required={true}
            textErrorInput={this.state.textErrorName}
            name="name"
          />
          <CreateInputBlock
            id="form-birthday"
            labelTitle="Birthday"
            typeInput="date"
            ref={this.linkInput.birthdayInput}
            required={true}
            textErrorInput={this.state.textErrorBirthday}
            name="birthday"
          />
          <CreateInputBlock
            id="form-form-country"
            labelTitle="Country"
            typeInput="select"
            ref={this.linkInput.countryInput}
            name="country"
            optionForSelect={country}
          />
          <div className="choice-gender">
            <CreateInputBlock
              id="form-sex-male"
              labelTitle="Male"
              typeInput="radio"
              ref={this.linkInput.sexInput}
              name="sex"
              value="male"
            />
            <CreateInputBlock
              id="form-sex-female"
              labelTitle="Female"
              typeInput="radio"
              defaultChecked={true}
              name="sex"
              value="female"
            />
          </div>
          <CreateInputBlock
            id="form-file"
            labelTitle="File upload - profile picture"
            typeInput="file"
            accept="image/*"
            ref={this.linkInput.fileInput}
            name="avatar-img"
          />
          <CreateInputBlock
            id="form-agree-data"
            labelTitle=" I consent to my personal data"
            typeInput="checkbox"
            ref={this.linkInput.agreeCheckboxData}
            required={true}
            textErrorInput={this.state.textErrorAgreeCheckboxData}
            name="agree-data"
          />
          <CreateInputBlock
            id="form-agree-policy"
            labelTitle="I have read the privacy policy"
            typeInput="checkbox"
            ref={this.linkInput.agreeCheckboxDataPolicy}
            required={true}
            defaultChecked={false}
            textErrorInput={this.state.textErrorAgreeCheckboxPolicy}
            name="agree-policy"
          />
          <button type="button" onClick={this.handlerSubmitButton}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  handlerSubmitButton = (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.validateEmptyInput();
    this.validateName();
    this.validateBirthday();

    if (this.isValidate()) {
      const fileList = this.linkInput.fileInput.current?.files;
      const userCard = {
        id: Date.now().toString(),
        name: this.linkInput.nameInput.current?.value as string,
        avatar: fileList ? fileList[0] : null,
        birthday: this.linkInput.birthdayInput.current?.value as string,
        country: this.linkInput.countryInput.current?.value as string,
        sex: this.linkInput.sexInput.current?.checked ? 'male' : 'female',
      };
      this.props.changeUserCardArr(userCard);
      this.setState({ textDataSave: 'Your data has been saved' });
      this.cleanForm();
      setTimeout(() => {
        this.setState({ textDataSave: '' });
      }, 3000);
    }
  };

  validateEmptyInput = () => {
    const { nameInput, birthdayInput, agreeCheckboxData, agreeCheckboxDataPolicy } = this.linkInput;

    if (nameInput.current?.validity.valueMissing) {
      this.setState({ textErrorName: 'Write your name' });
    } else {
      this.setState({ textErrorName: null });
    }

    if (birthdayInput.current?.validity.valueMissing) {
      this.setState({ textErrorBirthday: 'Enter your date of birth' });
    } else {
      this.setState({ textErrorBirthday: null });
    }

    if (agreeCheckboxData.current?.validity.valueMissing) {
      this.setState({ textErrorAgreeCheckboxData: 'This field is required' });
    } else {
      this.setState({ textErrorAgreeCheckboxData: null });
    }

    if (agreeCheckboxDataPolicy.current?.validity.valueMissing) {
      this.setState({ textErrorAgreeCheckboxPolicy: 'This field is required' });
    } else {
      this.setState({ textErrorAgreeCheckboxPolicy: null });
    }
  };
  validateName() {
    const { nameInput } = this.linkInput;
    const firstLetterName = nameInput.current?.value[0];
    if (
      typeof firstLetterName === 'undefined' ||
      firstLetterName !== firstLetterName?.toLocaleUpperCase()
    ) {
      this.setState({ textErrorName: 'Please enter a capitalized name' });
      return;
    }
    this.setState({ textErrorName: null });
  }
  validateBirthday() {
    const { birthdayInput } = this.linkInput;
    const valueDate = new Date(birthdayInput.current?.value as string);
    const currentDate = new Date();
    const isCorrectDate = !isNaN(Date.parse(valueDate.toUTCString()));
    if (!isCorrectDate) {
      this.setState({ textErrorBirthday: 'Date is not correct' });
      return;
    }
    if (typeof valueDate !== 'undefined' && currentDate <= valueDate) {
      this.setState({ textErrorBirthday: 'The selected date is greater than the current one' });
      return;
    }
    this.setState({ textErrorBirthday: null });
  }
  cleanForm() {
    this.setState({
      textErrorName: '',
      textErrorBirthday: '',
      textErrorAgreeCheckboxData: '',
      textErrorAgreeCheckboxPolicy: '',
    });
    if (this.linkInput.nameInput.current) {
      this.linkInput.nameInput.current.value = '';
    }
    if (this.linkInput.birthdayInput.current) {
      this.linkInput.birthdayInput.current.value = '';
    }
    if (this.linkInput.agreeCheckboxData.current) {
      this.linkInput.agreeCheckboxData.current.checked = false;
    }
    if (this.linkInput.agreeCheckboxDataPolicy.current) {
      this.linkInput.agreeCheckboxDataPolicy.current.checked = false;
    }
    if (this.linkInput.fileInput.current) {
      this.linkInput.fileInput.current.value = '';
    }
  }
  isValidate(): boolean {
    const {
      textErrorAgreeCheckboxData,
      textErrorAgreeCheckboxPolicy,
      textErrorBirthday,
      textErrorName,
    } = this.state;
    if (
      textErrorAgreeCheckboxData === null &&
      textErrorAgreeCheckboxPolicy === null &&
      textErrorBirthday === null &&
      textErrorName === null
    ) {
      return true;
    }
    return false;
  }
}
export default Form;
