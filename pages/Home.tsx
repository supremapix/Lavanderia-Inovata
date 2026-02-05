
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { NEIGHBORHOODS, SERVICES_DATA, HOME_TYPEWRITER_TEXTS, CONTACT, HOME_FAQ, BLOG_POSTS } from '../constants';
import { ArrowRight, CheckCircle, MapPin, ChevronDown, ChevronUp, HelpCircle, Star, Truck, Clock } from 'lucide-react';
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
    primaryText: "💬 ORÇAMENTO VIA WHATSAPP",
    primaryUrl: `https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de um orçamento para lavanderia em Osasco. (Origem: Home Hero)`,
    secondaryText: "📍 TABELA DE PREÇOS",
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
      // Horário comercial simplificado para o CTA
      const isWorkingHours = hour >= 8 && hour < 18;
      if (isWorkingHours) {
        setCtaState({
          primaryText: "⚡ ORÇAMENTO RÁPIDO (ONLINE)",
          primaryUrl: `https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de um orçamento agora para lavanderia em Osasco.`,
          secondaryText: "📍 VER PREÇOS",
          secondaryLink: "/precos"
        });
      }
    };
    updateCTA();
  }, [isPrerender]);

  useEffect(() => {
    if (isPrerender) return;
    const bubbleCount = 15;
    const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 40 + 20}px`,
      duration: `${Math.random() * 5 + 10}s`, 
      sway: `${Math.random() * 100 - 50}px`,
      delay: `${Math.random() * 5}s` 
    }));
    setBubbles(newBubbles);
  }, [isPrerender]);

  useEffect(() => {
    if (isPrerender) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [isPrerender]);

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
      { threshold: 0.1 }
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
    "description": "A melhor lavanderia em Osasco com serviço de passadoria, lavagem de edredons e delivery leva e traz.",
    "image": HERO_IMAGES,
    "telephone": CONTACT.phone,
    "priceRange": "$$",
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <>
      <EnhancedSEO 
        title="Lavanderia em Osasco | Lavagem de Edredons e Passadoria Leva e Traz"
        description="Buscando lavanderia osasco perto de mim? A Inovata oferece lavanderia profissional, passadoria, lavagem de tênis e delivery grátis*. Confira preços!"
        structuredData={schemaData}
        type="business.business"
      />

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-secondary-dark">
            {HERO_IMAGES.map((img, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={img} alt="Lavanderia Profissional em Osasco" className="w-full h-full object-cover opacity-60" />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-hero z-10"></div>
          </div>
          
          {/* Main Hero Content */}
          {isMounted && (
            <div className="container mx-auto px-4 relative z-20 text-center">
              <h1 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 leading-tight">
                <Typewriter texts={HOME_TYPEWRITER_TEXTS} />
              </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                Cuidamos das suas roupas com a qualidade e o carinho que elas merecem. Delivery em Osasco e região.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={ctaState.primaryUrl}
                  className="bg-primary-gold text-secondary-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all btn-premium shadow-xl"
                >
                  {ctaState.primaryText}
                </a>
                <Link 
                  to={ctaState.secondaryLink}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-xl"
                >
                  {ctaState.secondaryText}
                </Link>
              </div>
            </div>
          )}
          
          {/* Decorative Bubbles */}
          {!isPrerender && bubbles.map((bubble) => (
            <div 
              key={bubble.id}
              className="absolute bg-white/10 rounded-full blur-[2px] pointer-events-none animate-bubble"
              style={{
                left: bubble.left,
                width: bubble.size,
                height: bubble.size,
                bottom: '-50px',
                '--duration': bubble.duration,
                '--sway': bubble.sway,
                animationDelay: bubble.delay
              } as React.CSSProperties}
            ></div>
          ))}
        </section>

        {/* Areas section with ID for anchor scroll */}
        <section id="bairros" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-secondary-dark mb-4">Áreas de Atendimento</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Confira os bairros onde oferecemos nosso serviço de delivery leva e traz.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {NEIGHBORHOODS.map((n) => (
                <Link 
                  key={n.id} 
                  to={`/lavanderia/${n.slug}`}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:border-primary-gold transition-colors font-medium text-gray-700"
                >
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Simple FAQ Section */}
        <section className="py-20 bg-white">
           <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-secondary-dark mb-4">Dúvidas Frequentes</h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                 {HOME_FAQ.map((faq, index) => (
                    <div key={index} className="border border-gray-100 rounded-2xl p-6 shadow-sm">
                       <h3 className="text-lg font-bold text-secondary-dark mb-2">{faq.question}</h3>
                       <p className="text-gray-600">{faq.answer}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>
        
        {/* CTA Section with Image */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lavanderia-inovata-cta.png" 
              alt="Lavanderia Inovata - Transforme suas roupas e tênis" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 via-secondary-dark/70 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-block bg-primary-gold/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <p className="text-primary-gold font-bold text-sm flex items-center gap-2">
                  <span className="text-xl">⚡</span> OFERTA ESPECIAL
                </p>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                Transforme Suas <span className="text-primary-gold">Roupas</span> e <span className="text-primary-gold">Tênis</span> Hoje Mesmo!
              </h2>
              
              <p className="text-xl text-gray-200 mb-8">
                Não perca tempo com lavanderia! Coletamos, lavamos e entregamos tudo impecável na sua porta. Delivery grátis acima de R$250.
              </p>
              
              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-primary-gold shrink-0" size={24} />
                  <span className="text-lg">Coleta e entrega em até 48h</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-primary-gold shrink-0" size={24} />
                  <span className="text-lg">Produtos biodegradáveis premium</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle className="text-primary-gold shrink-0" size={24} />
                  <span className="text-lg">Garantia de satisfação 100%</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de solicitar uma coleta. (Origem: CTA Final)`}
                  className="bg-primary-gold text-secondary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl inline-flex items-center justify-center gap-2"
                >
                  🚀 Solicitar Coleta Agora
                </a>
                <Link 
                  to="/precos"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-xl inline-flex items-center justify-center gap-2"
                >
                  💰 Ver Preços
                </Link>
              </div>
              
              <p className="text-sm text-gray-300 mt-6">
                * Delivery grátis para pedidos acima de R$250 em Osasco e região
              </p>
            </div>
          </div>
        </section>
        
        {/* Final CTA Banner */}
        <section className="bg-gradient-to-r from-primary-gold to-yellow-500 py-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-black text-secondary-dark mb-4">
              Deixe o trabalho pesado com a gente!
            </h3>
            <p className="text-secondary-dark/80 mb-6 max-w-2xl mx-auto">
              Seus tênis, tapetes, cortinas e roupas em boas mãos. Aproveite nosso delivery grátis* e ganhe tempo livre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de solicitar uma coleta. (Origem: Banner Final)`}
                className="bg-secondary-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-dark/90 transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                Solicitar Coleta Agora
              </a>
              <a 
                href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}
                className="bg-white text-secondary-dark border-2 border-secondary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-dark hover:text-white transition-all shadow-xl inline-flex items-center justify-center gap-2"
              >
                Ligar {CONTACT.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Fix: Added default export for Home component to resolve import errors in App.tsx
export default Home;
