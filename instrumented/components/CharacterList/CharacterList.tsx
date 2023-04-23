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

  const listCharacter = props.characters?.map((character) => {
    return <CharacterCard character={character} key={character._id} />;
  });

  return (
    <div className="character-list">
      {isLoading && <Loader />}

      {isOpenModal && !isLoading && (
        <Modal>
          {error && <Error message={error} />}
          {!error && <CharacterCard character={current} showDetails={true} />}
        </Modal>
      )}
      {listCharacter?.length === 0 ? <h2>Nothing found</h2> : listCharacter}
    </div>
  );
}
export default CharacterList;
