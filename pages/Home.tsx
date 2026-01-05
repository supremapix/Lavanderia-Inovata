import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import { NEIGHBORHOODS, SERVICES_DATA, HOME_TYPEWRITER_TEXTS, CONTACT } from '../constants';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LaundryService",
    "name": "Lavanderia Inovata",
    "image": "https://images.unsplash.com/photo-1521656693072-a8333f629688",
    "@id": "https://lavanderiainovata.vercel.app",
    "url": "https://lavanderiainovata.vercel.app",
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
    "areaServed": NEIGHBORHOODS.map(n => n.name),
    "sameAs": [
      "https://www.instagram.com/lavanderiainovata",
      "https://www.facebook.com/lavanderiainovata"
    ]
  };

  return (
    <>
      <EnhancedSEO 
        title="Lavanderia em Osasco | Tênis, Tapetes, Sofás e Roupas | Delivery Rápido"
        description="Lavanderia completa em Osasco: Roupas, Tênis, Tapetes, Cortinas, Estofados e Carrinhos de Bebê. Delivery rápido 15km. Qualidade Premium e preço justo!"
        structuredData={schemaData}
        type="business.business"
      />

      <main className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1521656693072-a8333f629688?q=80&w=2070&auto=format&fit=crop" 
              alt="Lavanderia Background" 
              className="w-full h-full object-cover animate-pulse-slow" 
            />
            <div className="absolute inset-0 bg-gradient-hero"></div>
          </div>
          
          {/* Particles */}
          <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-float" style={{ animationDelay: '0s' }}></div>
             <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
             <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary-gold rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-4 z-10 text-center text-white mt-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight min-h-[120px] md:min-h-[160px]">
              <Typewriter texts={HOME_TYPEWRITER_TEXTS} />
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-lg mb-10 text-gray-200">
              <span className="flex items-center gap-2"><span className="text-primary-gold">🧺</span> Roupas • Tênis • Estofados</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-2"><span className="text-primary-gold">⭐</span> Tapetes • Cortinas • Carrinhos de Bebê</span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/5511921691307?text=Olá! Gostaria de um orçamento para lavanderia." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-gradient-gold text-secondary-dark px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-primary-gold/50 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                💬 ORÇAMENTO RÁPIDO
              </a>
              <Link 
                to="/#bairros"
                onClick={() => {
                   document.getElementById('bairros')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full md:w-auto border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/20"
              >
                📍 VER ÁREA DE ATENDIMENTO
              </Link>
            </div>

            {/* Floating Badges */}
            <div className="hidden lg:flex absolute bottom-10 left-0 right-0 justify-center gap-8">
               {['✅ Delivery Grátis acima de R$50', '👟 Especialista em Tênis', '🛋️ Higienização de Estofados', '🏆 Qualidade Premium'].map((badge, idx) => (
                 <div key={idx} className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-sm font-medium animate-float" style={{ animationDelay: `${idx * 0.5}s` }}>
                   {badge}
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicos" className="py-20 bg-secondary-dark relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 group animate-on-scroll opacity-0 translate-y-10"
                  style={{ transitionDelay: `${idx * 100}ms` }}
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
                  <a href="https://wa.me/5511921691307" className="inline-block w-full text-center py-3 border border-primary-gold/30 text-primary-gold rounded-xl font-semibold hover:bg-primary-gold hover:text-secondary-dark transition-colors duration-300">
                    Solicitar
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/servicos" className="inline-flex items-center gap-2 text-white hover:text-primary-gold font-bold transition-colors">
                Ver todos os serviços e detalhes <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
             <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="text-primary-blue text-lg font-bold uppercase tracking-wider mb-2">Como Funciona</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark">Lavanderia sem sair de casa</h3>
            </div>

            <div className="relative">
              {/* Line Connector (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-gold to-transparent opacity-30"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {[
                  { step: 1, title: 'SOLICITE', desc: 'Agende a coleta de suas roupas, tênis, tapetes ou estofados.', icon: '📱' },
                  { step: 2, title: 'COLETAMOS', desc: 'Buscamos em sua casa (ou realizamos o serviço in-loco para estofados).', icon: '🚚' },
                  { step: 3, title: 'ENTREGAMOS', desc: 'Receba tudo limpo e higienizado em até 48h.', icon: '✨' },
                ].map((item, idx) => (
                   <div key={item.step} className="text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000" style={{ transitionDelay: `${idx * 200}ms` }}>
                      <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-4xl shadow-xl mb-6 relative group">
                        <span className="group-hover:scale-110 transition-transform duration-300 block">{item.icon}</span>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-gold rounded-full flex items-center justify-center text-secondary-dark font-bold text-sm">
                          {item.step}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-secondary-dark mb-2 font-heading">{item.title}</h4>
                      <p className="text-gray-600 max-w-xs mx-auto">{item.desc}</p>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NEIGHBORHOODS */}
        <section id="bairros" className="py-20 bg-white" ref={scrollRef}>
          <div className="container mx-auto px-4">
             <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="text-primary-blue text-lg font-bold uppercase tracking-wider mb-2">Área de Atendimento</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark">Atendemos Osasco e Região (Raio 15km)</h3>
              <p className="mt-4 text-gray-500">Confira se atendemos sua região na lista abaixo:</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {NEIGHBORHOODS.map((hood) => (
                <div 
                  key={hood.id} 
                  className="group flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white hover:border-primary-blue hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <div className="p-2 rounded-full bg-blue-50 group-hover:bg-primary-blue transition-colors duration-300">
                    <MapPin size={18} className="text-primary-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-700 group-hover:text-primary-blue transition-colors">{hood.name}</span>
                    <span className="text-[10px] uppercase text-gray-400 font-bold">{hood.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8">
              Deixe o trabalho pesado com a gente!
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Seus tênis, tapetes, cortinas e roupas em boas mãos. Aproveite nosso delivery grátis* e ganhe tempo livre.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.me/5511921691307?text=Quero lavar meus tênis e roupas!" 
                className="bg-white text-primary-blue px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
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