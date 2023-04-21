
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Gallery from './components/Gallery/Gallery.js';
import AboutUs from './components/AboutUs/AboutUs.js';




function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/callery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
