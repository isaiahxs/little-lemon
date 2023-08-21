import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';
import './Nav.css';

export default function Nav() {
    return (
        <nav className='nav-bar'>
            {/* <img src={logo} alt='Little Lemon Logo' /> */}
            <ul className='nav-options'>
                <Link to='/'>
                    <img src={logo} className='lemon-logo' alt='Little Lemon Logo' />
                </Link>

                <li>
                    <Link to='/'>
                        <a href='/home'>Home</a>
                    </Link>
                </li>

                <li>
                    <Link to='/work-in-progress'>
                        <a href='/about'>About</a>
                    </Link>
                </li>

                <li>
                    <Link to='/work-in-progress'>
                        <a href='/menu'>Menu</a>
                    </Link>
                </li>

                <li>
                    <Link to='/booking'>
                        <a href='/reservations'>Reservations</a>
                    </Link>
                </li>

                <li>
                    <Link to='/work-in-progress'>
                        <a href='/order'>Order</a>
                    </Link>
                </li>

                <li>
                    <Link to='/work-in-progress'>
                        <a href='/online'>Online</a>
                    </Link>
                </li>

                <li>
                    <Link to='/work-in-progress'>
                        <a href='/login'>Login</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}