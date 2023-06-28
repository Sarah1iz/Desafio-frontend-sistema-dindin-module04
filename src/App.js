import Cadastrar from "./pages/Cadastrar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";



function App() {

  //criar rotas protegidas


  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastrar />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
