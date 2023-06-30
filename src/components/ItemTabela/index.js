import deletarIcon from '../../assets/deletar.svg';
import editarIcon from '../../assets/editar.svg';
import './style.css';

function ItemTabela({
    keyTransacao,
    data,
    descricao,
    categoria,
    valor,
    tipoTransacao,
    editar,
    excluir,
}) {

    const dataRegistro = new Date(data).toLocaleDateString(undefined, { day: 'numeric', month: 'numeric', year: 'numeric' });
    const diaSemana = new Date(data).getDay();
    const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];


    return (
        <>
            <div className='item_tabela' id={keyTransacao} >
                <p className='coluna_data'>{dataRegistro}</p>
                <p className='coluna_dia'>{semana[diaSemana]}</p>
                <p className='coluna_descricao'>{descricao}</p>
                <p className='coluna_categoria'>{categoria}</p>
                <p className={`coluna_valor ${tipoTransacao}`}>R$<span>{(valor / 100).toFixed(2)}</span></p>

                <div className='coluna_funcs'>
                    <img src={editarIcon} alt='editar' onClick={editar} />
                    <img src={deletarIcon} alt='excluir' onClick={excluir} />
                </div>
            </div>

        </>
    );
}

export default ItemTabela;