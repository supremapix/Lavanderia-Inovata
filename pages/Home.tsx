
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
// Fixed: Added BLOG_POSTS to the constants import
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
          
          {isMounted && (
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
              {bubbles.map((bubble) => (
                <div key={bubble.id} className="soap-bubble" style={{ left: bubble.left, width: bubble.size, height: bubble.size, animationDelay: bubble.delay, '--bubble-duration': bubble.duration, '--sway': bubble.sway } as any} />
              ))}
            </div>
          )}

          <div className="container mx-auto px-4 z-20 text-center text-white fade-up">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black mb-6 leading-tight min-h-[140px]">
              <Typewriter texts={HOME_TYPEWRITER_TEXTS} />
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Sua <strong>lavanderia em Osasco</strong> com quality 5 estrelas. <br className="hidden md:block" /> 
              Especialistas em <strong>lavagem de edredons</strong>, <strong>passadoria profissional</strong> e <strong>lavanderia delivery</strong>.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href={ctaState.primaryUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-primary-gold text-secondary-dark px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all btn-premium">
                {ctaState.primaryText}
              </a>
              <Link to="/precos" className="w-full md:w-auto border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary-dark transition-all">
                TABELA DE PREÇOS
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section - SEO Focused */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-up">
              <h2 className="text-primary-blue text-sm font-bold uppercase tracking-widest mb-4">Por que a Inovata?</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-black text-secondary-dark">A Melhor Lavanderia de Osasco</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all group fade-up">
                <div className="w-16 h-16 bg-blue-100 text-primary-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Star size={32} />
                </div>
                <h4 className="text-2xl font-bold text-secondary-dark mb-4">Lavanderia Perto de Mim</h4>
                <p className="text-gray-600 leading-relaxed">
                  Localizada no coração de Osasco, a Inovata é a <strong>lavanderia perto de mim bem avaliada</strong> que você procura. Atendimento rápido em toda a região.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all group fade-up" style={{ transitionDelay: '100ms' }}>
                <div className="w-16 h-16 bg-gold-100 text-primary-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Truck size={32} />
                </div>
                <h4 className="text-2xl font-bold text-secondary-dark mb-4">Lavanderia Osasco Leva e Traz</h4>
                <p className="text-gray-600 leading-relaxed">
                  Não perca tempo em <strong>lavanderia self service osasco</strong>. Nosso sistema de <strong>lavanderia delivery</strong> busca e entrega suas roupas limpas e passadas.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all group fade-up" style={{ transitionDelay: '200ms' }}>
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-2xl font-bold text-secondary-dark mb-4">Passadoria Profissional</h4>
                <p className="text-gray-600 leading-relaxed">
                  Oferecemos <strong>passadoria de roupas perto de mim</strong> com finalização artesanal. Suas camisas e vestidos com caimento de loja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Blog Grid */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 fade-up">
              <div>
                <h2 className="text-primary-blue text-sm font-bold uppercase tracking-widest mb-4">Conteúdo Especializado</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark">Dicas de Lavanderia Profissional</h3>
              </div>
              <Link to="/blog" className="text-primary-gold font-bold flex items-center gap-2 hover:gap-4 transition-all mt-4 md:mt-0">
                VER TODOS OS ARTIGOS <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.slice(0, 3).map((post, i) => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all fade-up" style={{ transitionDelay: `${i*100}ms` }}>
                  <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                  <div className="p-8">
                    <span className="text-[10px] font-bold text-primary-gold uppercase tracking-widest mb-2 block">{post.category}</span>
                    <h4 className="text-xl font-bold text-secondary-dark mb-4">{post.title}</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ with Semantic Keywords */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16 fade-up">
              <h2 className="text-primary-blue text-sm font-bold uppercase tracking-widest mb-4">FAQ Osasco</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark">Dúvidas sobre Lavanderia e Passadoria</h3>
            </div>
            <div className="space-y-4">
              {HOME_FAQ.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden fade-up" style={{ transitionDelay: `${i*50}ms` }}>
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors font-bold text-gray-800"
                  >
                    {faq.question}
                    {openFaqIndex === i ? <ChevronUp className="text-primary-gold" /> : <ChevronDown className="text-gray-400" />}
                  </button>
                  {openFaqIndex === i && (
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Geo Grounding Footer CTA */}
        <section className="py-24 bg-secondary-dark text-white text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-8">Precisa de uma Lavagem Profissional?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Atendemos todo o <strong>Centro de Osasco</strong>, <strong>Km 18</strong>, <strong>Alphaville</strong> e região. <br />
              Sua busca por "lavanderia perto de mim" termina aqui na Inovata.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={`https://wa.me/${CONTACT.whatsapp}`} className="bg-primary-gold text-secondary-dark px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-white transition-all btn-premium">
                PEDIR COLETA AGORA
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
