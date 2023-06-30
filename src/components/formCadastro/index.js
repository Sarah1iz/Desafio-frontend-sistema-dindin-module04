import "./style.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { cadastroUsuario } from '../../utils/functionsCad';

function FormCadastro() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        senha: "",
        verificarsenha: "",
    });

    const navigate = useNavigate();
    const [textFeedback, setTextFeedback] = useState("");

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [key]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!(form.name || form.email || form.senha || form.verificarsenha)) {
            setTextFeedback("Todos os campos devem ser preenchidos");

            return;
        }

        if (!form.email.includes("@")) {
            setTextFeedback("Informe um email válido");

            return;
        }

        if (form.senha !== form.verificarsenha) {
            setTextFeedback("Senhas não conferem");

            return;
        }

        let data = {
            nome: form.name,
            email: form.email,
            senha: form.senha,
        };
        await cadastroUsuario(setTextFeedback, navigate, data);
    };

    return (
        <>
            <div className="container-cadastro">
                <form onSubmit={handleSubmit} className="form-cadastro">
                    <h3>Cadastre-se</h3>

                    <div className="div-input">
                        <label>Nome</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="div-input">
                        <label>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="div-input">
                        <label>Senha</label>
                        <input
                            type="password"
                            name="senha"
                            id="senha"
                            value={form.senha}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="div-input">
                        <label>Confirmação de senha</label>
                        <input
                            type="password"
                            name="verificarsenha"
                            id="verificarsenha"
                            value={form.verificarsenha}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="btn-purple btn-cadastro">Cadastrar</button>
                    <Link to={'/login'} className='link-login'>
                        Já tem cadastro? Clique aqui!
                    </Link>
                    <span>{textFeedback}</span>
                </form>
            </div>
        </>
    );
}

export default FormCadastro;