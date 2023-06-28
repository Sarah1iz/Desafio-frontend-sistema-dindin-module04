import api from "../service/api";

export async function cadastroUsuario(setTextFeedback, navigate, data) {
    try {
        await api.post("/usuario", data);
        setTextFeedback("Usuario cadastrado!");
        navigate("/login");
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}