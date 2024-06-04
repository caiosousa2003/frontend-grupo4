import {
  ModalStyle,
  ModalBtn,
  GlobalDiv,
  ModalTlt,
  InputTlt,
  InputModal,
  Form,
  SelectModal,
  OptionsModal,
} from "./styleModal";
import { Space } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { usePostSessoes } from "../../hooks/query/Sessoes";
import useAuthStore from "../../Stores/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetProjetos } from "../../hooks/query/Projetos";
import React, { useEffect, useState } from "react";
import { Select } from "antd";

export default function Modal({ isModalOpen, setIsModalOpen }) {
  // Projetos
  const { data: projetos } = useGetProjetos({
    onError: (err) => {
      console.log(err);
    },
  });
  const [selectedProjeto, setSelectedProjeto] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedProjeto(event.target.value);
  };

  // Sessoes

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
    postSessoes(usuarioLogado);
    handleCancel();
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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
            <InputTlt>Selecione o projeto</InputTlt>
            {/* <InputModal
              {...register("project")}
              name="project"
              placeholder="Nome"
              id="project"
              error={!!errors?.project?.message}
            ></InputModal>
            {errors?.project?.message && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors?.project?.message}
              </p>
            )} */}

            <SelectModal
              id="projeto-select"
              {...register("project")}
              name="project"
              value={selectedProjeto || ""}
              onChange={handleSelectChange}
            >
              <OptionsModal value="" disabled hidden>
                Escolha o projeto
              </OptionsModal>
              {projetos &&
                projetos.map((projeto) => (
                  <OptionsModal>{projeto.nome}</OptionsModal>
                ))}
            </SelectModal>
            <ModalBtn>SALVAR</ModalBtn>
          </Form>
        </GlobalDiv>
      </ModalStyle>
    </>
  );
}
