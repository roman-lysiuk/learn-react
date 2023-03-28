import React from 'react';
export interface IUserCard {
  id: string;
  name: string;
  avatar?: string | null;
  birthday: string;
  country: string;
  gender: string;
}

function UserCard(user: IUserCard) {
  const imgAvatar = user.avatar
    ? user.avatar
    : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';

  return (
    <div className="card" data-testid="card">
      <div className="card__image">{<img src={imgAvatar} />}</div>
      <div className="card__title">Name: {user.name}</div>
      <div className="card__sex">Gender: {user.gender}</div>
      <div className="card__birthday">Birthday: {user.birthday}</div>
      <div className="card__country">Country: {user.country}</div>
    </div>
  );
}
export default UserCard;
