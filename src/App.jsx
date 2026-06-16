import Header from './components/Header';
import Hero from './components/Hero';
import Tours from './components/Tours';
import Guides from './components/Guides';
import Availability from './components/Availability';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Tours />
      <Guides />
      <Availability />
      <About />
      <Footer />
    </div>
  );
}

export default App;
