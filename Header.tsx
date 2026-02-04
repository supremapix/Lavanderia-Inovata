import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, WashingMachine } from 'lucide-react';
import { CONTACT } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined' && ((window as any).__PRERENDER__ === true || /HeadlessChrome/.test(navigator.userAgent))) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBairrosClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('bairros')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#bairros');
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Preços', path: '/precos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Bairros', path: '/#bairros', isHash: true },
    { name: 'Contato', path: '/contato' },
  ];

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isTransparent ? 'bg-transparent py-5' : 'bg-secondary-dark/95 backdrop-blur-md shadow-lg py-3'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 z-50 group select-none">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-gold/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <WashingMachine 
                size={42} 
                className="text-white group-hover:text-primary-gold transition-all duration-500 animate-wash group-active:scale-90 relative z-10" 
                strokeWidth={1.5}
              />
            </div>
            <div className="flex flex-col items-start transition-transform duration-300 group-hover:translate-x-1">
              <h1 className="text-2xl font-heading font-black text-white tracking-tighter leading-none">
                LAVANDERIA <span className="text-primary-gold transition-colors duration-300 group-hover:text-white">INOVATA</span>
              </h1>
              <span className="text-[10px] text-gray-300 tracking-[0.2em] uppercase font-medium group-hover:text-primary-gold transition-colors duration-300">
                Premium & Delivery
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.isHash ? (
                <a 
                  key={link.name}
                  href="/#bairros"
                  onClick={handleBairrosClick}
                  className="text-sm font-medium text-white transition-colors duration-300 hover:text-primary-gold uppercase tracking-wide cursor-pointer"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary-gold uppercase tracking-wide ${
                    location.pathname === link.path ? 'text-primary-gold underline underline-offset-4 decoration-2' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a 
              href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 bg-primary-gold text-secondary-dark px-4 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors duration-300 btn-premium"
            >
              <Phone size={16} />
              {CONTACT.phone}
            </a>
          </nav>

          <button 
            className="lg:hidden text-white z-50 focus:outline-none relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 bg-[#0F172A] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center space-y-8 z-40 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navLinks.map((link) => (
           link.isHash ? (
            <a
              key={link.name}
              href="/#bairros"
              onClick={handleBairrosClick}
              className="text-2xl font-bold text-white hover:text-primary-gold transition-colors"
            >
              {link.name}
            </a>
           ) : (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-2xl font-bold text-white hover:text-primary-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
           )
        ))}
        <a 
          href={`https://wa.me/${CONTACT.whatsapp}?text=Gostaria de um orçamento (Origem: Menu Mobile)`}
          className="mt-8 bg-primary-gold text-secondary-dark px-8 py-3 rounded-full font-bold text-lg btn-premium"
        >
          Pedir Orçamento
        </a>
      </div>
    </>
  );
};

export default Header;