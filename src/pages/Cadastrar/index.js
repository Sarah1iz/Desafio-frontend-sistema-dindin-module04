import Logo from "../../assets/logo.svg";
import Form from "../../components/formCadastro";
import "./style.css";

function Cadastrar() {

    return (
        <>
            <div className="container-main">
                <div className="header">
                    <img src={Logo} alt="Logotipo" />
                </div>

                <div className="form">
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Cadastrar; 