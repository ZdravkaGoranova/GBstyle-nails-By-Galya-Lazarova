
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Gallery from './components/Gallery/Gallery.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Category from './components/Category/Category.js';

import Сourses from './components/Сourses/Сourses.js'
import BeautySalon from './components/BeautySalon/BeautySalon.js';
import Politics from './components/Policy/Policy.js';
import Policy from './components/Policy/Policy.js';



function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/category" element={<Category />} />
        <Route path="/callery" element={<Gallery />} />

        <Route path="/courses" element={<Сourses />} />
        <Route path="/beautySalon" element={<BeautySalon />} />
        <Route path="/policy" element={<Policy />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
