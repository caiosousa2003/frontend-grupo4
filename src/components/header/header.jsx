import { LogoHeader, HeaderPrincipal, ReturnHeader } from './styleHeader';
import logo from '../../assets/LogoCadastro.png';
import x from '../../assets/ReturnCadastro.png';

function Header({ cadastro }) {
  return (
    <div>
      <HeaderPrincipal>
        <LogoHeader src={logo} alt="logo"></LogoHeader>
        {cadastro && <ReturnHeader src={x}></ReturnHeader>}
      </HeaderPrincipal>
    </div>
  );
}

export default Header;
