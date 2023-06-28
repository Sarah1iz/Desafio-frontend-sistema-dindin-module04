import { useState } from "react";
import './style.css';
import Filtro from '../../components/Filtro';
import CabecalhoTabela from '../../components/CabecalhoTabela';
import Resumo from '../../components/Resumo';
//import Cabecalho from '../../components/Cabecalho';


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
            {/* <Cabecalho /> */}

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