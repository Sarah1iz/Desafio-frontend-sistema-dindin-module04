import './style.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import sair from '../../assets/logout.svg';

function Home() {
    return (
        <>
            <header className='header'>
                <img className='logo' src={logo} alt='logo' />

                <div className='container__menu'>
                    <img src={avatar} alt='logo' />
                    <h3 className='menu_nome'>Usuário</h3>
                    <img src={sair} alt='logo' />
                </div>
            </header>
        </>
    );
}

export default Home;