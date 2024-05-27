import { Campo, ContainerButtons, ContainerPrincipal, Form, Titulo, Label } from "./styleEditarProjetos";
import Header from "../../components/header/header";
import { InputDefault } from "../../components/commom/InputDefault";
import { ButtonDefaultBlack } from "../../components/commom/ButtonDefaultBlack";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useQueryClient } from "@tanstack/react-query";

function EditarProjetos() {
    
    // const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(validador) });
    // const navigate = useNavigate();
    
    // const queryClient = useQueryClient();


return (
    <div>
    <Header cadastro={true} />
    <ContainerPrincipal>
        <Titulo>Editar projeto</Titulo>
        <Form>
            <Campo>
                <Label>Nome: </Label>
                <InputDefault width="80%" height="40px"></InputDefault>
            </Campo>
            <Campo>
                <Label>Descrição: </Label>
                <InputDefault width="80%" height="60px"></InputDefault>
            </Campo>
            <Campo>
                <Label>Equipe: </Label>
                <InputDefault width="80%" height="40px"></InputDefault>
            </Campo>
        </Form>
        <ContainerButtons>
            <ButtonDefaultBlack>CANCELAR</ButtonDefaultBlack>
            <ButtonDefaultBlack>SALVAR</ButtonDefaultBlack>
        </ContainerButtons>
    </ContainerPrincipal>
    </div>
);
}

export default EditarProjetos;