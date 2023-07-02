
import { useState, useEffect } from "react";
import { removeItem, getUsuario } from "../../utils/functionsLogin";
import { useNavigate } from "react-router-dom";

import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import sair from '../../assets/logout.svg';
import './style.css';

function Cabecalho() {
    const [usuario, setUsuario] = useState("");
    const navigate = useNavigate();

    useEffect(() => {

        getUsuario(setUsuario);

    }, []);


    function handleLogout() {
        removeItem("token");
        navigate("/login");
    }


    return (
        <div className='cabecalho'>
            <img className='logo' src={logo} alt='logo' />

            <div className='container_menu'>
                <img src={avatar} alt='logo' />
                <h3 className='menu_nome'>{usuario}</h3>


                <img src={sair} alt='logout' className="sair" onClick={handleLogout} />

            </div>
        </div>
    );
}


export default Cabecalho;
