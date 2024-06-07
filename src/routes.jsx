import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';

import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import EditarUsuario from './pages/EditarUsuario/EditarUsuario';
import Login from './pages/Login/Login';
import EditarProjetos from './pages/EditarProjetos/EditarProjetos';
import GerenciarProjetos from './pages/GerenciarProjetos/GerenciaProjetos';
import GerenciarUsuarios from './pages/GerenciarUsuarios/GerenciarUsuarios';
import AppLayout from './components/appLayout/AppLayout';
import useAuthStore from './Stores/auth';

function RotasPrivadas() {
  const token = useAuthStore((state) => state.token);

  if (token) return <Outlet />;
  
  return <Navigate to="/login" replace />;
}

function RotasAdmin() {
  const usuario = useAuthStore((state) => state.usuario);

  if (usuario.usuario.nivel) return <Outlet />;
  
  return <Navigate to="/" replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<AppLayout />}>
        <Route element={<RotasPrivadas />}>
          <Route index element={<Home />} />
          <Route element={<RotasAdmin/>}>
            <Route path="editar-usuarios/:id" element={<EditarUsuario />} />
            <Route path="editar-projetos" element={<EditarProjetos />} />
            <Route path="gerenciar-projetos" element={<GerenciarProjetos />} />
            <Route path="gerenciar-usuarios" element={<GerenciarUsuarios />} />
          </Route>
        </Route>
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Route>,
  ),
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
