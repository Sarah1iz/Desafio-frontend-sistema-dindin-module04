import './style.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import sair from '../../assets/logout.svg';
import filtrar from '../../assets/icon_filter.svg';

function Home() {
    return (
        <>
            <header>
                <img className='logo' src={logo} alt='logo' />

                <div className='container_menu'>
                    <img src={avatar} alt='logo' />
                    <h3 className='menu_nome'>Usuário</h3>
                    <img src={sair} alt='logout' />
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



                    {/* resumo */}
                </div>
            </main>
        </>
    );
}

export default Home;