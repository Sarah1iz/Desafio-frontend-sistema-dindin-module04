import { Link } from 'react-router-dom';
import { useState } from "react";
import './style.css';
import Filtro from '../../components/Filtro';
import CabecalhoTabela from '../../components/CabecalhoTabela';
import Resumo from '../../components/Resumo';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import sair from '../../assets/logout.svg';

//import { getTransacao } from '../../utils/functionsDash';

function Home() {
    const [modalState, setModalState] = useState(false)

    const [valorResumo, setValorResumo] = useState({
        entrada: 0,
        saida: 0,
        saldo: 0,
    });

    function handleModal(transacoes) {
        setModalState(false);
    }

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
                    <CabecalhoTabela />
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