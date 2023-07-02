import api from "../service/api";
import { getItem } from "./functionsLogin";

export async function getRegistro(setRegistro, setResumo) {
    try {
        const response = await api.get("/transacao", {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await atualizarResumo(setResumo);

        return setRegistro(response.data);
    } catch (error) {

    }
}



export async function deleteRegistro(id, setRegistro, setResumo) {
    try {
        await api.delete(`/transacao/${id}`, {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await getRegistro(setRegistro, setResumo);

        window.location.href = window.location.href;
    } catch (error) {

    }
}



export async function postRegistro(data, setRegistro, setResumo) {
    try {
        await api.post("/transacao", data, {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await getRegistro(setRegistro, setResumo);
    } catch (error) {


    }
}



export async function putRegistro(data, setRegistro, current, setResumo) {
    try {
        await api.put(`/transacao/${current}`, data, {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await getRegistro(setRegistro, setResumo);
    } catch (error) {

    }
}



export async function getCategorias(setCategorias) {
    try {
        const response = await api.get("/categoria", {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        setCategorias(response.data);
    } catch (error) {

    }
}


export async function atualizarResumo(setValorResumo) {
    try {
        const response = await api.get("/transacao/extrato", {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });

        setValorResumo({
            entrada: response.data.entrada,
            saida: response.data.saida,
            saldo: response.data.entrada - response.data.saida,
        });

    } catch (error) {

    }
}


