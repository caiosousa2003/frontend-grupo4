import Carrossel from "./Carrossel";
import Header from "../../components/header/header";
import { ButtonModal } from "../../components/commom/ButtonModal";
import Modal from "../../components/modal/modal";
import { DivModal } from "./styleHome";
import { useState } from "react";
function Home() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div style={{ backgoundColor: "#111" }}>
      <Header />
      <DivModal>
        <ButtonModal
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          Fazer Login
        </ButtonModal>
        <Modal
          isOpen={openModal}
          setOpenModel={setOpenModal}
        ></Modal>
      </DivModal>
      <Carrossel />
    </div>
  );
}

export default Home;
