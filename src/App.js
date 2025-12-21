// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './compo/Navbar';
import Footer from './compo/Footer';

// Pages
import Home from './Home';
import Terms from './compo/TermsOfUse';
import Privacy from './compo/Privacy';
import Contact from './compo/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
