import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Highlights from './components/Highlights/Highlights';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Highlights />
      <Testimonials />
      <About />
      <Main />
      <Footer />
    </>
  );
}

export default App;
