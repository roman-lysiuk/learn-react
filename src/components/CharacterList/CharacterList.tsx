import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import Modal from '../../components/Modal/Modal';
import { useAppSelector } from '../../hooks/redux';
import { Character } from 'interfaces';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

interface CharacterListProps {
  characters: Character[];
}
function CharacterList(props: CharacterListProps) {
  const { current, isLoading, error } = useAppSelector((state) => state.characterReducer);
  const { isOpenModal } = useAppSelector((state) => state.modalReducer);

  let listCharacter = props.characters?.map((character) => {
    return <CharacterCard character={character} key={character._id} />;
  });

  return (
    <div className="character-list">
      {isOpenModal && (
        <Modal>
          {isLoading && <Loader />}
          {error && <Error message={error} />}
          <CharacterCard character={current} showDetails={true} />
        </Modal>
      )}
      {listCharacter?.length === 0 ? <h2>Nothing found</h2> : listCharacter}
    </div>
  );
}
export default CharacterList;
