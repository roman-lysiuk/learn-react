import Form from '../components/Form/Form';
import React from 'react';
import UserCard, { IUserCard } from '../components/UserCard/UserCard';
import Header from '../components/Header/Header';
import { useAppSelector } from '../hooks/redux';

function FormPage() {
  const { cards } = useAppSelector((state) => state.formCardSlice);

  return (
    <div>
      <Header isSearch={false} />
      <Form />
      <div className="card-list">
        {cards.map((userCard: IUserCard) => {
          return <UserCard {...userCard} key={userCard.id} />;
        })}
      </div>
    </div>
  );
}

export default FormPage;
