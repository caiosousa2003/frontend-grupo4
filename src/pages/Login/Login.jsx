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
import useAuthStore from "../../Stores/auth";

function Login() {
    
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(validador) });
    const navigate = useNavigate();
    
    const queryClient = useQueryClient();
    const setToken = useAuthStore((state) => state.setToken);

    const { mutate: loginUsuario } = useLoginUsuario({
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['login'],
            });
            setToken(data.token);
            navigate('/');
        },
        onError: (err) => {
            alert(err.response.data.message);
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        loginUsuario(data);
    };

    return (
        <div>
        <Header/>
        <DivPrincipal>
            <Titulo>LOGIN</Titulo>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputDefault name="email" placeholder="E-mail" error={errors} borda ={!!errors?.email?.message} {...register("email")}></InputDefault>
                {!!errors?.email?.message && <Alert>{errors?.email?.message}</Alert>}
                <InputDefault margintop="30px" name="senha" type="password" placeholder="Senha" error={errors} borda ={!!errors?.senha?.message} {...register("senha")}></InputDefault>
                {!!errors?.senha?.message && <Alert>{errors?.senha?.message}</Alert>}
                <TextCadastro>Não tem login? Faça seu cadastro <TextClicavel onClick={()=>navigate("/cadastro")}>aqui</TextClicavel></TextCadastro>
                <ButtonDefault marginTop="40px"><b>ENTRAR</b></ButtonDefault>
            </Form>
        </DivPrincipal>
        </div>
    );
}

export default Login;