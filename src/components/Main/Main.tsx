import CharacterList from '../../components/CharacterList/CharacterList';
import { Character } from 'interfaces';
import React from 'react';
type MainProps = {
  characterCards: Character[];
};
export default function Main(props: MainProps) {
  return <main className="main">{<CharacterList arrCard={props.characterCards} />}</main>;
}
