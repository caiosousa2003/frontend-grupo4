import { Campo, ContainerPrincipal, Form, Titulo, Label, InputDescricao, ContainerForm, ContainerList, Item, Icon, ContainerLine, Alert } from "./styleGerenciarProjetos";
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

function GerenciarProjetos() {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(validador) });
    const navigate = useNavigate();
    
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

    const onSubmit = (data) => {
        createProjeto(data);
    };

    const EditProjeto = (id) => {
        navigate("/editar-projetos", { state: id  } )
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
                    <Icon onClick={() => EditProjeto(projeto?._id)} src={IconEdit}></Icon>
                    <Icon onClick={() => console.log("MODAL")} src={IconTrash} margin="0px"></Icon>
                </ContainerLine>
            ))}
        </ContainerList>
    </ContainerPrincipal>
    </div>
);
}

export default GerenciarProjetos;