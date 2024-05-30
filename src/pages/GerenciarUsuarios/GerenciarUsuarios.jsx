import { ContainerPrincipal, Titulo, ContainerList, Item, Icon, ContainerLine } from "./sytleGerenciarUsuarios";
import Header from "../../components/header/header";
import IconEdit from '../../assets/IconEdit.png';
import IconTrash from '../../assets/IconTrash.png';
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteUsuarios, useGetUsuarios } from "../../hooks/query/Usuarios";

function GerenciarUsuarios() {
    
    const navigate = useNavigate();

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
    <ContainerPrincipal>
        <Titulo>GERENCIAR USUÁRIOS</Titulo>
        <ContainerList>
            {usuarios?.map((usuario, index) => (
                <ContainerLine key={index}>
                    <Item>{usuario?.nome}</Item>
                    <Icon onClick={() => console.log("PAGE EDITAR")} src={IconEdit}></Icon>
                    <Icon onClick={() => console.log("MODAL")} src={IconTrash} margin="0px"></Icon>
                </ContainerLine>
            ))}
        </ContainerList>
    </ContainerPrincipal>
    </div>
);
}

export default GerenciarUsuarios;