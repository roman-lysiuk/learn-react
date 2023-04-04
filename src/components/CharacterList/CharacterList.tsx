import { Character } from 'interfaces';
import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

type CharacterListProps = {
  arrCard: Character[];
};

function CharacterList(props: CharacterListProps) {
  if (props.arrCard.length === 0) return <h2>Nothing found</h2>;

  const listCharacter = props.arrCard.map((character) => {
    return <CharacterCard {...character} key={character._id} />;
  });

  return <div className="character-list">{listCharacter}</div>;
}
export default CharacterList;
