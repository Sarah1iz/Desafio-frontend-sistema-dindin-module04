import './style.css';
import Filtro from '../../components/Filtro';
import Tabela from '../../components/Tabela';
import Resumo from '../../components/Resumo';
import Cabecalho from "../../components/Cabecalho";
import Modal from "../../components/Modal";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { getRegistro } from "../../utils/functionsDash";


function Home() {
    const [registro, setRegistro] = useState([]);
    const [modalState, setModalState] = useState(false);
    const [current, setCurrent] = useState(null);
    const [corButton, setCorButton] = useState(false);

    const [form, setForm] = useState({
        tipo: "entrada",
        valor: "",
        categoria_id: "",
        data: "",
        descricao: "",
    });


    const [valorResumo, setRegistroResumo] = useState({
        entrada: 0,
        saida: 0,
        saldo: 0,
    });

    useEffect(() => {
        getRegistro(setRegistro, setRegistroResumo);

    }, []);

    function handleModal(registro) {
        if (!modalState) {
            setModalState(true);
            if (registro.tipo === "entrada") {
                setCorButton(true);
            }
            if (registro.id) {
                const data = format(new Date(registro.data).setHours(+24), "yyyy-MM-dd");
                const valor = registro.valor;
                setForm({ ...registro, data, valor });
                setCurrent(registro.id);

                return;
            }
            setCurrent(null);
            setForm({
                tipo: "saida",
                descricao: "",
                valor: "",
                data: "",
                categoria_id: "",
            });
            return;
        }
        setModalState(false);
        setCorButton(false);
    }

    return (
        <>
            <Cabecalho />

            <Modal
                state={modalState}
                handleModal={handleModal}
                form={form}
                setForm={setForm}
                setRegistro={setRegistro}
                current={current}
                setRegistroResumo={setRegistroResumo}
                setCorButton={setCorButton}
                corButton={corButton}
            />

            <main className='container_principal'>
                <Filtro />
                <div className='dashboard'>
                    <Tabela
                        registro={registro}
                    />
                    <Resumo
                        stateModal={handleModal}
                        valorResumo={valorResumo}
                    />
                </div>

            </main>
        </>
    );
}

export default Home;