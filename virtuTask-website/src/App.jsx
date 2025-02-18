import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesPage from './components/Features';
import WhyUsSection from './components/WhyUsSection';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/why-us" element={<WhyUsSection/>} />
          <Route path="/contact" element={<div className="container py-5 text-center">Contact Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;