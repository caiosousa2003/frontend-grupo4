/* eslint-disable react/prop-types */
import { LogoCPE, ContainerHeader, ContainerIcons, IconUsuarios, IconProjetos, ContainerAdmin, ContainerUsuarios, IconEditar, IconSair } from './styleHeader';
import logo from '../../assets/LogoCadastro.png';
import { IoLogOutOutline } from "react-icons/io5";
import iconEditar from '../../assets/IconEditPreto.png';
import iconUsuarios from '../../assets/IconUsuarios.png';
import iconProjetos from '../../assets/IconProjetos.png';

function Header() {





  return (
    <div>
      <ContainerHeader>
        <LogoCPE src={logo} alt="logo"></LogoCPE>
        <ContainerIcons>
          <ContainerAdmin>
            <IconProjetos src={iconProjetos}></IconProjetos>
            <IconUsuarios src={iconUsuarios}></IconUsuarios>
          </ContainerAdmin>
          <ContainerUsuarios>
            <IconEditar></IconEditar>
            <IconSair><IoLogOutOutline/></IconSair>
          </ContainerUsuarios>
        </ContainerIcons>
      </ContainerHeader>
    </div>
  );
}

export default Header;
