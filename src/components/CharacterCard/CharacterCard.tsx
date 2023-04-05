import React from 'react';
import { Character } from '../../interfaces';
import plug from '../../assets/pngwing.com.png';
type CharacterCardProps = {
  character: Character | undefined;
  openModal?: () => void;
  setCurrentCharacter?: (character: Character) => void;
  showDetails?: boolean;
};

function CharacterCard(props: CharacterCardProps) {
  const { character, setCurrentCharacter, openModal, showDetails = false } = props;
  const cardClass = showDetails ? 'card-detail' : 'card';
  return (
    <div
      onClick={() => {
        if (showDetails) {
          return;
        }
        if (setCurrentCharacter && character) setCurrentCharacter(character);
        if (openModal) openModal();
      }}
      className={cardClass}
      id="card"
      data-id={character?._id}
    >
      <div className="card__image">
        <img src={plug} alt="hero image" />
      </div>

      <div className="card__name">{character?.name}</div>

      <div className="card__info">
        {character?.race !== '' && <div className="card__race">Race: {character?.race}</div>}

        {character?.gender !== '' && (
          <div className="card__gender">Gender: {character?.gender}</div>
        )}

        {character?.height !== '' && showDetails && (
          <div className="card__height">Height: {character?.height} </div>
        )}

        {character?.birth !== '' && showDetails && character?.death !== '' && (
          <div className="card__lifetime">
            <div className="card__birth">Birth - {character?.birth}</div>

            <div className="card__death">Death - {character?.death}</div>
          </div>
        )}

        {character?.spouse !== '' && showDetails && (
          <div className="card__spouse">Spouse: {character?.spouse}</div>
        )}

        {character?.realm !== '' && showDetails && (
          <div className="card__realm">Realm: {character?.realm}</div>
        )}

        {character?.hair !== '' && showDetails && (
          <div className="card__hair">Hair: {character?.hair}</div>
        )}

        {character?.wikiUrl !== '' && showDetails && (
          <div className="card__wikiUrl">
            wikiUrl:{' '}
            <a target="_blank" href={character?.wikiUrl} rel="noreferrer">
              {character?.wikiUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterCard;
