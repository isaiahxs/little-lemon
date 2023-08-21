import { Link } from 'react-router-dom'
import './BookingForm.css';

export default function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, setAvailableTimes, dispatch }) {

    //updates local date state by calling setDate and dispatches UPDATE_TIMES action with selected date
    //dispatch function sends this action to reducer in Main.js
    const handleDateChange = e => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    }

    const isFormValid = date && time && guests && occasion;
    console.log({ date, time, guests, occasion, isFormValid });

    return (
        <div className='form-section'>
            <form className='booking-form'>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} min={new Date().toISOString().split('T')[0]} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" id="guests" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <div className='reservation-button-container'>
                    <Link to='/confirmed'>
                        <input className='reservation-button' type="submit" value="Make Your Reservation" disabled={!isFormValid} aria-label="Make Your Reservation" />
                    </Link>
                </div>
            </form>
        </div>
    )
}