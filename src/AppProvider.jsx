<<<<<<< HEAD
import Routes from "./routes";
import GlobalStyles from "./styles/globalSytles";

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Routes></Routes>
    </div>
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Routes from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes></Routes>
    </>
>>>>>>> PaginaCadastro
  );
}

export default App;
