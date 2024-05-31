import { ContainerPrincipal, Titulo, ContainerList, Item, Icon, ContainerLine, DivModal, DivIcons } from "./sytleGerenciarUsuarios";
import Header from "../../components/header/header";
import IconEdit from '../../assets/IconEdit.png';
import IconTrash from '../../assets/IconTrash.png';
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteUsuarios, useGetUsuarios } from "../../hooks/query/Usuarios";
import { useState } from "react";
import ConfirmModal from "../../components/modals/confirmModal";


function GerenciarUsuarios() {
    
    const navigate = useNavigate();

    // MODAL
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState();

    const showModal = (id_usuario) => {
        setId(id_usuario);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        deleteUsuario(id);
        setId(null);
        setIsModalOpen(false);
    }

    const cancelDelete = () => {
        setId(null);
        setIsModalOpen(false);
    }


    // FUNÇÕES DE REQUISIÇÃO

    const queryClient = useQueryClient();

    const { data: usuarios } = useGetUsuarios({
        onError: (err) => {
            alert(err.response.data.message);
            navigate('/login');
        },
    });

    const { mutate: deleteUsuario } = useDeleteUsuarios({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["usuarios"]
            });
        },
        onError: (err) => {
            alert(err.response.data.message);
        },
    });

return (
    <div>
    <Header cadastro={true} />
    <DivModal>
        <ConfirmModal
          isModalOpen={isModalOpen}
          cancel={cancelDelete}
          confirmDelete={confirmDelete}
          item="usuário"
        ></ConfirmModal>
    </DivModal>
    <ContainerPrincipal>
        <Titulo>GERENCIAR USUÁRIOS</Titulo>
        <ContainerList>
            {usuarios?.map((usuario, index) => (
                <ContainerLine key={index}>
                    <Item>{usuario?.nome}</Item>
                    <DivIcons>
                        <Icon onClick={() => console.log("PAGE EDITAR")} src={IconEdit}></Icon>
                        <Icon onClick={() => showModal(usuario?._id)} src={IconTrash} margin="0px"></Icon>
                    </DivIcons>
                </ContainerLine>
            ))}
        </ContainerList>
    </ContainerPrincipal>
    </div>
);
}

export default GerenciarUsuarios;