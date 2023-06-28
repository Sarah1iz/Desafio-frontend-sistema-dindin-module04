import api from "../service/api";
import { getItem } from "./functionsLogin";

export async function getTransacao(setTransacao, setResumo) {
    try {
        const response = await api.get("/transacao", {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await atualizarResumo(setResumo);

        return setTransacao(response.data);
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}



export async function deleteTransacao(id, setTransacao, setResumo) {
    try {
        await api.delete(`/transacao/${id}`, {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await getTransacao(setTransacao, setResumo);
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}



export async function postTransacao(data, setTransacao, setResumo) {
    try {
        await api.post("/transacao", data, {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await getTransacao(setTransacao, setResumo);
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}



export async function putTransacao(data, setTransacao, current, setResumo) {
    try {
        await api.put(`/transacao/${current}`, data, {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await getTransacao(setTransacao, setResumo);
    } catch (error) {
        return alert(error.response.data.mensagem);
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
        return alert(error.response.data.mensagem);
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
        return alert(error.response.data.mensagem);
    }
}


export let dia = 0;
export function date(data) {
    const newDate = new Date(data);
    const dias = [
        "Segunda-Feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
        "Domingo",
    ];
    dia = dias[newDate.getDay()];

    const dataFormatada = `${String(newDate.getDate() + 1).padStart(2, 0)}/${String(newDate.getMonth() + 1).padStart(2, 0)}/${newDate.getFullYear()}`;

    return dataFormatada;
}