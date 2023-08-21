import { render, screen } from '@testing-library/react';
import { timesReducer } from '../Main/Main';
import BookingForm from './BookingForm';

test('Renders the Choose date label', () => {
    render(<BookingForm />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

test('timesReducer returns the same value provided in the state', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', date: '2023-08-20' };
    const newState = timesReducer(initialState, action);

    expect(newState).toEqual(initialState);
})