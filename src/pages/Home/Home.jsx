import Carrossel from './Carrossel';
import TabelaSessoes from './TabelaSessoes';
import { ButtonModal } from '../../components/commom/ButtonModal';
import { DivModal, DivContainer, ConteinerLogin, Div } from './styleHome';
import { useState } from 'react';

import Modal from '../../components/modals/modal';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <DivContainer>
      <Carrossel />
      <ConteinerLogin>
        <Div>
          <DivModal>
            <Modal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            ></Modal>
            <ButtonModal onClick={() => showModal()}>Fazer login</ButtonModal>
          </DivModal>
        </Div>
      </ConteinerLogin>
      <TabelaSessoes></TabelaSessoes>
    </DivContainer>
  );
}

export default Home;
