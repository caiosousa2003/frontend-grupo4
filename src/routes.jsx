import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Cadastro from "./pages/Cadastro/Cadastro";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="cadastro" element={<Cadastro />} />
    </Route>
  )
);

export default function Routes(){
    return <RouterProvider router = {router}/>
}