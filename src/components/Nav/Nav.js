import './Nav.css';

export default function Nav() {
    return (
        <nav className='nav-bar'>
            <div className='nav-options'>
                <button>Home</button>
                <button>About</button>
                <button>Menu</button>
                <button>Reservations</button>
                <button>Order</button>
                <button>Online</button>
                <button>Login</button>
            </div>
            {/* <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order</li>
                <li>Online</li>
                <li>Login</li>
            </ul> */}
        </nav>
    )
}