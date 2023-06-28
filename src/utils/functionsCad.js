import api from "../service/api";

export async function cadastroUsuario(setTextSpan, navigate, data) {
    try {
        await api.post("/usuario", data);
        setTextSpan("Usuario cadastrado!");
        navigate("/signIn");
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}