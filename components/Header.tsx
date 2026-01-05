import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Preços', path: '/precos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Bairros', path: '/#bairros' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-secondary-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start z-50 group">
          <h1 className="text-2xl font-heading font-black text-white tracking-tighter group-hover:scale-105 transition-transform">
            LAVANDERIA <span className="text-primary-gold">INOVATA</span>
          </h1>
          <span className="text-xs text-gray-300 tracking-widest uppercase">Premium & Delivery</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary-gold uppercase tracking-wide ${
                location.pathname === link.path ? 'text-primary-gold underline underline-offset-4 decoration-2' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2 bg-primary-gold text-secondary-dark px-4 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors duration-300"
          >
            <Phone size={16} />
            {CONTACT.phone}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-secondary-dark transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center space-y-8 z-40 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-2xl font-bold text-white hover:text-primary-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={`https://wa.me/${CONTACT.whatsapp}`}
            className="mt-8 bg-primary-gold text-secondary-dark px-8 py-3 rounded-full font-bold text-lg"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;