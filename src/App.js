import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <main>
          <Nav />
          <Header />
          <Footer />
        </main>
      </>
    </div>
  );
}

export default App;
