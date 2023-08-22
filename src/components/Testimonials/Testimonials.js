import greek_salad from '../../assets/images/greek-salad.jpg'
import bruchetta from '../../assets/images/bruchetta.jpg';
import lemon_dessert from '../../assets/images/lemon-cake.jpg';
import './Testimonials.css';

export default function Testimonials() {
    return (
        <div className="testimonials-section">
            <div className="testimonials-header">
                <h2 className='home-header'>Testimonials</h2>
            </div>

            <div className="testimonials-container">
                <div className="individual-testimonial">
                    <div className="review-details">
                        <div className='reviewer-name-container'>
                            <p className="reviewer-name">John Doe</p>
                            <p className="rating-title">4/5</p>
                        </div>

                        <div className="rating-and-image">
                            <img src={greek_salad} className="item-image" alt='Review Image' />
                        </div>
                    </div>

                    <div className='product-name-container'>
                        <p className="product-name">Greek Salad</p>
                    </div>
                </div>

                <div className="individual-testimonial">
                    <div className="review-details">
                        <div className='reviewer-name-container'>
                            <p className="reviewer-name">Jane Smith</p>
                            <p className="rating-title">5/5</p>
                        </div>

                        <div className="rating-and-image">
                            <img src={bruchetta} className="item-image" alt='Review Image' />
                        </div>
                    </div>

                    <div className='product-name-container'>
                        <p className="product-name">Bruchetta</p>
                    </div>
                </div>

                <div className="individual-testimonial">
                    <div className="review-details">
                        <div className='reviewer-name-container'>
                            <p className="reviewer-name">Peter Parker</p>
                            <p className="rating-title">3/5</p>
                        </div>

                        <div className="rating-and-image">
                            <img src={lemon_dessert} className="item-image" alt='Review Image' />
                        </div>
                    </div>

                    <div className='product-name-container'>
                        <p className="product-name">Lemon Dessert</p>
                    </div>
                </div>
            </div>
        </div>
    )
}