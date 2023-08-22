import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './ConfirmedBooking.css';

export default function ConfirmedBooking() {
    return (
        <>
            <Nav />
            <div className='confirmed-booking-section'>
                <h1 className='confirmed-booking-header'>Your reservation has been confirmed!</h1>
                <h2 className='confirmed-booking-subheader'>We look forward to seeing you soon.</h2>
            </div>
            <Footer />
        </>
    )
}