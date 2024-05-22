import Header from "../../components/header/header";
import { ButtonDefault } from "../../components/commom/ButtonDefault";
import { InputDefault } from "../../components/commom/InputDefault";
import { Titulo, DivPrincipal, TextCadastro, TextClicavel, Form, Alert } from "./styleLogin";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginUsuario } from "../../hooks/query/Login";
import { validador } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function Login() {
    
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(validador) });
    const navigate = useNavigate();
    
    const queryClient = useQueryClient();
    const [backError, setBackError] = useState();
    const { mutate: loginUsuario } = useLoginUsuario({
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['login'],
            });
            console.log(data);
            console.log("LOGADO");
            navigate('/');
        },
        onError: (err) => {
            setBackError(err);
            console.log(err.response.data.message);
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        setBackError();
        loginUsuario(data);
    };

    return (
        <div>
        <Header/>
        <DivPrincipal>
            <Titulo>LOGIN</Titulo>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputDefault name="email" placeholder="E-mail" error={errors} {...register("email")}></InputDefault>
                {!!errors?.email?.message && <Alert>{errors?.email?.message}</Alert>}
                <InputDefault name="senha" type="password" placeholder="Senha" error={errors} {...register("senha")}></InputDefault>
                {!!errors?.senha?.message && <Alert>{errors?.senha?.message}</Alert>}
                <TextCadastro>Não tem login? Faça seu cadastro <TextClicavel onClick={()=>navigate("/cadastro")}>aqui</TextClicavel></TextCadastro>
                {!!backError && <Alert>{backError.response.data.message}</Alert>}
                <ButtonDefault><b>ENTRAR</b></ButtonDefault>
            </Form>
        </DivPrincipal>
        </div>
    );
}

export default Login;