/* eslint-disable react/prop-types */
import { LogoCPE, ContainerHeader, ContainerIcons, IconUsuarios, IconProjetos, ContainerAdmin, ContainerUsuarios, IconEditar, IconSair, Linha } from './styleHeader';
import logo from '../../assets/LogoCadastro.png';
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import iconUsuarios from '../../assets/IconUsuarios.png';
import iconProjetos from '../../assets/IconProjetos.png';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../Stores/auth';

function Header() {

  const navigate = useNavigate();
  const usuarioAtual = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth)

  let home;
  if(useLocation().pathname == "/"){
    home = true;
  }else{
    home = false;
  }

  let nivel;
  if(usuarioAtual){
    nivel = usuarioAtual.usuario.nivel;
  }else{
    nivel = false;
  }

  const logout = () => {
    clearAuth();
    navigate("/login");
  }

  return (
    <div>
      <ContainerHeader>
        <LogoCPE src={logo} alt="logo" onClick={() => navigate('/')}></LogoCPE>
        <ContainerIcons>
          {home && nivel &&
            <ContainerAdmin>
            <IconProjetos src={iconProjetos} onClick={() => navigate('/gerenciar-projetos')}></IconProjetos>
            <IconUsuarios src={iconUsuarios} onClick={() => navigate('/gerenciar-usuarios')}></IconUsuarios>
          </ContainerAdmin>}
          {home &&
            <ContainerUsuarios>
            <IconEditar onClick={() => alert("...EDITAR PERFIL")}><FaRegEdit style={{ height: "100%", width: "100%" }}/></IconEditar>
            <Linha></Linha>
            <IconSair><IoLogOutOutline onClick={logout} style={{ height: "100%", width: "100%" }}/></IconSair>
          </ContainerUsuarios>}
        </ContainerIcons>
      </ContainerHeader>
    </div>
  );
}

export default Header;
