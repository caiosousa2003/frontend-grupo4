import Header from "../../components/header/header";
import { ButtonDefault } from "../../components/commom/ButtonDefault";
import { InputDefault } from "../../components/commom/InputDefault";
import { Titulo, DivPrincipal, TextCadastro, TextClicavel, Form } from "./styleLogin";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginUsuario } from "../../hooks/query/Login";
import { validador } from "./utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";

function Login() {
    
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(validador) });
    const navigate = useNavigate();
    
    const queryClient = useQueryClient();
    const { mutate: loginUsuario } = useLoginUsuario({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['login'],
            });
        },
        onError: (err) => {
            console.log(err);
        },
    });

    const onSubmit = (data) => {
        console.log("LOGADO");
        loginUsuario(data);
    };

    return (
        <div>
        <Header/>
        <DivPrincipal>
            <Titulo>LOGIN</Titulo>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputDefault name="email" placeholder="E-mail" errors={errors} {...register("email")}></InputDefault>
                <InputDefault name="senha" type="password" placeholder="Senha" errors={errors} {...register("senha")}></InputDefault>
                <TextCadastro>Não tem login? Faça seu cadastro <TextClicavel onClick={()=>navigate("/cadastro")}>aqui</TextClicavel></TextCadastro>
                <ButtonDefault><b>ENTRAR</b></ButtonDefault>
            </Form>
        </DivPrincipal>
        </div>
    );
}

export default Login;