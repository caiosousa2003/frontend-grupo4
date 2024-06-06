import { Outlet } from "react-router-dom"
import { Container } from "./styleAppLayout"
import Header from "../header/header";
import FooterPrincipal from "../footer/footer";


export default function AppLayout() {
    return (
        <Container>
            <Header />
            <Outlet />
            <FooterPrincipal />
        </Container>
    );
}