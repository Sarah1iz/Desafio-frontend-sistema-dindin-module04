import logo from "../../assets/Logo.png";
import "./style.css";

function Cadastrar() {

    return (
        <>
            <div className="container-main">
                <div className="content-main">
                    <img src={logo} alt="logo" />

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
                            <span>Já tem cadastro? Clique aqui!</span>

                            {/* colocar span de erro aqui */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastrar; 