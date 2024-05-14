import {
  TituloEditar,
  ContainerPadrao,
  InputPadrao,
  TextoPadrao,
  QuadradoCinza,
  Botao,
  BotaoPadrao,
  DivPrincipal,
} from './styleEditarUsuario';
import Header from '../../components/header/header';

function EditarUsuario() {
  return (
    <div>
      <Header cadastro={true} />
      <DivPrincipal>
        <TituloEditar>EDITAR USUÁRIO</TituloEditar>
        <QuadradoCinza>
          <ContainerPadrao>
            <TextoPadrao>Nome:</TextoPadrao>
            <InputPadrao></InputPadrao>
          </ContainerPadrao>
          <ContainerPadrao>
            <TextoPadrao>Cargo:</TextoPadrao>
            <InputPadrao></InputPadrao>
          </ContainerPadrao>
        </QuadradoCinza>
        <Botao>
          <BotaoPadrao>CANCELAR</BotaoPadrao>
          <BotaoPadrao>SALVAR</BotaoPadrao>
        </Botao>
      </DivPrincipal>
    </div>
  );
}

export default EditarUsuario;
