
import { DivPrincipal, TituloCadastro } from "./styleCadastro";
import Header from "../../components/header/header";
import { ButtonDefault } from "../../components/commom/ButtonDefault";
import { InputDefault } from "../../components/commom/InputDefault";
import { DivPrincipal, HeaderPrincipal, TituloCadastro, ButtonDefault, InputDefault, ReturnHeader, LogoHeader} from "./styleCadastro"
import LogoCadastro from "../../assets/LogoCadastro.png"
import ReturnCadastro from "../../assets/ReturnCadastro.png"


function Cadastro() {
  return (
    <div style={{backgroundColor: "black",}}>
      <Header cadastro={true}></Header>
=======
        <HeaderPrincipal>
          <LogoHeader src={LogoCadastro} alt="logo"></LogoHeader>
          <ReturnHeader src={ReturnCadastro} alt="logo"></ReturnHeader>
        </HeaderPrincipal>
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
