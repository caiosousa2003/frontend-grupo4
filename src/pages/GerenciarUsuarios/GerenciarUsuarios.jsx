import { ContainerPrincipal, Titulo, ContainerList, Item, Icon, ContainerLine } from "./sytleGerenciarUsuarios";
import Header from "../../components/header/header";
import IconEdit from '../../assets/IconEdit.png';
import IconTrash from '../../assets/IconTrash.png';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateProjeto } from "../../hooks/query/UpdateProjeto";

function GerenciarUsuarios() {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const queryClient = useQueryClient();

    const { mutate: updateProjeto } = useUpdateProjeto({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['projeto'],
            });
            navigate('/');
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
            <ContainerLine>
                <Item>USUÁRIO 1</Item>
                <Icon src={IconEdit}></Icon>
                <Icon src={IconTrash} margin="0px"></Icon>
            </ContainerLine>
            <ContainerLine>
                <Item>USUÁRIO 1</Item>
                <Icon src={IconEdit}></Icon>
                <Icon src={IconTrash} margin="0px"></Icon>
            </ContainerLine>
            <ContainerLine>
                <Item>USUÁRIO 1</Item>
                <Icon src={IconEdit}></Icon>
                <Icon src={IconTrash} margin="0px"></Icon>
            </ContainerLine>
            <ContainerLine>
                <Item>USUÁRIO 1</Item>
                <Icon src={IconEdit}></Icon>
                <Icon src={IconTrash} margin="0px"></Icon>
            </ContainerLine>
        </ContainerList>
    </ContainerPrincipal>
    </div>
);
}

export default GerenciarUsuarios;