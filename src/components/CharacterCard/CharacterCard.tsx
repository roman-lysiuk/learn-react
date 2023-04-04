import React from 'react';
import { Character } from '../../interfaces';
import plug from '../../assets/pngwing.com.png';

function CharacterCard(character: Character) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={plug} alt="hero image" />
      </div>
      <div className="card__name">{character.name}</div>
      <div className="card__info">
        {character.height !== '' && <div className="card__height">Height: {character.height} </div>}
        {character.race !== '' && <div className="card__race">Race: {character.race}</div>}
        {character.gender !== '' && <div className="card__gender">Gender: {character.gender}</div>}
        {character.birth !== '' && character.death !== '' && (
          <div className="card__lifetime">
            <div className="card__birth">Birth - {character.birth}</div>

            <div className="card__death">Death - {character.death}</div>
          </div>
        )}

        {character.spouse !== '' && <div className="card__spouse">Spouse: {character.spouse}</div>}
        {character.realm !== '' && <div className="card__realm">Realm: {character.realm}</div>}
        {character.hair !== '' && <div className="card__hair">Hair: {character.hair}</div>}
        {character.wikiUrl !== '' && (
          <div className="card__wikiUrl">
            wikiUrl:{' '}
            <a target="_blank" href={character.wikiUrl}>
              {character.wikiUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterCard;
