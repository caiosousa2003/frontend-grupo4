import { Campo, ContainerPrincipal, Form, Titulo, Label, InputDescricao, ContainerForm, ContainerList, Item, Icon, ContainerLine } from "./styleGerenciarProjetos";
import Header from "../../components/header/header";
import { InputDefault } from "../../components/commom/InputDefault";
import { ButtonDefaultBlack } from "../../components/commom/ButtonDefaultBlack";
import IconEdit from '../../assets/IconEdit.png';
import IconTrash from '../../assets/IconTrash.png';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateProjeto } from "../../hooks/query/UpdateProjeto";

function GerenciarProjetos() {
    
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

    const onSubmit = (data) => {
        console.log(data)
        //updateProjeto(data);
    };

return (
    <div>
    <Header cadastro={true} />
    <ContainerPrincipal>
        <Titulo>GERENCIAR PROJETOS</Titulo>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ContainerForm>
                <Campo>
                    <Label htmlFor="nome" margin="50px">Nome: </Label>
                    <InputDefault width="75%" height="40px" font="18px" name="nome" error={errors} {...register("nome")}></InputDefault>
                </Campo>
                <Campo>
                    <Label htmlFor="descricao">Descrição: </Label>
                    <InputDescricao width="75%" height="150px" name="descricao" error={errors} {...register("descricao")}></InputDescricao>
                </Campo>
                <Campo>
                    <Label htmlFor="equipe" margin="40px">Equipe: </Label>
                    <InputDefault width="75%" height="40px" font="18px" name="equipe" error={errors} {...register("equipe")}></InputDefault>
                </Campo>
            </ContainerForm>
                <ButtonDefaultBlack font="16px" margin="15px">SALVAR</ButtonDefaultBlack>
        </Form>
        <ContainerList>
            <ContainerLine>
                <Item>PROJETO 1</Item>
                <Icon src={IconEdit}></Icon>
                <Icon src={IconTrash} margin="0px"></Icon>
            </ContainerLine>
            <ContainerLine>
                <Item>PROJETO 1</Item>
                <Icon src={IconEdit}></Icon>
                <Icon src={IconTrash} margin="0px"></Icon>
            </ContainerLine>
            <ContainerLine>
                <Item>PROJETO 1</Item>
                <Icon src={IconEdit}></Icon>
                <Icon src={IconTrash} margin="0px"></Icon>
            </ContainerLine>
            <ContainerLine>
                <Item>PROJETO 1</Item>
                <Icon src={IconEdit}></Icon>
                <Icon src={IconTrash} margin="0px"></Icon>
            </ContainerLine>
        </ContainerList>
    </ContainerPrincipal>
    </div>
);
}

export default GerenciarProjetos;