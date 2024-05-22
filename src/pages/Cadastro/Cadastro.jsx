import { DivPrincipal, TituloCadastro } from "./styleCadastro";
import Header from "../../components/header/header";
import { ButtonDefault } from "../../components/commom/ButtonDefault";
import { InputDefault } from "../../components/commom/InputDefault";


function Cadastro() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Header cadastro={true}></Header>
      <DivPrincipal>
        <TituloCadastro>CADASTRO</TituloCadastro>
        <InputDefault placeholder="E-mail"></InputDefault>
        <InputDefault placeholder="Senha"></InputDefault>
        <InputDefault placeholder="Nome"></InputDefault>
        <InputDefault placeholder="Cargo"></InputDefault>
        <ButtonDefault>Criar Conta</ButtonDefault>
      </DivPrincipal>
    </div>
  );
}

export default Cadastro;
