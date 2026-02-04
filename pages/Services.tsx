
import React from 'react';
// Fixed: Added Link import from react-router-dom
import { Link } from 'react-router-dom';
import { Shirt, Snowflake, Droplets, Truck, CheckCircle, HelpCircle, Footprints, Armchair, Baby, Sparkles, ShieldCheck, Clock, Sun } from 'lucide-react';
import { CONTACT } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const Services: React.FC = () => {
  const isPrerender = typeof window !== 'undefined' && (
    (window as any).__PRERENDER__ === true || 
    /HeadlessChrome/.test(navigator.userAgent)
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Laundry and Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Lavanderia Inovata",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. César Abraão, 209",
        "addressLocality": "Osasco"
      }
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catálogo de Serviços Inovata",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lavagem de Edredons" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lavagem de Cortinas" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Passadoria Profissional" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lavagem de Tênis Osasco" } }
        ]
    }
  };

  return (
    <>
      <EnhancedSEO 
        title="Lavagem de Edredons, Cortinas e Passadoria em Osasco | Inovata"
        description="Serviços de lavanderia profissional em Osasco. Especialistas em lavagem de cortinas, edredons, tapetes e passadoria de roupas. Delivery rápido!"
        structuredData={schemaData}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Serviços', item: '/servicos' }
        ]}
      />

      <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-24 max-w-4xl mx-auto fade-up">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-secondary-dark mb-8">Nossos Serviços Profissionais</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cuidamos de cada peça com tecnologia de ponta. Sua busca por <strong>lavanderia profissional</strong> e <strong>passadoria profissional</strong> em Osasco termina aqui.
            </p>
          </div>

          {/* Service 1: Clothes & Ironing */}
          <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-up">
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
                <img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1000&auto=format&fit=crop" alt="Passadoria de roupas perto de mim" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                   <span className="bg-primary-gold text-secondary-dark px-4 py-2 rounded-full font-bold text-sm">QUALIDADE PREMIUM</span>
                </div>
             </div>
             <div>
                <div className="inline-flex items-center gap-2 text-primary-blue font-bold mb-4 uppercase tracking-widest text-sm">
                   <Shirt size={20} /> Lavagem e Passadoria
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-secondary-dark mb-8 leading-tight">Passadoria Profissional de Roupas</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Oferecemos o serviço de <strong>passadoria de roupas perto de mim</strong> com o acabamento impecável que só uma <strong>lavanderia profissional</strong> pode proporcionar. Suas peças são higienizadas e passadas with vapor controlado, preservando as fibras e a forma.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle className="text-green-500" /> Passadoria artesanal para camisas sociais
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle className="text-green-500" /> Lavagem de roupas delicadas a seco
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle className="text-green-500" /> Lavanderia delivery: Leva e Traz em Osasco
                  </li>
                </ul>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} className="bg-primary-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary-dark transition-all shadow-xl">
                   Agendar Minha Passadoria
                </a>
             </div>
          </section>

          {/* Service 2: Heavy Items */}
          <section className="mb-24 bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-gray-100 fade-up">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-secondary-dark mb-6">Lavagem de Edredons e Cortinas</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                   Higienização profunda para <strong>cortinas</strong>, <strong>edredons</strong> e <strong>tapetes</strong>. Saúde e bem-estar para sua casa.
                </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-gray-50 p-8 rounded-3xl hover:bg-blue-50 transition-colors">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-blue shadow-sm mb-6">
                      <Droplets size={28} />
                   </div>
                   <h4 className="text-xl font-bold mb-4">Lavagem de Edredons</h4>
                   <p className="text-gray-600 text-sm leading-relaxed mb-6">Secagem em estufa que garante maciez extrema e eliminação de 99.9% dos ácaros e fungos.</p>
                   <Link to="/precos" className="text-primary-blue font-bold text-xs underline">VER PREÇOS EDREDOM</Link>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-3xl hover:bg-blue-50 transition-colors">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-blue shadow-sm mb-6">
                      <Sun size={28} />
                   </div>
                   <h4 className="text-xl font-bold mb-4">Lavagem de Cortinas</h4>
                   <p className="text-gray-600 text-sm leading-relaxed mb-6">Higienização completa para cortinas de todos os tamanhos, com sistema de retirada e recolocação opcional.</p>
                   <Link to="/precos" className="text-primary-blue font-bold text-xs underline">ORÇAMENTO CORTINAS</Link>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl hover:bg-blue-50 transition-colors">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-blue shadow-sm mb-6">
                      <Sparkles size={28} />
                   </div>
                   <h4 className="text-xl font-bold mb-4">Lava Tapete</h4>
                   <p className="text-gray-600 text-sm leading-relaxed mb-6">Serviço de <strong>lava tapete perto de mim</strong> com produtos biodegradáveis e resultados surpreendentes.</p>
                   <Link to="/precos" className="text-primary-blue font-bold text-xs underline">TABELA TAPETES</Link>
                </div>
             </div>
          </section>

          {/* Service 3: Sneakers */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-up mb-24">
             <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-orange-600 font-bold mb-4 uppercase tracking-widest text-sm">
                   <Footprints size={20} /> SPA de Calçados
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-secondary-dark mb-8 leading-tight">Lavagem de Tênis em Osasco</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Seus tênis brancos voltando a ser brancos! Somos a <strong>lavanderia de tenis osasco</strong> referência em clareamento de solados e higienização interna de sneakers premium.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                   <div className="flex items-center gap-3 font-bold text-gray-800">
                      <CheckCircle className="text-orange-500" size={18}/> Limpeza de Sola
                   </div>
                   <div className="flex items-center gap-3 font-bold text-gray-800">
                      <CheckCircle className="text-orange-500" size={18}/> Clareamento
                   </div>
                   <div className="flex items-center gap-3 font-bold text-gray-800">
                      <CheckCircle className="text-orange-500" size={18}/> Higiene Interna
                   </div>
                   <div className="flex items-center gap-3 font-bold text-gray-800">
                      <CheckCircle className="text-orange-500" size={18}/> Fragrância Inovata
                   </div>
                </div>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl">
                   Renovar Meus Tênis
                </a>
             </div>
             <div className="order-1 lg:order-2 relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
                <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop" alt="Lavagem de tênis osasco" className="w-full h-full object-cover" />
             </div>
          </section>

          {/* Final CTA */}
          <section className="bg-primary-gold rounded-[3rem] p-10 md:p-20 text-center fade-up">
             <h2 className="text-3xl md:text-5xl font-heading font-black text-secondary-dark mb-8">Experimente a Qualidade Inovata</h2>
             <p className="text-xl text-secondary-dark/80 mb-12 max-w-2xl mx-auto">
                Não somos apenas mais uma <strong>lavanderia em Osasco</strong>. Somos o parceiro que cuida da sua rotina e da saúde da sua família.
             </p>
             <a href={`https://wa.me/${CONTACT.whatsapp}`} className="bg-secondary-dark text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl">
                PEDIR COLETA AGORA
             </a>
          </section>

        </div>
      </main>
    </>
  );
};

export default Services;
