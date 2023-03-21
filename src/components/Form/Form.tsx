import UserCard, { IUserCard } from '../../components/UserCard/UserCard';
import React from 'react';
import { country } from '../../Data/listCountry.json';
import CreateInputBlock from '../../helpers/CreateInputBlock';

type FormProps = {};
type FormState = {
  textErrorName: string | null;
  textErrorBirthday: string | null;
  textErrorAgreeCheckboxData: string | null;
  textErrorAgreeCheckboxPolicy: string | null;

  userCardsArr: JSX.Element[];
};

class Form extends React.Component<FormProps, FormState> {
  state = {
    textErrorName: '',
    textErrorBirthday: '',
    textErrorAgreeCheckboxData: '',
    textErrorAgreeCheckboxPolicy: '',
    radioValue: 'female',
    userCardsArr: [],
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
        <form className="form" onSubmit={this.handlerSubmitButton}>
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
          <label>
            Country:
            <select required name="country" id="form-country" ref={this.linkInput.countryInput}>
              {country.map((country, index) => {
                return <option key={index}>{country}</option>;
              })}
            </select>
          </label>
          <div>
            <label>
              Male
              <input type="radio" name="sex" value="male" ref={this.linkInput.sexInput} />
            </label>
            <label>
              Female
              <input defaultChecked={true} type="radio" name="sex" value="female" />
            </label>
          </div>
          <label>
            File upload - profile picture
            <input type="file" accept="image/*" ref={this.linkInput.fileInput} />
          </label>
          <label>
            I consent to my personal data
            <input
              required
              type="checkbox"
              name="agree-data"
              ref={this.linkInput.agreeCheckboxData}
            />
            <div className="text-error">{this.state.textErrorAgreeCheckboxData}</div>
          </label>
          <label>
            I have read the privacy policy
            <input
              required
              type="checkbox"
              name="agree-policy"
              ref={this.linkInput.agreeCheckboxDataPolicy}
            />
            <div className="text-error">{this.state.textErrorAgreeCheckboxPolicy}</div>
          </label>
          <button type="button" onClick={this.handlerSubmitButton}>
            Submit
          </button>
        </form>
        <div className="card-list">
          {this.state.userCardsArr.map((userCard) => {
            return userCard;
          })}
        </div>
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
      this.setState({
        userCardsArr: [...this.state.userCardsArr, <UserCard {...userCard} key={userCard.id} />],
      });
      this.cleanForm();
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
    this.linkInput.nameInput.current!.value = '';
    this.linkInput.birthdayInput.current!.value = '';
    this.linkInput.agreeCheckboxData.current!.checked = false;
    this.linkInput.agreeCheckboxDataPolicy.current!.checked = false;
    this.linkInput.fileInput.current!.value = '';
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
