import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { timesReducer } from '../Main/Main';
import BookingForm from './BookingForm';

test('Renders the Choose date label', () => {
    render(
        <MemoryRouter>
            <BookingForm />
        </MemoryRouter>
    );
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});

// test('timesReducer returns the same value provided in the state', () => {
//     const initialState = ['17:00', '18:00', '19:00'];
//     const action = { type: 'UPDATE_TIMES', date: '2023-08-20' };
//     const newState = timesReducer(initialState, action);

//     expect(newState).toEqual(initialState);
// })

test('timesReducer updates the state correctly', () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const newTimes = ["17:00", "18:00", "19:00", "20:00"];
    const action = { type: 'UPDATE_TIMES', payload: newTimes };

    const newState = timesReducer(initialState, action);

    expect(newState).toEqual(newTimes);
})

test('Date input should have a min attribute set to today', () => {
    render(
        <MemoryRouter>
            <BookingForm />
        </MemoryRouter>
    );
    const inputElement = screen.getByLabelText("Choose date");
    expect(inputElement).toHaveAttribute('min', new Date().toISOString().split('T')[0]);
});

test('Guests input should have a min attribute of 1 and max of 10', () => {
    render(
        <MemoryRouter>
            <BookingForm />
        </MemoryRouter>
    );
    const inputElement = screen.getByLabelText("Number of guests");
    expect(inputElement).toHaveAttribute('min', '1');
    expect(inputElement).toHaveAttribute('max', '10');
});

test('Submit button should be disabled when form is invalid', () => {
    render(
        <MemoryRouter>
            <BookingForm />
        </MemoryRouter>
    );
    const submitButton = screen.getByText("Make Your reservation");
    expect(submitButton).toBeDisabled();
});

// test('Submit button should be enabled when all fields are filled', () => {
//     render(
//         <MemoryRouter>
//             <BookingForm />
//         </MemoryRouter>
//     );
//     userEvent.type(screen.getByLabelText("Choose date"), "2023-08-21");
//     userEvent.selectOptions(screen.getByLabelText("Choose time"), "17:00");
//     userEvent.type(screen.getByLabelText("Number of guests"), '5');
//     userEvent.selectOptions(screen.getByLabelText("Occasion"), "Birthday");
//     const submitButton = screen.getByText("Make Your reservation");
//     expect(submitButton).not.toBeDisabled();
// });