import api from "../services/api";


export async function loginUser(navigate, form) {
    try {
        const response = await api.post("/login", {
            ...form,
        });
        setItem("token", response.data.token);
        navigate("/main");
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}


export async function getUsuario(setUsuario) {
    try {
        const response = await api.get("/usuario", {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        setUsuario(response.data.nome);
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}
