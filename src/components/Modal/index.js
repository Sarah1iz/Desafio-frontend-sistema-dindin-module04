import "./style.css";
import iconClose from "../../assets/fechar.png";
import { useEffect, useState } from "react";
import { getCategorias, postRegistro, putRegistro } from '../../utils/functionsDash';



function Modal({
    state,
    handleModal,
    form,
    setForm,
    setRegistro,
    current,
    setRegistroResumo,
    setCorButton,
    corButton,
}) {
    const [categoriaRegistro, setCategoriaRegistro] = useState([]);
    useEffect(() => {
        getCategorias(setCategoriaRegistro);
    }, []);

    const handleChange = (e) => {
        setForm((prevForm) => ({
            ...prevForm,
            [e.target.name]: e.target.value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();

        let data = {
            tipo: form.tipo,
            valor: form.valor * 100,
            categoria_id: form.categoria_id,
            data: form.data,
            descricao: form.descricao,
        };


        if (current) {
            await putRegistro(data, setRegistro, current, setRegistroResumo);
        } else {
            await postRegistro(data, setRegistro, setRegistroResumo);
        }

        setForm("");
        setCorButton(false);
        handleModal();

    }

    return (
        <>
            {state && (
                // backgroundmodal
                <div className="background_modal">
                    {/* container_modal */}
                    <div className="container_modal">
                        {/* containertitulo */}
                        <div className="top_modal">
                            {!current ? (
                                <h1 className="title_modal">Adicionar Registro</h1>
                            ) : (
                                <h1 className="title_modal">Editar Registro</h1>
                            )}
                            <img
                                src={iconClose}
                                alt="Fechar Modal"
                                className="iconClose"
                                onClick={() => handleModal()}
                            />
                        </div>

                        {/* container_modalidade */}
                        <div className="modalidade_modal">
                            <input
                                id={corButton ? "btn_entrada" : ""}
                                className="modalidade"
                                type="button"
                                name="tipo"
                                value="entrada"
                                onClick={(e) => {
                                    setCorButton(true);
                                    handleChange(e);
                                }}
                            />
                            <input
                                id={corButton ? "" : "btn_saida"}
                                type="button"
                                className="modalidade"
                                name="tipo"
                                value="saida"
                                onClick={(e) => {
                                    setCorButton(false);
                                    handleChange(e);
                                }}
                            />
                        </div>


                        <form method="post" onSubmit={handleSubmit}>

                            <div className="div_input">
                                <label htmlFor="valor">Valor</label>
                                <input
                                    type="number"
                                    id="valor"
                                    name="valor"
                                    value={form.valor}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="div_input">
                                <label htmlFor="categoria">Categoria</label>
                                <select
                                    id="categoria"
                                    name="categoria_id"
                                    value={form.categoria_id}
                                    onChange={handleChange}
                                >
                                    <option value=""></option>
                                    {categoriaRegistro.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.descricao}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="div_input">
                                <label htmlFor="data">Data</label>
                                <input
                                    id="data"
                                    type="date"
                                    name="data"
                                    value={form.data}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="div_input">
                                <label htmlFor="descricao">Descrição</label>
                                <input
                                    id="descricao"
                                    type="text"
                                    name="descricao"
                                    value={form.descricao}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="btn_confirmar">Confirmar</button>
                        </form>
                    </div>
                </div>

            )}
        </>
    );
}
export default Modal;
