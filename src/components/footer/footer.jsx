import {
  Footer,
  DivFooterContacts,
  DivFooterContent,
  TitleLogo,
  Instagram,
  Facebook,
  Linkedin,
  FooterList,
  FooterLink,
} from "./stylefooter";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import LogoCadastro from "../../assets/LogoCadastro.png";

export default function FooterPrincipal() {
  return (
    <div>
      <Footer>
        <DivFooterContent>
          <DivFooterContacts>
            <img src={LogoCadastro} alt="LogoCadastro" />
          </DivFooterContacts>
          <FooterList>
            <li>
              <h3 style={{ fontSize: "30px", color: "yellow" }}>Membros</h3>
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
              <h3 style={{ fontSize: "30px", color: "yellow" }}>Tutores</h3>
            </li>
            <li>
              <FooterLink href="#">Vini</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Samuel</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Jose</FooterLink>
            </li>
          </FooterList>
        </DivFooterContent>
      </Footer>
    </div>
  );
}
