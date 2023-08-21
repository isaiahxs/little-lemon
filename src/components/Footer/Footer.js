import big_logo from '../../assets/images/big-logo.png';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer-section'>
            <section className='logo-section'>
                <img src={big_logo} className='big-logo' alt='Big Little Lemon Logo' />
            </section>
            <section className='first-footer-section'>
                {/* <img src={big_logo} className='big-logo' alt='Big Little Lemon Logo' /> */}

                <ul className='footer-options'>
                    <li className='footer-heading'>
                        Doormat Navigation
                    </li>
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
                        <a href='/order'>Order Online</a>
                    </li>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                </ul>
            </section>

            <section className='second-footer-section'>
                <ul className='footer-options'>
                    <li className='footer-heading'>
                        Contact
                    </li>
                    <li>
                        <a href='/address'>Address</a>
                    </li>
                    <li>
                        <a href='/phone-number'>Phone Number</a>
                    </li>
                    <li>
                        <a href='/email'>Email</a>
                    </li>
                </ul>
            </section>

            <section className='third-footer-section'>
                <ul className='footer-options'>
                    <li className='footer-heading'>
                        Social Media Links
                    </li>
                    <li>
                        <a href='/facebook'>Facebook</a>
                    </li>
                    <li>
                        <a href='/instagram'>Instagram</a>
                    </li>
                    <li>
                        <a href='/twitter'>Twitter</a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}