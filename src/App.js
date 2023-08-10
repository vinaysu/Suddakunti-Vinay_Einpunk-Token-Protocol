
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import BuyNow from './BuyNow'
import HowToBuy from './HowToBuy'
import About from './About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/howtobuy' element={<HowToBuy />} />
          <Route path='/buynow' element={<BuyNow />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
