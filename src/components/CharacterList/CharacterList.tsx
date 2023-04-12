import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import Modal from '../../components/Modal/Modal';
import { useAppSelector } from '../../hooks/redux';
import { Character } from 'interfaces';

interface CharacterListProps {
  characters: Character[];
}
function CharacterList(props: CharacterListProps) {
  const { current } = useAppSelector((state) => state.characterReducer);
  const { isOpenModal } = useAppSelector((state) => state.modalReducer);

  let listCharacter = props.characters?.map((character) => {
    return <CharacterCard character={character} key={character._id} />;
  });

  return (
    <div className="character-list">
      {isOpenModal && (
        <Modal>
          <CharacterCard character={current} showDetails={true} />
        </Modal>
      )}
      {listCharacter?.length === 0 ? <h2>Nothing found</h2> : listCharacter}
    </div>
  );
}
export default CharacterList;
