import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import "./style.css";

function Cadastrar() {

    return (
        <>
            <div className="container-main">
                <div className="content-main">
                    <img src={logo} alt="logo" className='logo-dindin' />

                    <div className="container-cadastro">
                        <form className="form-cadastro">
                            <h3>Cadastre-se</h3>

                            <div className="div-input">
                                <label>Nome</label>
                                <input
                                    type="text"
                                    name="name"
                                />
                            </div>

                            <div className="div-input">
                                <label>E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                />
                            </div>

                            <div className="div-input">
                                <label>Senha</label>
                                <input
                                    type="password"
                                    name="password"
                                />
                            </div>

                            <div className="div-input">
                                <label>Confirmar senha</label>
                                <input
                                    type="password"
                                    name="rpt-password"
                                />
                            </div>

                            <button className="btn-purple">Cadastrar</button>
                            <Link to={'/login'} className='link-login'>
                                Já tem cadastro? Clique aqui!
                            </Link>

                            {/* colocar span de erro aqui */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastrar; 