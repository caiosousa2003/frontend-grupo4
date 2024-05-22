import Carrossel from "./Carrossel";
import Header from "../../components/header/header";
import Modal from "../../components/modal/modal";
import { useState } from "react";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Header />
      <button
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        Abrir modal
      </button>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        Conteudo do modal
      </Modal>
      <Carrossel />
    </div>
  );
}

export default Home;
