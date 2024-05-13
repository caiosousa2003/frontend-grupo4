import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="/" element={<Home />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
