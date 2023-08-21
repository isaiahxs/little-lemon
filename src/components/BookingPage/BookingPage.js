import { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm';
import Bookings from '../Bookings/Bookings';
import './BookingPage.css';

export default function ({ availableTimes, setAvailableTimes, dispatch }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('Birthday');
    // assuming bookings will be an array of objects containing booking information
    const [bookings, setBookings] = useState([]);

    return (
        <div className='booking-page-container'>
            <h1 className='booking-page-header'>Booking Page</h1>
            <BookingForm date={date} setDate={setDate} time={time} setTime={setTime} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} dispatch={dispatch} />
            <Bookings bookings={bookings} setBookings={setBookings} />
        </div>
    )
}