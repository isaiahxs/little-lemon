import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import BookingPage from './components/BookingPage/BookingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
