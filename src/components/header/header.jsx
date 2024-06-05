/* eslint-disable react/prop-types */
import { LogoHeader, HeaderPrincipal, ReturnHeader } from "./styleHeader";
import logo from "../../assets/LogoCadastro.png";
import x from "../../assets/ReturnCadastro.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Header({ cadastro }) {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderPrincipal>
        <Link to="/">
          <LogoHeader src={logo} alt="logo" />
        </Link>
        {cadastro && (
          <ReturnHeader onClick={() => navigate(-1)} src={x}></ReturnHeader>
        )}
      </HeaderPrincipal>
    </div>
  );
}

export default Header;
