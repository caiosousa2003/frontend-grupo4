import Carrossel from "./Carrossel";
import Header from "../../components/header/header";
import { ButtonModal } from "../../components/commom/ButtonModal";
import Modal from "../../components/modal/modal";
import { Container, DivModal, Line, Cargo, Nome, Email } from "./styleHome";
import { useState } from "react";
import { useGetSessoes } from "../../hooks/query/Sessoes";
function Home() {
  const { data: sessoes } = useGetSessoes({
    onError: (err) => {
      console.log(err);
    },
  });
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
      <Container>
        {sessoes?.map((sessao, index) => (
          <Line key={index}>
            <Cargo>{sessao?.id_usuario?.cargo}</Cargo>
            <Nome>{sessao?.id_usuario?.nome}</Nome>
            <Email>{sessao?.id_usuario?.email}</Email>
          </Line>
        ))}
      </Container>
    </div>
  );
}

export default Home;
