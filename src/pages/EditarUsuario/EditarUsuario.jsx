import { DivEditar, ContainerPadrao, InputPadrao, InputStatus, QuadradoCinza, TextoPadrao, Botao, BotaoPadrao, DivPrincipal } from "./styleEditarUsuario"
import Header from '../../components/header/header';

function EditarUsuario() {
    return(
        <div>
            <DivPrincipal> 
            <Header />
            <QuadradoCinza></QuadradoCinza>
                <DivEditar>
                    Editar
                </DivEditar>
                <ContainerPadrao>
                    <TextoPadrao>
                        Nome:
                    </TextoPadrao>
                    <InputPadrao></InputPadrao>
                </ContainerPadrao>
                <ContainerPadrao>
                    <TextoPadrao> 
                        Cargo:
                    </TextoPadrao>
                    <InputPadrao></InputPadrao>
                </ContainerPadrao>
                <ContainerPadrao>
                    <TextoPadrao>
                        Status:
                    </TextoPadrao>
                    <InputStatus></InputStatus>
                </ContainerPadrao>
                <Botao>
                    <BotaoPadrao>
                        CANCELAR
                    </BotaoPadrao>
                    <BotaoPadrao>
                        SALVAR
                    </BotaoPadrao>
                </Botao>
                </DivPrincipal>
        </div>
    );
}

export default EditarUsuario;