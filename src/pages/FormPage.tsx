import Form from '../components/Form/Form';
import React from 'react';
import UserCard, { IUserCard } from '../components/UserCard/UserCard';

class FormPage extends React.Component {
  state = {
    userCardsArr: [],
  };
  changeUserCardArr = (userCard: IUserCard) => {
    this.setState({
      userCardsArr: [...this.state.userCardsArr, userCard],
    });
  };
  render(): React.ReactNode {
    return (
      <div>
        <Form changeUserCardArr={this.changeUserCardArr} />

        <div className="card-list">
          {this.state.userCardsArr.map((userCard: IUserCard) => {
            return <UserCard {...userCard} key={userCard.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default FormPage;
