import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import NeighborhoodPage from './pages/NeighborhoodPage';
import Contact from './pages/Contact';

// Simple placeholder for Services page if needed, normally would be separate file
const ServicesPlaceholder = () => (
  <div className="pt-32 pb-20 container mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
    <p>Consulte a página inicial para detalhes completos.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lavanderia-:slug" element={<NeighborhoodPage />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/servicos" element={<ServicesPlaceholder />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
