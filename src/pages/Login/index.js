import "./style.css";
import logo from "../../assets/logo.svg";
import Form from "../../components/formLogin";
import { Link } from 'react-router-dom';


function Login() {

    return (
        <>
            <div className="container-main">
                <div className="content-main">
                    <img src={logo} alt="logo" className='logo-dindin' />

                    <div className="container-content">
                        <div className="container-left">
                            <h1>
                                Controle suas <strong>finanças</strong>, sem planilha chata.
                            </h1>
                            <h2>
                                Organizar as suas finanças nunca foi tão fácil, com o DINDIN,
                                você tem tudo num único lugar e em um clique de distância.
                            </h2>

                            <Link to={'/cadastro'}>
                                <button className="btn-purple btn-cadastrar" >Cadastre-se</button>
                            </Link>

                        </div>

                        <Form />

                    </div>
                </div>
            </div>
        </>
    )
}


export default Login;