import greek_salad from '../../assets/images/greek-salad.jpg'
import bruchetta from '../../assets/images/bruchetta.jpg';
import lemon_dessert from '../../assets/images/lemon-cake.jpg';
import star from '../../assets/images/full-star.svg';
import half_star from '../../assets/images/half-star.svg';
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
                            <p className="reviewer-name">Peter Parker</p>
                            <span className='stars-container'>
                                <img className='star' src={star} alt='Star' />
                                <img className='star' src={star} alt='Star' />
                                <img className='star' src={star} alt='Star' />
                            </span>
                        </div>

                        <div className="rating-and-image">
                            <img src={lemon_dessert} className="item-image" alt='Review Image' />
                        </div>
                    </div>

                    <div className='product-name-container'>
                        <p className="product-name">Lemon Dessert</p>
                    </div>
                </div>

                <div className="individual-testimonial">
                    <div className="review-details">
                        <div className='reviewer-name-container'>
                            <p className="reviewer-name">Jane Smith</p>
                            <span className='stars-container'>
                                <img className='star' src={star} alt='Star' />
                                <img className='star' src={star} alt='Star' />
                                <img className='star' src={star} alt='Star' />
                                <img className='star' src={star} alt='Star' />
                                <img className='star' src={star} alt='Star' />
                            </span>
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
                            <p className="reviewer-name">John Doe</p>
                            <span className='stars-container'>
                                <img className='star' src={star} alt='Star' />
                                <img className='star' src={star} alt='Star' />
                                <img className='star' src={star} alt='Star' />
                                <img className='star' src={star} alt='Star' />
                                <img className='star' src={half_star} alt='Half Star' />
                            </span>
                        </div>

                        <div className="rating-and-image">
                            <img src={greek_salad} className="item-image" alt='Review Image' />
                        </div>
                    </div>

                    <div className='product-name-container'>
                        <p className="product-name">Greek Salad</p>
                    </div>
                </div>
            </div>
        </div>
    )
}