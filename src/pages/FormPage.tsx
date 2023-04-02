import Form from '../components/Form/Form';
import React, { useState } from 'react';
import UserCard, { IUserCard } from '../components/UserCard/UserCard';
import Header from '../components/Header/Header';

function FormPage() {
  const [userCards, setUserCards] = useState<Array<IUserCard>>([]);

  function changeUserCardArr(userCard: IUserCard): void {
    setUserCards([...userCards, userCard]);
  }

  return (
    <div>
      <Header isSearch={false} />
      <Form changeUserCardArr={changeUserCardArr} />
      <div className="card-list">
        {userCards.map((userCard: IUserCard) => {
          return <UserCard {...userCard} key={userCard.id} />;
        })}
      </div>
    </div>
  );
}

export default FormPage;
