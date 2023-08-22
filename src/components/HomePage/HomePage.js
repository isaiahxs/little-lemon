import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Highlights from '../Highlights/Highlights';
import Testimonials from '../Testimonials/Testimonials';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className='home-page-section'>
            <Nav />
            <Header />
            <Highlights />
            <Testimonials />
            <About />
        </div>
    )
}