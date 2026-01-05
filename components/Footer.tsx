import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../constants';
import { MapPin, Phone, Mail, Clock, WashingMachine } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group select-none">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-gold/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <WashingMachine 
                  size={32} 
                  className="text-white group-hover:text-primary-gold transition-all duration-500 animate-wash group-active:scale-90 relative z-10" 
                />
              </div>
              <h2 className="text-2xl font-heading font-black">
                LAVANDERIA <span className="text-primary-gold transition-colors duration-300 group-hover:text-white">INOVATA</span>
              </h2>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Cuidamos das suas roupas com a qualidade e carinho que elas merecem. Delivery rápido em Osasco e região.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold hover:text-secondary-dark transition-colors cursor-pointer group/social">
                <span className="font-bold text-xs group-hover/social:scale-110 transition-transform">IG</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold hover:text-secondary-dark transition-colors cursor-pointer group/social">
                <span className="font-bold text-xs group-hover/social:scale-110 transition-transform">FB</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-gold">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Home</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Nossos Serviços</Link></li>
              <li><Link to="/#bairros" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Área de Atendimento</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary-gold">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 group">
                <MapPin className="text-primary-gold shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 group">
                <Phone className="text-primary-gold shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <div className="flex flex-col">
                  <a href={`tel:${CONTACT.phone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">{CONTACT.phone}</a>
                  <a href={`https://wa.me/${CONTACT.whatsapp}`} className="hover:text-white transition-colors">{CONTACT.whatsappDisplay}</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-300 group">
                <Mail className="text-primary-gold shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-3 text-gray-300 group">
                <Clock className="text-primary-gold shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span>Seg - Sex: 8h às 18h<br/>Sáb: 9h às 13h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Lavanderia Inovata - CNPJ: {CONTACT.cnpj} | Todos os direitos reservados
          </p>
          
          <p className="flex items-center gap-1 developer-credit group/credit cursor-default">
            Desenvolvido com 
            <span className="text-[#E50914] inline-block animate-heartbeat transition-all duration-300 group-hover/credit:scale-150 group-hover/credit:drop-shadow-[0_0_8px_rgba(229,9,20,0.8)]">❤️</span> 
            por 
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold relative group transition-colors animate-text-shimmer"
            >
              Suprema Sites Express
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;