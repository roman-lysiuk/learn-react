import { Character } from 'interfaces';
import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

type CharacterListProps = {
  arrCard: Character[];
  openModal: () => void;
  setCurrentCharacter: (character: Character) => void;
};

function CharacterList(props: CharacterListProps) {
  const { setCurrentCharacter, openModal, arrCard } = props;

  if (arrCard.length === 0) return <h2>Nothing found</h2>;

  const listCharacter = props.arrCard.map((character) => {
    return (
      <CharacterCard
        setCurrentCharacter={setCurrentCharacter}
        openModal={openModal}
        character={character}
        key={character._id}
      />
    );
  });

  return <div className="character-list">{listCharacter}</div>;
}
export default CharacterList;
