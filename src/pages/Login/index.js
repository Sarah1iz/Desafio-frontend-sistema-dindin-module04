import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import "./style.css";


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

                        <form className="form-login">
                            <h3>Login</h3>

                            <div className="div-input">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"

                                />
                            </div>

                            <div className="div-input">
                                <label htmlFor="senha" >Password</label>
                                <input
                                    type="password"
                                    name="senha"
                                    id="senha"

                                />
                            </div>


                            <button type="submit" className="btn-purple btn-login">Entrar</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Login;