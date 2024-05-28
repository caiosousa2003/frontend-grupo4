import {
  ModalStyle,
  ModalBtn,
  GlobalDiv,
  ModalTlt,
  InputTlt,
  InputModal,
  Form,
} from "./styleModal";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { usePostSessoes } from "../../hooks/query/Sessoes";
import useAuthStore from "../../Stores/auth";

export default function modal({ isModalOpen, setIsModalOpen }) {
  const usuario = useAuthStore((state) => state.usuario?.usuario?._id);
  const queryClient = useQueryClient();

  const { mutate: postSessoes } = usePostSessoes({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sessoes"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const onSubmit = (data) => {
    const usuarioLogado = {
      id_projeto: data.project,
      id_usuario: usuario,
    };
    console.log(usuarioLogado);
    postSessoes(usuarioLogado);
  };
  const { handleSubmit, register } = useForm();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ModalStyle
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <GlobalDiv>
          <ModalTlt>Iniciar sessão</ModalTlt>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputTlt>Digite o projeto</InputTlt>
            <InputModal
              {...register("project")}
              name="project"
              placeholder="Nome"
            ></InputModal>
            <ModalBtn>SALVAR</ModalBtn>
          </Form>
        </GlobalDiv>
      </ModalStyle>
    </>
  );
}
