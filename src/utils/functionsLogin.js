import api from "../service/api";

export function setItem(key, value) {
    localStorage.setItem(key, value);
}
export function getItem(key) {
    return localStorage.getItem(key);
}

export function removeItem(key) {
    localStorage.removeItem(key);
}


export async function loginUsuario(navigate, form) {
    try {
        const response = await api.post("/login", {
            ...form,
        });
        setItem("token", response.data.token);
        navigate("/home");
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}


export async function getUsuario(setUsuario) {

    const response = await api.get("/usuario", {
        headers: {
            Authorization: `Bearer ${getItem("token")}`,
        },
    });
    setUsuario(response.data.nome);

}


