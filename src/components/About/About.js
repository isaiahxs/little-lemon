import Footer from '../Footer/Footer';
import greek_salad from '../../assets/images/greek-salad.jpg'
import bruchetta from '../../assets/images/bruchetta.jpg';
import lemon_dessert from '../../assets/images/lemon-cake.jpg';
import './About.css';

export default function About() {
    return (
        <>
            <div className='about-section'>
                <div className='about-text'>
                    <h2 className='about-header'>Little Lemon</h2>
                    <h3 className='about-location'>Chicago</h3>
                    <h4 className='about-description karla'>Nestled in the heart of the city, Little Lemon is more than just a restaurant. It's a place where the simplicity of ingredients, the love of food, and the joy of sharing all blend into one delightful experience.</h4>
                </div>

                <div className='about-images-wrapper'>
                    <div className='about-images-container'>
                        <div className='individual-about-image-container'>
                            <img src={greek_salad} className='about-image about-image-1' alt='Very Tasty Dish from Little Lemon' />
                        </div>

                        <div className='individual-about-image-container'>
                            <img src={bruchetta} className='about-image about-image-2' alt='Very Tasty Dish from Little Lemon' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}