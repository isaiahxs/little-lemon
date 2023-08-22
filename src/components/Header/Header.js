import { Link } from 'react-router-dom'
import hero_dish from '../../assets/images/lemon-garlic-chicken.jpeg';
import './Header.css';

export default function Header() {

    return (
        <header className='header-container'>
            <div className='hero-section'>
                <div className='hero-information'>
                    <h1 className='title'>Little Lemon</h1>
                    <h2 className='location'>Chicago</h2>
                    <h3 className='description karla'>Nestled in the heart of the city, Little Lemon is more than just a restaurant. It's a place where the simplicity of ingredients, the love of food, and the joy of sharing all blend into one delightful experience.</h3>
                    <Link to='/booking'>
                        <button className='reserve-table-button'>Reserve a Table</button>
                    </Link>
                </div>

                <div className='hero-image-container'>
                    <img src={hero_dish} className='hero-image' alt="Little Lemon Hero Dish" />
                </div>
            </div>
        </header>
    )
}