import Modal from '../../components/Modal/Modal';
import CharacterList from '../../components/CharacterList/CharacterList';
import { Character } from 'interfaces';
import React, { useContext, useState } from 'react';
import { ContextModal } from '../../components/Modal/ContextModal';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
type MainProps = {
  characterCards: Character[];
};
export default function Main(props: MainProps) {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const { isOpenModal, openModal } = useContext(ContextModal);

  return (
    <>
      <main className="main">
        {isOpenModal && (
          <Modal>
            <CharacterCard character={currentCharacter} showDetails={true} />
          </Modal>
        )}

        <CharacterList
          setCurrentCharacter={setCurrentCharacter}
          arrCard={props.characterCards}
          openModal={openModal}
        />
      </main>
    </>
  );
}
