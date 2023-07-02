import './style.css';
import Item from '../ItemTabela';
import { deleteRegistro } from '../../utils/functionsDash';

function Tabela({ registro, getRegistro, atualizarResumo, setRegistro, setRegistroResumo, corButton, setCorButton }) {

    return (
        <div className='container_painel'>
            <div className='tabela_cabecalho'>
                <p className='item_data'>Data</p>
                <p className='item_dia'>Dia da Semana</p>
                <p className='item_descricao'>Descrição</p>
                <p className='item_categoria'>Categoria</p>
                <p className='item_valor'>Valor</p>
                <span className='icons'></span>
            </div>

            {registro.map(item => {
                return (
                    <Item
                        key={item.id}
                        keyTransacao={item.id}
                        tipoTransacao={item.tipo}
                        descricao={item.descricao}
                        valor={item.valor}
                        data={item.data}
                        categoria={item.categoria_nome}
                        categoria_id={item.categoria_id}
                        setRegistro={setRegistro}
                        setRegistroResumo={setRegistroResumo}
                        corButton={corButton}
                        setCorButton={setCorButton}
                        excluir={() => deleteRegistro(item.id, getRegistro, atualizarResumo)}
                    />
                );

            })}

        </div>


    );
}

export default Tabela;


