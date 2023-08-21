import Main from './components/Main/Main';
import Highlights from './components/Highlights/Highlights';
import Testimonials from './components/Testimonials/Testimonials';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Highlights />
      <Testimonials />
      <Main />
      <Footer />
    </>
  );
}

export default App;
