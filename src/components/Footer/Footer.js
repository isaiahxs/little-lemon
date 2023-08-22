import map_pin from '../../assets/images/map-pin.svg';
import phone from '../../assets/images/phone-icon.svg';
import email from '../../assets/images/mail-icon.svg';

import big_logo from '../../assets/images/big-logo.png';
import facebook from '../../assets/images/facebook-logo.svg';
import instagram from '../../assets/images/instagram-logo.svg';
import twitter from '../../assets/images/twitter-logo.svg';
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
                        <a href='/address'>
                            <div className='footer-icon-container'>
                                <img src={map_pin} className='footer-icon' alt='Map Pin Icon' />
                                <p className='footer-icon-description'>678 Pisa Ave, Chicago, IL 60611</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='/phone-number'>
                            <div className='footer-icon-container'>
                                <img src={phone} className='footer-icon' alt='Phone Icon' />
                                <p className='footer-icon-description'>(312) 555-5555</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='/email'>
                            <div className='footer-icon-container'>
                                <img src={email} className='footer-icon' alt='Email Icon' />
                                <p className='footer-icon-description'>contact@lemon.com</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>

            <section className='third-footer-section'>
                <ul className='footer-options'>
                    <li className='footer-heading'>
                        Social Media Links
                    </li>
                    <li>
                        <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                            <div className='footer-icon-container'>
                                <img src={facebook} className='footer-icon' alt='Facebook Logo' />
                                <p className='footer-icon-description'>Facebook</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                            <div className='footer-icon-container'>
                                <img src={instagram} className='footer-icon' alt='Instagram Logo' />
                                <p className='footer-icon-description'>Instagram</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer'>
                            <div className='footer-icon-container'>
                                <img src={twitter} className='footer-icon' alt='Twitter Logo' />
                                <p className='footer-icon-description'>Twitter</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}