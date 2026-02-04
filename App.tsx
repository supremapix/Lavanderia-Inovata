import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import NeighborhoodPage from './pages/NeighborhoodPage';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Prices from './pages/Prices';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/precos" element={<Prices />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/lavanderia/:slug" element={<NeighborhoodPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans overflow-x-hidden">
          <Header />
          <AnimatedRoutes />
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;