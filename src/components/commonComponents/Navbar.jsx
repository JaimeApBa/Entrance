import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth';

export const Navbar = () => {

    const { logout } = useContext(AuthContext);

    const startLogout = () => {
        localStorage.removeItem('token');
        logout();
    }

    return (
        <nav>
            <button className='bt bt-check-in'>Fichar</button>
            <ul className='navList-1'>
                <li className='navLink bt-home'>
                    <Link to='/'>
                        <span className="material-symbols-outlined">home</span>
                    </Link>
                </li>
                <li className='navLink'>
                    <Link to='/historic'>Historial</Link>
                </li>
                <li className='navLink'>
                    <Link to='/calendar'>Calendario</Link>
                    <span className='notification vacation'>1</span>
                </li>
            </ul>
            <ul className='navList-2'>
                <li className='navLink'>
                    <Link to='/incidents'>Incidencias</Link>
                    <span className='notification incident'>1</span>
                </li>
                <li className='navLink logout' onClick={ startLogout }>
                    <span className="material-symbols-outlined">logout</span>
                </li>
            </ul>
        </nav>
    )
}
