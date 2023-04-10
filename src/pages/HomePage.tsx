import Header from '../components/Header/Header';
import React, { useEffect, useState } from 'react';
import Main from '../components/Main/Main';
import { Character } from 'interfaces';
import characterService from '../API/characterService';
import { ModalState } from '../components/Modal/ContextModal';
import useLoading from '../hooks/useLoading';
import Loader from '../components/Loader/Loader';
import Error from '../components/Error/Error';

function HomePage() {
  const [characterCards, setCharacterCards] = useState<Character[]>([]);
  const [searchCharacter, setSearchCharacter] = useState<Character[]>([]);
  const {
    isLoading,
    loading: fetchCharacter,
    error,
  } = useLoading(async () => {
    const allCharacter = await characterService.getAllCharacter();
    setCharacterCards(allCharacter);
    setSearchCharacter(allCharacter);
  });

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  function setSearchCharacterCards(newCards: Character[]) {
    setSearchCharacter(newCards);
  }
  return (
    <ModalState>
      <Header
        isSearch={true}
        setSearchCharacterCards={setSearchCharacterCards}
        characterCards={characterCards}
      />
      <Main characterCards={searchCharacter} />
      {isLoading && <Loader />}
      {error && <Error message={error} />}
    </ModalState>
  );
}

export default HomePage;
