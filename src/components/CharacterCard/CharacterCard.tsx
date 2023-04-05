import React from 'react';
import { Character } from '../../interfaces';
import plug from '../../assets/pngwing.com.png';
type CharacterCardProps = {
  character: Character;
  openModal: () => void;
  setCurrentCharacter: (character: Character) => void;
};
function CharacterCard(props: CharacterCardProps) {
  const { character, setCurrentCharacter, openModal } = props;
  return (
    <div
      onClick={() => {
        setCurrentCharacter(character);
        openModal();
      }}
      className="card"
      id="card"
      data-id={character._id}
    >
      <div className="card__image">
        <img src={plug} alt="hero image" />
      </div>
      <div className="card__name">{character.name}</div>
      <div className="card__info">
        {character.race !== '' && <div className="card__race">Race: {character.race}</div>}
        {character.gender !== '' && <div className="card__gender">Gender: {character.gender}</div>}
      </div>
    </div>
  );
}

export default CharacterCard;
