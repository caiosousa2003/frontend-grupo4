import {
  DivPrincipal,
  HeaderPrincipal,
  TituloCadastro,
  ButtonDefault,
  InputDefault,
  ReturnHeader,
  LogoHeader,
} from './styleCadastro';
import logo from '../../assets/LogoCadastro.png';
import x from '../../assets/ReturnCadastro.png';

function Cadastro() {
  return (
    <div
      style={{
        backgroundColor: 'black',
      }}
    >
      <HeaderPrincipal>
        <LogoHeader src={logo} alt="logo"></LogoHeader>
        <ReturnHeader src={x} alt="logo"></ReturnHeader>
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
