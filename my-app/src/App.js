
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Gallery from './components/Gallery/Gallery.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Category from './components/Category/Category.js';




function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/category" element={<Category />} />
      <Route path="/callery" element={<Gallery />} />
      <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
