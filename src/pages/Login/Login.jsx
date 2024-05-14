import Header from "../../components/header/header";
import { ButtonDefault } from "../../components/commom/ButtonDefault";
import { InputDefault } from "../../components/commom/InputDefault";
import { DivPrincipal, TituloCadastro } from "../Cadastro/styleCadastro";
import { TextCadastro, TextClicavel } from "./styleLogin";

function RecebeDados(){
    let email = document.getElementById("emailInput").value;
    let senha = document.getElementById("senhaInput").value;

    alert(`Login realizado do email: ${email} com a senha: ${senha}`);
}

function Login() {
  return (
    <div>
      <Header/>
      <DivPrincipal>
        <TituloCadastro>LOGIN</TituloCadastro>
        <InputDefault placeholder="E-mail" id="emailInput"></InputDefault>
        <InputDefault placeholder="Senha" id="senhaInput"></InputDefault>
        <TextCadastro>Não tem login? Faça seu cadastro <TextClicavel>aqui</TextClicavel></TextCadastro>
        <ButtonDefault onClick={()=> RecebeDados()}><b>ENTRAR</b></ButtonDefault>
      </DivPrincipal>
      
    </div>
  );
}

export default Login;