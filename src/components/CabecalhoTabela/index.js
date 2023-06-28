import './style.css';

function CabecalhoTabela() {
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
        </div>
    );
}

export default CabecalhoTabela;