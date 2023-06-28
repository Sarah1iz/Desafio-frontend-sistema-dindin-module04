import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUsuario } from "../../utils/functionsLogin";


function FormLogin() {
    const [form, setForm] = useState({
        email: "",
        senha: "",
    });

    const navigate = useNavigate();
    const [textFeedBack, setTextFeedback] = useState("");

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [key]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.senha) {
            setTextFeedback("Informe todos os campos solicitados");

            return;
        }

        if (!form.email.includes("@")) {
            setTextFeedback("Informe um email válido");

            return;
        }
        await loginUsuario(navigate, form);
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="form-login">
                <h3>Login</h3>

                <div className="div-input">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="div-input">
                    <label htmlFor="senha" >Password</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={form.senha}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn-purple btn-login">Entrar</button>
                <span>{textFeedBack}</span>
            </form>
        </>
    );
}

export default FormLogin;