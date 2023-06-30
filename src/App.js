import Cadastrar from "./pages/Cadastrar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
let token = localStorage.getItem("token");



function App() {

  function ProtectedHome({ redirectTo }) {
    token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to={redirectTo} />;
  }

  function ProtectedLogin({ redirectTo }) {
    token = localStorage.getItem("token");
    return !token ? <Outlet /> : <Navigate to={redirectTo} />;
  }


  return (
    <Routes>
      <Route element={<ProtectedHome redirectTo="/" />}>
        <Route path="/home" element={<Home />} />
      </Route>

      <Route element={<ProtectedLogin redirectTo="/home" />}>

        <Route path="/cadastro" element={<Cadastrar />} />
        <Route path="">
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
