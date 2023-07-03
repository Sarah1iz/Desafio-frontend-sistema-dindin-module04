import deletarIcon from '../../assets/deletar.svg';
import editarIcon from '../../assets/editar.svg';
import './style.css';
import Modal from '../Modal';
import { useState } from 'react';
import { format } from "date-fns";


function ItemTabela({
    keyTransacao,
    data,
    descricao,
    categoria,
    categoria_id,
    valor,
    tipoTransacao,
    setRegistro,
    setRegistroResumo,
    corButton,
    setCorButton,
    excluir,
}) {

    const dataRegistro = new Date(data).toLocaleDateString(undefined, { day: 'numeric', month: 'numeric', year: 'numeric', timeZone: 'UTC' });
    const diaSemana = new Date(data).getDay();
    const semana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];


    const [modalState, setModalState] = useState(false);

    const [form, setForm] = useState({
        tipo: "entrada",
        valor: "",
        categoria_id: "",
        data: "",
        descricao: "",
    });

    function handleModal() {

        if (!modalState) {
            setModalState(true);
            if (tipoTransacao === 'entrada') {
                setCorButton(true)
            } else {
                setCorButton(false)
            }
            const date = format(new Date(data).setHours(+24), "yyyy-MM-dd");
            setForm({
                tipo: tipoTransacao,
                descricao: descricao,
                valor: valor / 100,
                data: date,
                categoria_id: categoria_id,
            });
            return;
        }
        setModalState(false);
    }


    return (
        <>
            <div className='item_tabela' id={keyTransacao} >
                <p className='coluna_data'>{dataRegistro}</p>
                <p className='coluna_dia'>{semana[diaSemana]}</p>
                <p className='coluna_descricao'>{descricao}</p>
                <p className='coluna_categoria'>{categoria}</p>
                <p className={`coluna_valor ${tipoTransacao}`}>R$<span>{(valor / 100).toFixed(2)}</span></p>

                <div className='coluna_funcs'>
                    <button className='btn-editar' onClick={handleModal} >
                        <img src={editarIcon} alt='editar' />
                    </button>
                    <button className='btn-deletar' onClick={excluir} >
                        <img src={deletarIcon} alt='excluir' />
                    </button>
                </div>
            </div>


            <Modal
                state={modalState}
                handleModal={handleModal}
                form={form}
                setForm={setForm}
                setRegistro={setRegistro}
                current={keyTransacao}
                setRegistroResumo={setRegistroResumo}
                setCorButton={setCorButton}
                corButton={corButton}
            />

        </>
    );
}

export default ItemTabela;