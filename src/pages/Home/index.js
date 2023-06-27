import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import sair from '../../assets/logout.svg';
import filtrar from '../../assets/icon_filter.svg';

//utilizar useState para abrir e fechar o modal

function Home() {
    return (
        <>
            <header>
                <img className='logo' src={logo} alt='logo' />

                <div className='container_menu'>
                    <img src={avatar} alt='logo' />
                    <h3 className='menu_nome'>Usuário</h3>

                    <Link to={'/login'} className='btn-logout'>
                        <img src={sair} alt='logout' />
                    </Link>
                </div>
            </header>

            <main className='container_principal'>
                <button className='btn_filtro'>
                    <img src={filtrar} alt='filtrar' />
                    Filtrar
                </button>

                <div className='container_painel'>
                    <div className='tabela_cabecalho'>
                        <p className='item_data'>Data</p>
                        <p className='item_dia'>Dia da Semana</p>
                        <p className='item_descricao'>Descrição</p>
                        <p className='item_categoria'>Categoria</p>
                        <p className='item_valor'>Valor</p>
                        <span className='icons'></span>
                    </div>

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
                </div>
            </main>
        </>
    );
}

export default Home;