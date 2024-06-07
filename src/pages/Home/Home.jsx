import Carrossel from './Carrossel';
import TabelaSessoes from './TabelaSessoes';
import { ButtonModal } from '../../components/commom/ButtonModal';
import {
  //   Container,
  DivModal,
  //   Line,
  //   Cargo,
  //   Nome,
  //   Email,
  DivContainer,
  DivModalConfirm,
} from './styleHome';
import { useState } from 'react';
//import {
//useDeleteSessoes,
//useGetSessoes,
//usePostSessoes,
//} from '../../hooks/query/Sessoes';
//import { useQueryClient } from '@tanstack/react-query';
//import useAuthStore from '../../Stores/auth';
import Modal from '../../components/modals/modal';
import ConfirmModal from '../../components/modals/confirmModal';

function Home() {
  // const { data: sessoes } = useGetSessoes({
  //   onError: (err) => {
  //     console.log(err);
  //   },
  // });
  // const { mutate: deleteSessoes } = useDeleteSessoes({
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ['sessoes'],
  //     });
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //   },
  // });
  //const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const [id, setId] = useState();

  const showModalConfirm = (id_sessao) => {
    setId(id_sessao);
    setIsModalConfirmOpen(true);
  };

  const confirmDelete = () => {
    deleteSessoes(id);
    setId(null);
    setIsModalConfirmOpen(false);
  };

  const cancelDelete = () => {
    setId(null);
    setIsModalConfirmOpen(false);
  };

  return (
    <DivContainer>
      <DivModal>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        ></Modal>
        <ButtonModal onClick={() => showModal()}>Fazer login</ButtonModal>
      </DivModal>
      <DivModalConfirm>
        <ConfirmModal
          isModalOpen={isModalConfirmOpen}
          cancel={cancelDelete}
          confirmDelete={confirmDelete}
          item="sessão"
        ></ConfirmModal>
      </DivModalConfirm>
      <Carrossel />
      {/* <Container>
        {sessoes?.map((sessao, index) => (
          <Line key={index}>
            <Cargo>{sessao?.id_usuario?.cargo}</Cargo>
            <Nome>{sessao?.id_usuario?.nome}</Nome>
            <Email>{sessao?.id_usuario?.email}</Email>
            <FaTrashAlt
              onClick={() => showModalConfirm(sessao?.id_usuario?._id)}
            />
          </Line>
        ))}
      </Container> */}
      <TabelaSessoes></TabelaSessoes>
    </DivContainer>
  );
}

export default Home;
