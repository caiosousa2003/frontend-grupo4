import Header from "../../components/header/header";
import { ButtonDefault } from "../../components/commom/ButtonDefault";
import { InputDefault } from "../../components/commom/InputDefault";
import { Titulo, DivPrincipal, TextCadastro, TextClicavel, Form } from "./styleLogin";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function Login() {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate("/");
        alert(`Login com email: ${data.email} e senha: ${data.senha} realizado`);
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