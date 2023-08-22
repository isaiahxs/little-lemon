import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import './Nav.css';

export default function Nav() {
    return (
        <nav className='nav-bar'>
            <ul className='nav-options'>
                <Link to='/'>
                    <img src={logo} className='lemon-logo' alt='Little Lemon Logo' />
                </Link>

                <li>
                    <a className='large-hidden' href='/'>Home</a>
                </li>

                <li>
                    <a className='medium-hidden' href='/work-in-progress'>About</a>
                </li>

                <li>
                    <a className='small-hidden' href='/work-in-progress'>Menu</a>
                </li>

                <li>
                    <a href='/booking'>Reservations</a>
                </li>

                <li>
                    <a href='/work-in-progress'>Order</a>
                </li>

                <li>
                    <a className='small-hidden' href='/work-in-progress'>Online</a>
                </li>

                <li>
                    <a href='/work-in-progress'>Login</a>
                </li>
            </ul>
        </nav>
    )
}