import greek_salad from '../../assets/images/greek-salad.jpg'
import bruchetta from '../../assets/images/bruchetta.jpg';
import lemon_dessert from '../../assets/images/lemon-cake.jpg';
import './Testimonials.css';

export default function Testimonials() {
    return (
        <div className="testimonials-section">
            <div className="testimonials-header">
                <h2>Testimonials</h2>
            </div>

            <div className="testimonials-container">
                <div className="individual-testimonial">
                    <div className="review-details">
                        <div className="rating-and-image">
                            <p className="rating-title">4/5</p>
                            <img src={greek_salad} className="testimonial-image" alt='Review Image' />
                        </div>

                        <p className="reviewer-name">John Doe</p>
                    </div>

                    <div className='product-name-container'>
                        <p className="product-name">Greek Salad</p>
                    </div>
                </div>

                <div className="individual-testimonial">
                    <div className="review-details">
                        <div className="rating-and-image">
                            <p className="rating-title">5/5</p>
                            <img src={bruchetta} className="testimonial-image" alt='Review Image' />
                        </div>

                        <p className="reviewer-name">Jane Smith</p>
                    </div>

                    <div className='product-name-container'>
                        <p className="product-name">Bruchetta</p>
                    </div>
                </div>

                <div className="individual-testimonial">
                    <div className="review-details">
                        <div className="rating-and-image">
                            <p className="rating-title">3/5</p>
                            <img src={lemon_dessert} className="testimonial-image" alt='Review Image' />
                        </div>

                        <div className='product-name-container'>
                            <p className="reviewer-name">Peter Parker</p>
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