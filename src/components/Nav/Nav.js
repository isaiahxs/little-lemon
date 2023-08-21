import logo from '../../assets/images/logo.png';
import './Nav.css';

export default function Nav() {
    return (
        <nav className='nav-bar'>
            {/* <img src={logo} alt='Little Lemon Logo' /> */}
            <ul className='nav-options'>
                <img src={logo} className='lemon-logo' alt='Little Lemon Logo' />
                <li>
                    <a href='/home'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/menu'>Menu</a>
                </li>
                <li>
                    <a href='/reservations'>Reservations</a>
                </li>
                <li>
                    <a href='/order'>Order</a>
                </li>
                <li>
                    <a href='/online'>Online</a>
                </li>
                <li>
                    <a href='/login'>Login</a>
                </li>
            </ul>
        </nav>
    )
}