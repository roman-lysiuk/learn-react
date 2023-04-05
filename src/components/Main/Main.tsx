import Modal from '../../components/Modal/Modal';
import CharacterList from '../../components/CharacterList/CharacterList';
import { Character } from 'interfaces';
import React, { useContext, useState } from 'react';
import DetailCharacterCard from '../../components/CharacterCard/DetailCharacterCard';
import { ContextModal } from '../../components/Modal/ContextModal';
type MainProps = {
  characterCards: Character[];
};
export default function Main(props: MainProps) {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const { isOpenModal, openModal, closeModal } = useContext(ContextModal);

  return (
    <>
      <main className="main">
        {isOpenModal && (
          <Modal>
            <DetailCharacterCard character={currentCharacter} />
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
