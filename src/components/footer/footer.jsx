import {
  Footer,
  DivFooterContacts,
  DivFooterContent,
  FooterList,
  FooterLink,
} from "./stylefooter";

import LogoCadastro from "../../assets/logoFooter.png";
export default function FooterPrincipal() {
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
          <li>
            <FooterLink href="https://github.com/ConradoFreitas">
              Conrado
            </FooterLink>
          </li>
        </FooterList>
        <FooterList>
          <li>
            <h3
              style={{
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
