import Carrossel from "./Carrossel";
import Header from "../../components/header/header";
import { ButtonModal } from "../../components/commom/ButtonModal";
import Modal from "../../components/modals/modal";
import { DivModal } from "./styleHome";
import { useState } from "react";
import FooterPrincipal from "../../components/footer/Footer";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div style={{ backgoundColor: "#111" }}>
      <Header />
      <DivModal>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        ></Modal>
        <ButtonModal onClick={() => showModal()}>Fazer login</ButtonModal>
      </DivModal>
      <Carrossel />
      <FooterPrincipal />
    </div>
  );
}

export default Home;
