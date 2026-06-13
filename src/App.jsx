import Header from './components/Header';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Guides from './components/Guides';
import Booking from './components/Booking';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Tours />
      <Guides />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
