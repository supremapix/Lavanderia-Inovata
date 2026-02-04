import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { NEIGHBORHOODS, SERVICES_DATA, HOME_TYPEWRITER_TEXTS, CONTACT, HOME_FAQ } from '../constants';
import { ArrowRight, CheckCircle, MapPin, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=2070&auto=format&fit=crop", 
];

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bubbles, setBubbles] = useState<Array<{ id: number; left: string; size: string; duration: string; sway: string; delay: string }>>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  const isPrerender = typeof window !== 'undefined' && (
    (window as any).__PRERENDER__ === true || 
    /HeadlessChrome/.test(navigator.userAgent)
  );
  
  const [ctaState, setCtaState] = useState({
    primaryText: "💬 ORÇAMENTO RÁPIDO",
    primaryUrl: `https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de um orçamento para lavanderia. (Origem: Home Hero)`,
    secondaryText: "📍 VER PREÇOS",
    secondaryLink: "/precos"
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isPrerender) return;

    const updateCTA = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); 
      
      const isWeekDay = day >= 1 && day <= 5;
      const isSaturday = day === 6;
      const isWorkingHours = (isWeekDay && hour >= 8 && hour < 18) || (isSaturday && hour >= 9 && hour < 13);

      if (isWorkingHours) {
        setCtaState({
          primaryText: "⚡ ORÇAMENTO EM 2 MIN",
          primaryUrl: `https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de um orçamento agora (Atendimento Online). (Origem: Home Hero - Comercial)`,
          secondaryText: "📍 VER TABELA DE PREÇOS",
          secondaryLink: "/precos"
        });
      } else {
        setCtaState({
          primaryText: "🌙 AGENDAR PARA AMANHÃ",
          primaryUrl: `https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de agendar uma coleta para amanhã. (Origem: Home Hero - Fora de Horário)`,
          secondaryText: "💲 VER TABELA DE PREÇOS",
          secondaryLink: "/precos"
        });
      }
    };

    updateCTA();
    const interval = setInterval(updateCTA, 60000); 
    return () => clearInterval(interval);
  }, [isPrerender]);

  useEffect(() => {
    if (isPrerender) return;

    const bubbleCount = 18;
    const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 50 + 20}px`,
      duration: `${Math.random() * 6 + 10}s`, 
      sway: `${Math.random() * 150 - 75}px`,
      delay: `${Math.random() * 10}s` 
    }));
    setBubbles(newBubbles);
  }, [isPrerender]);

  useEffect(() => {
    if (isPrerender) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [isPrerender]);

  useEffect(() => {
    if (location.hash === '#bairros') {
       setTimeout(() => {
         const el = document.getElementById('bairros');
         if (el) el.scrollIntoView({ behavior: 'smooth' });
       }, 300);
    }
  }, [location]);

  useEffect(() => {
    if (isPrerender) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isPrerender]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LaundryService",
    "@id": "https://www.lavanderiainovata.com.br",
    "name": "Lavanderia Inovata",
    "image": HERO_IMAGES,
    "telephone": CONTACT.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. César Abraão, 209",
      "addressLocality": "Osasco",
      "addressRegion": "SP",
      "postalCode": "06268-010",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5329,
      "longitude": -46.7919
    }
  };

  return (
    <>
      <EnhancedSEO 
        title="Lavanderia Inovata Osasco | Delivery de Tênis, Tapetes e Roupas"
        description="Lavanderia Premium em Osasco e Região. Lavamos Tênis, Tapetes, Cortinas, Sofás e Roupas Finas. Delivery Grátis*. Agende sua coleta agora!"
        structuredData={schemaData}
        type="business.business"
      />

      <main className="overflow-x-hidden">
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-secondary-dark">
            {HERO_IMAGES.map((img, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={img} alt={`Lavanderia Inovata - Slide ${index + 1}`} className="w-full h-full object-cover transform scale-105" suppressHydrationWarning />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-hero z-10"></div>
          </div>
          
          {isMounted && (
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
              {bubbles.map((bubble) => (
                <div key={bubble.id} className="soap-bubble" style={{ left: bubble.left, width: bubble.size, height: bubble.size, animationDelay: bubble.delay, '--bubble-duration': bubble.duration, '--sway': bubble.sway } as any} />
              ))}
            </div>
          )}

          <div className="container mx-auto px-4 z-20 text-center text-white mt-16 fade-up relative">
            <div className="inline-block mb-4">
               <span className="text-primary-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                 Lavanderia Inovata & Delivery
               </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black mb-6 leading-tight min-h-[100px] md:min-h-[140px] drop-shadow-2xl">
              <Typewriter texts={HOME_TYPEWRITER_TEXTS} />
            </h1>
            <p className="hidden md:block text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              A solução completa de limpeza para sua casa em Osasco. Tecnologia, produtos biodegradáveis e delivery na sua porta.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <a href={ctaState.primaryUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-gradient-gold text-secondary-dark px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all animate-pulse-glow btn-premium flex items-center justify-center gap-2">
                <span suppressHydrationWarning>{ctaState.primaryText}</span>
              </a>
              <Link to={ctaState.secondaryLink} className="w-full md:w-auto border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/20 flex items-center justify-center gap-2">
                <span suppressHydrationWarning>{ctaState.secondaryText}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* RECENT BLOGS SECTION */}
        <section className="py-20 bg-white">
           <div className="container mx-auto px-4">
              <div className="text-center mb-16 fade-up">
                <h2 className="text-primary-blue text-lg font-bold uppercase tracking-wider mb-2">Dicas & Novidades</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark">Nosso Blog</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                 {[
                   { slug: 'guia-limpeza-tenis-osasco-barueri', title: 'Guia de Tênis em Osasco', cat: 'Calçados', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400&fit=crop' },
                   { slug: 'higiene-edredons-tapetes-carapicuiba', title: 'Saúde em Carapicuíba', cat: 'Dicas de Casa', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&fit=crop' },
                   { slug: 'delivery-lavanderia-lapa-vila-leopoldina', title: 'Delivery na Lapa', cat: 'Lifestyle', img: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=400&fit=crop' }
                 ].map((p, i) => (
                   <Link key={i} to={`/blog/${p.slug}`} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all fade-up" style={{ transitionDelay: `${i*100}ms` }}>
                      <div className="h-48 overflow-hidden">
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="p-6">
                        <span className="text-primary-blue text-[10px] font-bold uppercase tracking-widest">{p.cat}</span>
                        <h4 className="text-lg font-bold text-secondary-dark mt-2 group-hover:text-primary-blue transition-colors">{p.title}</h4>
                      </div>
                   </Link>
                 ))}
              </div>
              <div className="text-center fade-up">
                <Link to="/blog" className="font-bold text-primary-gold flex items-center justify-center gap-2 hover:translate-x-1 transition-transform">Ver Blog Completo <ArrowRight size={18}/></Link>
              </div>
           </div>
        </section>

        {/* NEIGHBORHOODS grounding */}
        <section id="bairros" className="py-20 bg-gray-50" ref={scrollRef}>
          <div className="container mx-auto px-4">
             <div className="text-center mb-16 fade-up">
              <h2 className="text-primary-blue text-lg font-bold uppercase tracking-wider mb-2">Área de Atendimento</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark">Atendemos Osasco, Barueri, SP e Região</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {NEIGHBORHOODS.map((hood, idx) => (
                <Link to={`/lavanderia/${hood.slug}`} key={hood.id} className="group flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:border-primary-blue hover:shadow-lg hover:-translate-y-1 transition-all fade-up" style={{ transitionDelay: `${(idx % 10) * 50}ms` }}>
                  <div className="p-2 rounded-full bg-blue-50 group-hover:bg-primary-blue transition-colors duration-300">
                    <MapPin size={18} className="text-primary-blue group-hover:text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-700 group-hover:text-primary-blue">{hood.name}</span>
                    <span className="text-[10px] uppercase text-gray-400 font-bold">{hood.city}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-primary relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center fade-up">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8">Trabalho pesado com a gente!</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href={`https://wa.me/${CONTACT.whatsapp}`} className="bg-white text-primary-blue px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 btn-premium">Solicitar Coleta Agora <ArrowRight size={20}/></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;