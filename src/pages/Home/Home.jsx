import Carrossel from "./Carrossel";
import Header from "../../components/header/header";
import { ButtonModal } from "../../components/commom/ButtonModal";
import {
  Container,
  DivModal,
  Line,
  Cargo,
  Nome,
  Email,
  DivContainer,
} from "./styleHome";
import { useState } from "react";
import {
  useDeleteSessoes,
  useGetSessoes,
  usePostSessoes,
} from "../../hooks/query/Sessoes";
import { FaTrashAlt } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import useAuthStore from "../../Stores/auth";
import FooterPrincipal from "../../components/footer/footer";
import Modal from "../../components/modals/modal";

function Home() {
  const usuario = useAuthStore((state) => state.usuario);
  const { data: sessoes } = useGetSessoes({
    onError: (err) => {
      console.log(err);
    },
  });
  const { mutate: deleteSessoes } = useDeleteSessoes({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sessoes"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <DivContainer>
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
            <FaTrashAlt
              onClick={() => deleteSessoes(sessao?.id_usuario?._id)}
            />
          </Line>
        ))}
      </Container>
      <FooterPrincipal />
    </DivContainer>
  );
}

export default Home;
