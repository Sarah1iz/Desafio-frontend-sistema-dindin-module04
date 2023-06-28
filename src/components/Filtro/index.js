import './style.css';
import filtrar from '../../assets/icon_filter.svg';


function Filtro() {
    return (
        <button className='btn_filtro'>
            <img src={filtrar} alt='filtrar' />
            Filtrar
        </button>

    )

}

export default Filtro;