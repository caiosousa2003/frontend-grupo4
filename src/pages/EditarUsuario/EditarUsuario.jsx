import {
  TituloEditar,
  ContainerPadrao,
  InputPadrao,
  TextoPadrao,
  QuadradoCinza,
  Botao,
  BotaoPadrao,
  DivPrincipal,
} from "./styleEditarUsuario";
import Header from "../../components/header/header";
import { InputDefault } from "../../components/commom/InputDefault";
import { ButtonDefaultBlack } from "../../components/commom/ButtonDefaultBlack";

function EditarUsuario() {
  return (
    <div>
      <Header cadastro={true} />
      <DivPrincipal>
        <TituloEditar>EDITAR USUÁRIO</TituloEditar>
        <QuadradoCinza>
          <ContainerPadrao>
            <TextoPadrao>Nome:</TextoPadrao>
            <InputDefault
              width="80%"
              height="30px"
              margintop="0px"
            ></InputDefault>
          </ContainerPadrao>
          <ContainerPadrao>
            <TextoPadrao>Cargo:</TextoPadrao>
            <InputDefault
              width="80%"
              height="30px"
              margintop="0px"
            ></InputDefault>
          </ContainerPadrao>
        </QuadradoCinza>
        <Botao>
          <ButtonDefaultBlack>CANCELAR</ButtonDefaultBlack>
          <ButtonDefaultBlack>SALVAR</ButtonDefaultBlack>
        </Botao>
      </DivPrincipal>
    </div>
  );
}

export default EditarUsuario;
