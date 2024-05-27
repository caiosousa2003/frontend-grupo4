
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="login" element={<Login/>}/>
      <Route path="/" element={<Home />} />
      <Route path="editar-usuario" element={<EditarUsuario/>}/>
      <Route path="editar-projetos" element={<EditarProjetos/>}/>
    </Route>
  )
);

export default function Routes(){
    return <RouterProvider router = {router}/>
}

