import api from "../services/api";


export function setItem(key, value) {
    localStorage.setItem(key, value);
}


export function getItem(key) {
    return localStorage.getItem(key);
}


export function removeItem(key) {
    localStorage.removeItem(key);
}


export async function getTransaction(setTransacao, setresume, setUsuario) {
    try {
        const response = await api.get("/transacao", {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await refreshResume(setresume);

        return setTransacao(response.data);
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}



export async function deleteTransaction(id, setTransacao, setresume) {
    try {
        await api.delete(`/transacao/${id}`, {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await getTransaction(setTransacao, setresume);
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}



export async function postTransaction(data, setTransacao, setresume) {
    try {
        await api.post("/transacao", data, {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await getTransaction(setTransacao, setresume);
    } catch (error) {
        alert(error.response.data.mensagem);
    }
}



export async function putTransaction(data, setTransacao, current, setresume) {
    try {
        await api.put(`/transacao/${current}`, data, {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        await getTransaction(setTransacao, setresume);
    } catch (error) {
        return alert(error.response.data.mensagem);
    }
}



export async function getCategorias(setCategorys) {
    try {
        const response = await api.get("/categoria", {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        setCategorys(response.data);
    } catch (error) {
        return alert(error.response.data.mensagem);
    }
}



export async function refreshResume(setTransactionsResume) {
    try {
        const response = await api.get("/transacao/extrato", {
            headers: {
                Authorization: `Bearer ${getItem("token")}`,
            },
        });
        setTransactionsResume({
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

    return `${String(newDate.getDate() + 1).padStart(2, 0)}/${String(
        newDate.getMonth() + 1
    ).padStart(2, 0)}/${newDate.getFullYear()}`;
}