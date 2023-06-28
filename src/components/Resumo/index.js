import './style.css';


function Resumo() {
    return (
        <div className='container_resumo'>
            <div className='content_resumo'>
                <h2 className='resumo_titulo'>Resumo</h2>

                <div className='container_transacoes'>
                    <div className='entradas'>
                        <p className='transacoes_titulo'>Entradas</p>
                        <p className='transacoes_entradas'>R$<span>valor</span></p>
                    </div>

                    <div className='saidas'>
                        <p className='transacoes_titulo'>Saídas</p>
                        <p className='transacoes_saidas'>R$<span>valor</span></p>
                    </div>

                    <div className='resumo_saldo'>
                        <h3 className='saldo_titulo'>Saldo</h3>
                        <p className='saldo'>R$<span>valor</span></p>
                    </div>
                </div>
            </div>

            <button className="btn-purple btn-registro">Adicionar Registro</button>

        </div>
    );
}


export default Resumo;