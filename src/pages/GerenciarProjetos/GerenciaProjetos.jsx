import { Campo, ContainerPrincipal, Form, Titulo, Label, InputDescricao, ContainerForm, ContainerList, Item, Icon, ContainerLine, Alert, DivModal, DivIcons } from "./styleGerenciarProjetos";
import Header from "../../components/header/header";
import { InputDefault } from "../../components/commom/InputDefault";
import { ButtonDefaultBlack } from "../../components/commom/ButtonDefaultBlack";
import IconEdit from '../../assets/IconEdit.png';
import IconTrash from '../../assets/IconTrash.png';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateProjetos, useDeleteProjetos, useGetProjetos } from "../../hooks/query/Projetos";
import { zodResolver } from "@hookform/resolvers/zod";
import { validador } from "./utils";
import { useState } from "react";
import ConfirmModal from "../../components/modals/confirmModal";

function GerenciarProjetos() {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(validador) });
    const navigate = useNavigate();

    // MODAL
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState();

    const showModal = (id_projeto) => {
        setId(id_projeto);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        deleteProjeto(id);
        setId(null);
        setIsModalOpen(false);
    }

    const cancelDelete = () => {
        setId(null);
        setIsModalOpen(false);
    }

    
    // FUNÇÕES DE REQUISIÇÃO

    const queryClient = useQueryClient();

    const { data: projetos } = useGetProjetos({
        onError: (err) => {
            alert(err.response.data.message);
        },
    });

    const { mutate: deleteProjeto } = useDeleteProjetos({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["projetos"]
            });
        },
        onError: (err) => {
            alert(err.response.data.message);
        },
    });

    const { mutate: createProjeto } = useCreateProjetos({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["projetos"]
            });
            reset();
        },
        onError: (err) => {
            alert(err.response.data.message);
        },
    });

    // AÇÕES DOS BOTÕES DE CRIAR NOVO E EDITAR
    const onSubmit = (data) => {
        createProjeto(data);
    };

    const EditProjeto = (id) => {
        navigate("/editar-projetos", { state: id  } )
    };

return (
    <div>
    <Header cadastro={true} />
    <DivModal>
        <ConfirmModal
          isModalOpen={isModalOpen}
          cancel={cancelDelete}
          confirmDelete={confirmDelete}
          item="projeto"
        ></ConfirmModal>
    </DivModal>
    <ContainerPrincipal>
        <Titulo>GERENCIAR PROJETOS</Titulo>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ContainerForm>
                <Campo>
                    <Label htmlFor="nome" margin="50px">Nome: </Label>
                    <InputDefault width="75%" height="40px" font="18px" name="nome" error={errors} borda ={!!errors?.nome?.message} {...register("nome")}></InputDefault>
                </Campo>
                {!!errors?.nome?.message && <Alert>{errors?.nome?.message}</Alert>}
                <Campo>
                    <Label htmlFor="descricao">Descrição: </Label>
                    <InputDescricao width="75%" height="150px" name="descricao" error={errors} borda ={!!errors?.descricao?.message} {...register("descricao")}></InputDescricao>
                </Campo>
                {!!errors?.descricao?.message && <Alert>{errors?.descricao?.message}</Alert>}
                <Campo>
                    <Label htmlFor="equipe" margin="40px">Equipe: </Label>
                    <InputDefault width="75%" height="40px" font="18px" name="equipe" error={errors} borda ={!!errors?.equipe?.message} {...register("equipe")}></InputDefault>
                </Campo>
                {!!errors?.equipe?.message && <Alert>{errors?.equipe?.message}</Alert>}
            </ContainerForm>
                <ButtonDefaultBlack type="submit" font="16px" margin="15px">SALVAR</ButtonDefaultBlack>
        </Form>
        <ContainerList>
            {projetos?.map((projeto, index) => (
                <ContainerLine key={index}>
                    <Item>{projeto?.nome}</Item>
                    <DivIcons>
                        <Icon onClick={() => EditProjeto(projeto?._id)} src={IconEdit}></Icon>
                        <Icon onClick={() => showModal(projeto?._id)} src={IconTrash} margin="0px"></Icon>
                    </DivIcons>
                    
                </ContainerLine>
            ))}
        </ContainerList>
    </ContainerPrincipal>
    </div>
);
}

export default GerenciarProjetos;