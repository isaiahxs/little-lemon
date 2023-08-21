import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import BookingPage from '../BookingPage/BookingPage';

//takes current state and an action and returns the next state (haven't yet implemented logic to update state)
function timesReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return state;
        default:
            return state;
    }
}

export default function Main() {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    //useReducer hook creates state variable of availableTimes and a dispatch function
    //initial state is provided to reducer and state will be updated based on actions sent via dispatch
    const [availableTimes, dispatch] = useReducer(timesReducer, initialState);

    //dispatches action of UPDATE_TIMES but since reducer is not doing anything special with this action, it doesn't change state yet
    const updateTimes = () => {
        const action = { type: 'UPDATE_TIMES' };
        dispatch(action);
    }

    return (
        <main>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/booking' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
            </Routes>
        </main>
    )
}