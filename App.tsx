import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import NeighborhoodPage from './pages/NeighborhoodPage';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Prices from './pages/Prices';
import ScrollToTop from './components/ScrollToTop'; // We will create this small utility

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/precos" element={<Prices />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/lavanderia-:slug" element={<NeighborhoodPage />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;