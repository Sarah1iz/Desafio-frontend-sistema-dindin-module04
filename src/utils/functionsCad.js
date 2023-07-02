import api from "../service/api";

export async function cadastroUsuario(setTextFeedback, navigate, data) {

    await api.post("/usuario", data);
    setTextFeedback("Usuario cadastrado!");
    navigate("/login");

}