import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './WorkInProgress.css';

export default function WorkInProgress() {
    return (
        <>
            <Nav />
            {/* <div className='wip-container'>
                This page will show a work in progress message.
            </div> */}
            <div className='wip-section'>
                <h1 className='wip-header'>Sorry, this page is still under construction!</h1>
                {/* <h2 className='confirmed-booking-subheader'>We look forward to seeing you soon.</h2> */}
                <div className='back-to-home-button-container'>
                    <Link to='/'>
                        <button className='confirmed-booking-button'>Back to Home</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}