
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home";
import EditarUsuario from "./pages/EditarUsuario/EditarUsuario";
import Login from "./pages/Login/Login";
import EditarProjetos from "./pages/EditarProjetos/EditarProjetos";
import GerenciarProjetos from "./pages/GerenciarProjetos/GerenciaProjetos";
import GerenciarUsuarios from "./pages/GerenciarUsuarios/GerenciarUsuarios";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="login" element={<Login/>}/>
      <Route path="/" element={<Home />} />
      <Route path="editar-usuario" element={<EditarUsuario/>}/>
      <Route path="editar-projetos" element={<EditarProjetos/>}/>
      <Route path="gerenciar-projetos" element={<GerenciarProjetos/>}/>
      <Route path="gerenciar-usuarios" element={<GerenciarUsuarios/>}/>
    </Route>
  )
);

export default function Routes(){
    return <RouterProvider router = {router}/>
}

