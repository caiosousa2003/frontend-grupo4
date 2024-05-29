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
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const DivFooterContacts = styled.div`
  margin-left: 150px;
  margin-top: ;
`;
export const TitleLogo = styled.h2``;
export const DivFooterSocial = styled.div`
  display: flex;
`;
export const FooterLink = styled.a`
  color: #f5f5f5;
  text-decoration: none;
  opacity: 1;
  transition: opacity 1s ease 0s;
  &:hover {
    opacity: 0.6;
    color: yellow;
  }
`;
export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
`;
