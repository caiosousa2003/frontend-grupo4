import { Outlet } from "react-router-dom"
import { Container, ContainerConteudo } from "./styleAppLayout"
import Header from "../header/header";
import FooterPrincipal from "../footer/footer";


export default function AppLayout() {
    return (
        <Container>
            <ContainerConteudo>
                <Header />
                <Outlet />
            </ContainerConteudo>
            <FooterPrincipal />
        </Container>
    );
}