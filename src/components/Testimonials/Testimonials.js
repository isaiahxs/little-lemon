import './Testimonials.css';

export default function Testimonials() {
    return (
        <div className="testimonials-section">
            <div className="testimonials-header">
                <h2>Testimonials</h2>
            </div>

            <div className="testimonials-container">
                {/* test 1 */}
                <div className="individual-testimonial">
                    <div className="review-details">
                        <div className="rating-and-image">
                            <p className="rating-title">Rating</p>
                            <img className="rating-image" alt='Review Image' />
                        </div>

                        <p className="reviewer-name">Name of Reviewer</p>
                    </div>

                    <p className="product-name">Product Name</p>
                </div>


                {/* test 2 */}
                <div className="individual-testimonial">
                    <div className="review-details">
                        <div className="rating-and-image">
                            <p className="rating-title">Rating</p>
                            <img className="rating-image" alt='Review Image' />
                        </div>

                        <p className="reviewer-name">Name of Reviewer</p>
                    </div>

                    <p className="product-name">Product Name</p>
                </div>

                {/* test 3 */}
                <div className="individual-testimonial">
                    <div className="review-details">
                        <div className="rating-and-image">
                            <p className="rating-title">Rating</p>
                            <img className="rating-image" alt='Review Image' />
                        </div>

                        <p className="reviewer-name">Name of Reviewer</p>
                    </div>

                    <p className="product-name">Product Name</p>
                </div>
            </div>
        </div>
    )
}