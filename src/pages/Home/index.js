import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import Filtro from '../../components/Filtro';
import Tabela from '../../components/Tabela';
import Resumo from '../../components/Resumo';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import sair from '../../assets/logout.svg';

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
                <Filtro />
                <div className='dashboard'>
                    <Tabela />
                    <Resumo />
                </div>

            </main>
        </>
    );
}

export default Home;