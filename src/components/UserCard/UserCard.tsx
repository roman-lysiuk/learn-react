import React from 'react';
export interface IUserCard {
  id: string;
  name: string;
  avatar?: File | null;
  birthday: string;
  country: string;
  sex: string;
}

class UserCard extends React.Component<IUserCard> {
  constructor(props: IUserCard) {
    super(props);
  }
  imgAvatar = this.props.avatar
    ? URL.createObjectURL(this.props.avatar)
    : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';

  render() {
    return (
      <div className="card" data-testid="card">
        <div className="card__image">
          <img src={this.imgAvatar} alt={this.props.avatar?.name} />
        </div>
        <div className="card__title">Name: {this.props.name}</div>
        <div className="card__sex">Gender: {this.props.sex}</div>
        <div className="card__birthday">Birthday: {this.props.birthday}</div>
        <div className="card__country">Country: {this.props.country}</div>
      </div>
    );
  }
}
export default UserCard;
