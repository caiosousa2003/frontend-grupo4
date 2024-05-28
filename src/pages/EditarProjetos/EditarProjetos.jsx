import { Campo, ContainerButtons, ContainerPrincipal, Form, Titulo, Label, InputDescricao, ContainerForm } from "./styleEditarProjetos";
import Header from "../../components/header/header";
import { InputDefault } from "../../components/commom/InputDefault";
import { ButtonDefaultBlack } from "../../components/commom/ButtonDefaultBlack";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateProjeto } from "../../hooks/query/UpdateProjeto";

function EditarProjetos() {
    
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
        updateProjeto(data);
    };


return (
    <div>
    <Header cadastro={true} />
    <ContainerPrincipal>
        <Titulo>Editar projeto</Titulo>
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
            <ContainerButtons>
                <ButtonDefaultBlack font="16px" margin="15px">CANCELAR</ButtonDefaultBlack>
                <ButtonDefaultBlack type="submit" font="16px" margin="15px">SALVAR</ButtonDefaultBlack>
            </ContainerButtons>
        </Form>
    </ContainerPrincipal>
    </div>
);
}

export default EditarProjetos;