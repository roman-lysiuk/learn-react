import Header from '../components/Header/Header';
import React, { useEffect, useMemo, useState } from 'react';
import Main from '../components/Main/Main';
import { Character } from 'interfaces';
import characterService from '../API/characterService';

function HomePage() {
  const [characterCards, setCharacterCards] = useState<Character[]>([]);
  const [searchCharacter, setSearchCharacter] = useState<Character[]>([]);

  async function fetchCharacter() {
    const allCharacter = await characterService.getAllCharacter();
    setCharacterCards(allCharacter);
    setSearchCharacter(allCharacter);
  }

  useEffect(() => {
    fetchCharacter();
  }, []);

  function setSearchCharacterCards(newCards: Character[]) {
    setSearchCharacter(newCards);
  }
  return (
    <>
      <Header
        isSearch={true}
        setSearchCharacterCards={setSearchCharacterCards}
        characterCards={characterCards}
      />
      <Main characterCards={searchCharacter} />
    </>
  );
}

export default HomePage;
