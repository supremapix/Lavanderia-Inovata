import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { NEIGHBORHOODS, SERVICES_DATA, HOME_TYPEWRITER_TEXTS, CONTACT, HOME_FAQ } from '../constants';
import { ArrowRight, CheckCircle, MapPin, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

// High-quality images for the slider
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop", // Professional Ironing/Steam
  "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=2070&auto=format&fit=crop", // Modern Washing Machine Detail
];

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bubbles, setBubbles] = useState<Array<{ id: number; left: string; size: string; duration: string; sway: string; delay: string }>>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Dynamic CTA State
  const [ctaState, setCtaState] = useState({
    primaryText: "💬 ORÇAMENTO RÁPIDO",
    primaryUrl: `https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de um orçamento para lavanderia. (Origem: Home Hero)`,
    secondaryText: "📍 VER ÁREA DE ATENDIMENTO",
    showPrices: false
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Check Time of Day for Dynamic CTA
  useEffect(() => {
    // Prevent time-based updates during prerender to match initial state
    if (typeof navigator !== 'undefined' && /HeadlessChrome/.test(navigator.userAgent)) return;

    const updateCTA = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); // 0 = Sunday, 6 = Saturday
      
      // Business Logic: Mon-Fri 8-18, Sat 9-13
      const isWeekDay = day >= 1 && day <= 5;
      const isSaturday = day === 6;
      const isWorkingHours = (isWeekDay && hour >= 8 && hour < 18) || (isSaturday && hour >= 9 && hour < 13);

      if (isWorkingHours) {
        // High Urgency Mode
        setCtaState({
          primaryText: "⚡ ORÇAMENTO EM 2 MIN",
          primaryUrl: `https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de um orçamento agora (Atendimento Online). (Origem: Home Hero - Horário Comercial)`,
          secondaryText: "📍 ATENDEMOS SEU BAIRRO?",
          showPrices: false
        });
      } else {
        // Retention/Research Mode (Night/Sunday)
        setCtaState({
          primaryText: "🌙 AGENDAR PARA AMANHÃ",
          primaryUrl: `https://wa.me/${CONTACT.whatsapp}?text=Olá! Gostaria de deixar agendada uma coleta para o próximo horário disponível. (Origem: Home Hero - Fora de Horário)`,
          secondaryText: "💲 VER TABELA DE PREÇOS",
          showPrices: true
        });
      }
    };

    updateCTA();
    const interval = setInterval(updateCTA, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Initialize bubbles with random properties
  useEffect(() => {
    // Prevent random bubble generation during prerender to avoid hydration mismatch
    // (Client initial state is [], Prerender state was [bubbles]. Mismatch.)
    if (typeof navigator !== 'undefined' && /HeadlessChrome/.test(navigator.userAgent)) return;

    const bubbleCount = 18;
    const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 50 + 20}px`,
      duration: `${Math.random() * 6 + 10}s`, // Slower, more floaty
      sway: `${Math.random() * 150 - 75}px`,
      delay: `${Math.random() * 10}s` // Random delay to stagger appearance
    }));
    setBubbles(newBubbles);
  }, []);

  // Background Slider Logic
  useEffect(() => {
    // Prevent slider updates in prerender
    if (typeof navigator !== 'undefined' && /HeadlessChrome/.test(navigator.userAgent)) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Handle scrolling to hash if present in URL
    if (location.hash === '#bairros') {
       setTimeout(() => {
         document.getElementById('bairros')?.scrollIntoView({ behavior: 'smooth' });
       }, 100);
    }
  }, [location]);

  useEffect(() => {
    // CRITICAL FIX: Prevent IntersectionObserver from modifying DOM during prerender.
    // Puppeteer would add 'in-view' class, but Client initial render wouldn't have it, causing Hydration Error #525.
    if (typeof navigator !== 'undefined' && /HeadlessChrome/.test(navigator.userAgent)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Optimized LocalBusiness Schema for Laundry Service
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LaundryService",
    "@id": "https://lavanderiainovata.vercel.app",
    "name": "Lavanderia Inovata",
    "image": [
      "https://lavanderiainovata.vercel.app/logo.png",
      ...HERO_IMAGES
    ],
    "logo": "https://lavanderiainovata.vercel.app/logo.png",
    "url": "https://lavanderiainovata.vercel.app",
    "telephone": CONTACT.phone,
    "email": CONTACT.email,
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Pix",
    "currenciesAccepted": "BRL",
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
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": -23.5329,
          "longitude": -46.7919
        },
        "geoRadius": "15000"
      },
      ...NEIGHBORHOODS.map(n => ({
          "@type": "Place",
          "name": n.name,
          "address": {
              "@type": "PostalAddress",
              "addressLocality": n.city,
              "addressRegion": "SP"
          }
      }))
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/lavanderiainovata",
      "https://www.facebook.com/lavanderiainovata"
    ],
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://wa.me/${CONTACT.whatsapp}?text=Gostaria de agendar uma coleta`,
        "inLanguage": "pt-BR",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "result": {
        "@type": "Service",
        "name": "Lavanderia Delivery"
      }
    }
  };

  return (
    <>
      <EnhancedSEO 
        title="Lavanderia Inovata Osasco | Delivery de Tênis, Tapetes e Roupas"
        description="Lavanderia Premium em Osasco e Região. Lavamos Tênis, Tapetes, Cortinas, Sofás e Roupas Finas. Delivery Grátis*. Agende sua coleta pelo WhatsApp agora!"
        structuredData={schemaData}
        type="business.business"
      />

      <main className="overflow-x-hidden">
        {/* HERO SECTION WITH PREMIUM SLIDER & BUBBLES */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          
          {/* Background Slider */}
          <div className="absolute inset-0 z-0 bg-secondary-dark">
            {HERO_IMAGES.map((img, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Lavanderia Inovata - Serviço Profissional ${index + 1}`} 
                  className="w-full h-full object-cover transform scale-105 animate-pulse-slow" 
                  style={{ animationDuration: '10s' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1521656693072-a8333f629688?q=80&w=2070&auto=format&fit=crop";
                  }}
                />
              </div>
            ))}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-hero z-10"></div>
          </div>
          
          {/* REALISTIC SOAP BUBBLES */}
          <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            {bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className="soap-bubble"
                style={{
                  left: bubble.left,
                  width: bubble.size,
                  height: bubble.size,
                  animationDelay: bubble.delay, // Use random delay for natural distribution
                  '--bubble-duration': bubble.duration,
                  '--sway': bubble.sway,
                } as React.CSSProperties}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 z-20 text-center text-white mt-16 fade-up relative">
            {/* Eyebrow Title */}
            <div className="inline-block mb-4 animate-fade-in-down">
               <span className="text-primary-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                 Lavanderia Inovata & Delivery
               </span>
            </div>

            {/* Main Typewriter Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black mb-6 leading-tight min-h-[100px] md:min-h-[140px] drop-shadow-2xl">
              <Typewriter texts={HOME_TYPEWRITER_TEXTS} />
            </h1>
            
            {/* Descriptive Subtext - Desktop focused */}
            <p className="hidden md:block text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              A solução completa de limpeza para sua casa e família em Osasco. 
              Tecnologia de ponta, produtos biodegradáveis e a conveniência de buscar e entregar na sua porta.
            </p>

            {/* Service Badges */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base mb-10 text-gray-100 font-medium drop-shadow-md">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-default"><span className="text-primary-gold">🧺</span> Roupas & Tênis</span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-default"><span className="text-primary-gold">🛋️</span> Sofás & Estofados</span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-default"><span className="text-primary-gold">⭐</span> Tapetes & Cortinas</span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-default"><span className="text-primary-gold">👶</span> Carrinhos & Ursinhos</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <a 
                href={ctaState.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-gradient-gold text-secondary-dark px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:scale-105 transition-all duration-300 animate-pulse-glow btn-premium flex items-center justify-center gap-2"
              >
                {ctaState.primaryText}
              </a>
              
              {ctaState.showPrices ? (
                <Link
                  to="/precos"
                  className="w-full md:w-auto border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/20 flex items-center justify-center gap-2"
                >
                  {ctaState.secondaryText}
                </Link>
              ) : (
                <button
                  onClick={() => {
                     document.getElementById('bairros')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full md:w-auto border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/20 flex items-center justify-center gap-2"
                >
                  {ctaState.secondaryText}
                </button>
              )}
            </div>

            {/* Floating Badges - Desktop Only */}
            <div className="hidden lg:flex absolute -bottom-16 left-0 right-0 justify-center gap-6 pointer-events-none">
               {['✅ Delivery Grátis acima de R$250', '👟 Especialista em Tênis', '🛋️ Higienização de Estofados', '🏆 Qualidade Premium'].map((badge, idx) => (
                 <div key={idx} className="bg-secondary-dark/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 text-xs font-bold text-gray-300 uppercase tracking-wide animate-float shadow-lg" style={{ animationDelay: `${idx * 0.5}s` }}>
                   {badge}
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicos" className="py-20 bg-secondary-dark relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-up">
              <h2 className="text-primary-gold text-lg font-bold uppercase tracking-wider mb-2">Nossos Serviços</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">Muito Mais Que Só Roupas</h3>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Oferecemos soluções completas de limpeza e higienização. De tênis a estofados, cuidamos de tudo para você.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {SERVICES_DATA.map((service, idx) => (
                <div 
                  key={service.id} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 group fade-up"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="mb-6 transform group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out inline-block">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 font-heading">{service.title}</h4>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle size={14} className="text-primary-gold" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/5511921691307?text=Olá, tenho interesse no serviço de ${service.title}. (Origem: Cards de Serviço Home)`} className="inline-block w-full text-center py-3 border border-primary-gold/30 text-primary-gold rounded-xl font-semibold hover:bg-primary-gold hover:text-secondary-dark transition-colors duration-300">
                    Solicitar
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center fade-up" style={{ transitionDelay: '600ms' }}>
              <Link to="/servicos" className="inline-flex items-center gap-2 text-white hover:text-primary-gold font-bold transition-colors">
                Ver todos os serviços e detalhes <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
             <div className="text-center mb-16 fade-up">
              <h2 className="text-primary-blue text-lg font-bold uppercase tracking-wider mb-2">Como Funciona</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark">Lavanderia sem sair de casa</h3>
            </div>

            <div className="relative">
              {/* Line Connector (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent opacity-30 fade-up"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {[
                  { 
                    step: 1, 
                    title: 'SOLICITE', 
                    desc: 'Entre em contato pelo nosso WhatsApp ou telefone. Nossa equipe fará um orçamento personalizado na hora e agendará a retirada no melhor horário para sua rotina.', 
                    icon: '📱' 
                  },
                  { 
                    step: 2, 
                    title: 'COLETAMOS', 
                    desc: 'Buscamos suas peças em casa com total segurança. Fazemos o check-in detalhado dos itens e, para estofados, nossa equipe especializada vai até você com equipamentos de ponta.', 
                    icon: '🚚' 
                  },
                  { 
                    step: 3, 
                    title: 'ENTREGAMOS', 
                    desc: 'Receba tudo limpo, passado e embalado em até 48 horas*. Suas roupas voltam macias, cheirosas e prontas para uso, com a qualidade que só a Inovata oferece.', 
                    icon: '✨' 
                  },
                ].map((item, idx) => (
                   <div key={item.step} className="text-center fade-up" style={{ transitionDelay: `${idx * 250}ms` }}>
                      <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-4xl shadow-xl mb-6 relative group">
                        <span className="group-hover:scale-110 transition-transform duration-300 block">{item.icon}</span>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center text-secondary-dark font-bold text-sm">
                          {item.step}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-secondary-dark mb-2 font-heading">{item.title}</h4>
                      <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">{item.desc}</p>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION (NEW) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12 fade-up">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full shadow-sm text-primary-blue mb-4">
                <HelpCircle size={20} />
                <span className="font-bold text-sm uppercase">Dúvidas Frequentes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark">Tudo sobre a Lavanderia Inovata</h2>
            </div>

            <div className="space-y-4 fade-up">
              {HOME_FAQ.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-white hover:bg-gray-50 transition-colors group"
                  >
                    <span className="font-bold text-lg text-gray-800 group-hover:text-primary-blue transition-colors">{faq.question}</span>
                    <div className={`p-2 rounded-full transition-colors ${openFaqIndex === index ? 'bg-primary-gold text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {openFaqIndex === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS */}
        <section id="bairros" className="py-20 bg-gray-50" ref={scrollRef}>
          <div className="container mx-auto px-4">
             <div className="text-center mb-16 fade-up">
              <h2 className="text-primary-blue text-lg font-bold uppercase tracking-wider mb-2">Área de Atendimento</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark">Atendemos Osasco e Região (Raio 15km)</h3>
              <p className="mt-4 text-gray-500">Confira se atendemos sua região na lista abaixo:</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {NEIGHBORHOODS.map((hood, idx) => (
                <Link 
                  to={`/lavanderia/${hood.slug}`}
                  key={hood.id} 
                  className="group flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white hover:border-primary-blue hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer fade-up"
                  style={{ transitionDelay: `${(idx % 10) * 50}ms` }}
                >
                  <div className="p-2 rounded-full bg-blue-50 group-hover:bg-primary-blue transition-colors duration-300">
                    <MapPin size={18} className="text-primary-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-700 group-hover:text-primary-blue transition-colors">{hood.name}</span>
                    <span className="text-[10px] uppercase text-gray-400 font-bold">{hood.city}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center fade-up">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8">
              Deixe o trabalho pesado com a gente!
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Seus tênis, tapetes, cortinas e roupas em boas mãos. Aproveite nosso delivery grátis* e ganhe tempo livre.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.me/5511921691307?text=Quero lavar meus tênis e roupas! (Origem: CTA Final Home)" 
                className="bg-white text-primary-blue px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 btn-premium"
              >
                Solicitar Coleta Agora
                <ArrowRight size={20} />
              </a>
               <a 
                href="tel:1136831307" 
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Ligar (11) 3683-1307
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;