import { styled } from "styled-components";

export const Footer = styled.footer`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
  font-family: "Inter", sans-serif;
  letter-spacing: 1px;
  width: 100%;
  color: #f5f5f5;
`;
export const DivFooterContent = styled.div`
  background-color: #171717;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem 3.5rem;
  @media screen and (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 3rem 2rem;
  }
`;
export const DivFooterContacts = styled.div``;
export const TitleLogo = styled.h2`
  margin-bottom: 0.75rem;
  font-size: 50px;
  color: yellow;
`;
export const DivFooterSocial = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
`;
export const FooterLink = styled.a`
  color: #f5f5f5;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
`;
export const Instagram = styled.a`
  background-color: linear-gradient(#7f37c9, #ff2992, #ff9807);
`;
export const Linkedin = styled.a``;
export const Facebook = styled.a``;
export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
`;
