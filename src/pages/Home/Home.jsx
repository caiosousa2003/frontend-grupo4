import Carrossel from './Carrossel';
import TabelaSessoes from './TabelaSessoes';
import { ButtonModal } from '../../components/commom/ButtonModal';
import {
  DivModal,
  DivContainer,
} from './styleHome';
import { useState } from 'react';
import Modal from '../../components/modals/modal';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <DivContainer>
      <DivModal>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        ></Modal>
      </DivModal>
      <Carrossel />
      <ButtonModal onClick={() => showModal()}>Fazer login</ButtonModal>
      <TabelaSessoes></TabelaSessoes>
    </DivContainer>
  );
}

export default Home;
