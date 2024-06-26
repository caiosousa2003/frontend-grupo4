import {
  Footer,
  DivFooterContacts,
  DivFooterContent,
  FooterList,
  FooterLink,
} from "./styleFooter";

import LogoCadastro from "../../assets/logoFooter.png";
import { useLocation } from "react-router-dom";

export default function FooterPrincipal() {
  const rota = useLocation().pathname;
  if (rota == "/login" || rota == "/cadastro") return;

  return (
    <Footer>
      <DivFooterContent>
        <DivFooterContacts>
          <img
            style={{ width: "200px", height: "200px" }}
            src={LogoCadastro}
            alt="LogoCadastro"
          />
        </DivFooterContacts>
        <FooterList>
          <li>
            <h3
              style={{
                textShadow: "2px 2px 2px rgba(255, 249, 79, 0.63)",
                fontSize: "30px",
                color: "white",
              }}
            >
              Membros
            </h3>
          </li>
          <li>
            <FooterLink href="https://github.com/matheusmadeira22">
              Matheus
            </FooterLink>
          </li>
          <li>
            <FooterLink href="https://github.com/caiosousa2003">
              Caio
            </FooterLink>
          </li>
          <li>
            <FooterLink href="https://github.com/otavioAugustoRodrigues">
              Otávio
            </FooterLink>
          </li>
        </FooterList>
        <FooterList>
          <li>
            <h3
              style={{
                textShadow: "2px 2px 2px rgba(255, 249, 79, 0.63)",
                fontSize: "30px",
                color: "white",
              }}
            >
              Tutores
            </h3>
          </li>
          <li>
            <FooterLink href="#">Jose</FooterLink>
          </li>
          <li>
            <FooterLink href="#">Samuel</FooterLink>
          </li>
          <li>
            <FooterLink href="#">Vinicius</FooterLink>
          </li>
        </FooterList>
      </DivFooterContent>
    </Footer>
  );
}
