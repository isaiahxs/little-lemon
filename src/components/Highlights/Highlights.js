import greek_salad from '../../assets/images/greek-salad.jpg'
import bruchetta from '../../assets/images/bruchetta.jpg';
import lemon_dessert from '../../assets/images/lemon-cake.jpg';
import './Highlights.css';

export default function Highlights() {
    return (
        <div className='highlights-section'>
            <div className='highlights-header'>
                <h2 className="home-header">Specials</h2>
                <button className='online-menu-button'>Online Menu</button>
            </div>
            <div className="highlights-container">

                {/* item 1 */}
                <div className="item">
                    <div className="item-image-container">
                        <img src={greek_salad} className="item-image" alt="Image of a Little Lemon dish" />
                    </div>

                    <div className="item-name-and-price">
                        <p className="item-name">Greek Salad</p>
                        <p className="item-price">$10.99</p>
                    </div>

                    <div className="item-description">
                        This food is really good. You should buy it.
                    </div>
                </div>

                {/* item 2 */}
                <div className="item">
                    <div className="item-image-container">
                        <img src={bruchetta} className="item-image" alt="Image of a Little Lemon dish" />
                    </div>

                    <div className="item-name-and-price">
                        <p className="item-name">Bruchetta</p>
                        <p className="item-price">$10.99</p>
                    </div>

                    <div className="item-description">
                        This food is really good. You should buy it.
                    </div>
                </div>

                {/* item 3 */}
                <div className="item">
                    <div className="item-image-container">
                        <img src={lemon_dessert} className="item-image" alt="Image of a Little Lemon dish" />
                    </div>

                    <div className="item-name-and-price">
                        <p className="item-name">Lemon Dessert</p>
                        <p className="item-price">$10.99</p>
                    </div>

                    <div className="item-description">
                        This food is really good. You should buy it.
                    </div>
                </div>

            </div>
        </div>
    )
}