import React from 'react';
import { Star, Users, Award, ShieldCheck, MapPin } from 'lucide-react';
import { CONTACT } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const About: React.FC = () => {
  // Centralized Prerender Check
  const isPrerender = typeof window !== 'undefined' && (
    (window as any).__PRERENDER__ === true || 
    /HeadlessChrome/.test(navigator.userAgent)
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Lavanderia Inovata",
      "foundingDate": "2010",
      "description": "Lavanderia profissional em Osasco focada em qualidade e delivery.",
      "address": CONTACT.address
    }
  };

  return (
    <>
      <EnhancedSEO 
        title="Sobre Nós | Lavanderia Inovata - Tradição e Qualidade em Osasco"
        description="Conheça a história da Lavanderia Inovata. Mais de 15 anos cuidando das roupas de Osasco com carinho, tecnologia e responsabilidade ambiental."
        structuredData={schemaData}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Sobre Nós', item: '/sobre' }
        ]}
      />

      <main className="pt-24 pb-20 bg-white min-h-screen">
        {/* Hero About */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-secondary-dark mb-6">Nossa História</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A Lavanderia Inovata nasceu com um propósito simples: devolver o tempo livre para as famílias de Osasco, cuidando de uma das tarefas domésticas mais trabalhosas com excelência profissional.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-gold/20 text-primary-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualidade Premium</h3>
                <p className="text-gray-600">Processos rigorosos de lavagem e passadoria para garantir o melhor resultado.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-100 text-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Equipe Experiente</h3>
                <p className="text-gray-600">Profissionais treinados para identificar e tratar cada tipo de tecido adequadamente.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustentabilidade</h3>
                <p className="text-gray-600">Uso consciente de água e produtos biodegradáveis que não agridem o meio ambiente.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Garantia</h3>
                <p className="text-gray-600">Satisfação garantida ou refazemos o serviço. Seu feedback é nossa evolução.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Storefront Section - Premium Design */}
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-16 overflow-visible">
            
            {/* Image Side with Premium Effects */}
            <div className="md:w-1/2 relative group perspective-1000">
               {/* Ambient Glow Background */}
               <div className="absolute -inset-6 bg-gradient-to-tr from-primary-gold/30 via-primary-blue/30 to-purple-500/30 rounded-full blur-3xl opacity-70 animate-pulse-glow"></div>
               
               {/* Image Container */}
               <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border-8 border-white transform transition-all duration-700 hover:rotate-1 hover:scale-[1.01] bg-secondary-dark min-h-[400px]">
                 
                 {/* CSS Emulation of Storefront (Visible if image fails) */}
                 <div className="absolute inset-0 flex flex-col pointer-events-none">
                    {/* Upper Facade: Blue Tiles */}
                    <div className="h-[45%] bg-[#1E3A8A] relative w-full flex items-center justify-center overflow-hidden">
                        {/* Tiles Pattern */}
                        <div className="absolute inset-0 opacity-30" style={{
                            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(255,255,255,0.3) 30px),
                                              repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.3) 50px)`
                        }}></div>
                        {/* Balcony/Windows abstract */}
                        <div className="w-[80%] h-[60%] border-4 border-blue-400/30 bg-black/20 backdrop-blur-sm rounded-sm"></div>
                    </div>
                    
                    {/* Orange Signage Band */}
                    <div className="h-[15%] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 flex items-center justify-center shadow-lg relative z-20">
                        <div className="flex flex-col items-center">
                            <h3 className="text-white font-black text-2xl tracking-tighter leading-none drop-shadow-md">LAVANDERIA</h3>
                            <div className="flex items-center gap-2 text-white/90 text-[10px] tracking-[0.2em] font-bold">
                                <span>INOVATA</span>
                                <span className="text-yellow-400 text-[8px]">★★★★★★</span>
                            </div>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 text-white text-[9px] px-1 rounded font-mono">N 209</div>
                    </div>

                    {/* Ground Floor */}
                    <div className="h-[40%] bg-slate-800 relative w-full flex">
                        {/* Left Gate */}
                        <div className="w-[25%] bg-slate-700 border-r border-slate-600 relative">
                             <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 5px, #000 6px)'}}></div>
                        </div>
                        {/* Main Entrance */}
                        <div className="flex-1 bg-black/40 shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)] relative">
                            <div className="absolute top-4 left-4 text-white/50 text-xs font-light">
                                <div className="flex flex-col gap-1">
                                    <span>Lavar/Passar</span>
                                    <span>A Seco e Úmidos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Vehicles Abstract - Delivery Van */}
                    <div className="absolute bottom-4 right-8 w-48 h-28 z-30 transform hover:scale-105 transition-transform duration-500">
                         {/* Van Body */}
                         <div className="w-full h-full bg-white rounded-xl shadow-xl border-b-4 border-gray-300 relative overflow-hidden">
                             <div className="absolute top-2 left-2 w-16 h-12 bg-blue-900 rounded-lg skew-x-[-10deg] ml-2"></div>
                             <div className="absolute top-4 right-4 text-right">
                                 <div className="text-blue-900 font-black text-sm leading-none">LAVANDERIA</div>
                                 <div className="text-orange-500 font-bold text-xs">INOVATA</div>
                             </div>
                             {/* Wheel */}
                             <div className="absolute bottom-2 left-8 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-400"></div>
                             <div className="absolute bottom-2 right-8 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-400"></div>
                         </div>
                    </div>

                    {/* Red Car Abstract */}
                    <div className="absolute bottom-2 left-4 w-40 h-20 z-20 opacity-90 transform translate-y-2">
                        <div className="w-full h-full bg-red-700 rounded-tl-[2rem] rounded-tr-lg shadow-lg relative">
                             <div className="absolute top-2 left-4 w-20 h-8 bg-black/30 rounded-tl-xl skew-x-[-20deg]"></div>
                             <div className="absolute bottom-2 left-6 w-7 h-7 bg-black rounded-full border-2 border-gray-500"></div>
                             <div className="absolute bottom-2 right-6 w-7 h-7 bg-black rounded-full border-2 border-gray-500"></div>
                        </div>
                    </div>
                 </div>

                 <img 
                   src="/fachada-loja.jpg" 
                   alt="Fachada Moderna da Lavanderia Inovata em Osasco com Veículo de Entrega" 
                   className="w-full h-full object-cover relative z-10"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                   }}
                 />
                 
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 via-secondary-dark/20 to-transparent opacity-60 z-20 pointer-events-none"></div>

                 {/* Glassmorphism Info Card */}
                 <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-30">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary-gold p-3 rounded-xl text-secondary-dark shadow-lg">
                                 <MapPin size={24} strokeWidth={2.5} />
                            </div>
                            <div className="text-left">
                                 <p className="text-[10px] text-primary-gold uppercase tracking-[0.2em] font-bold mb-1">NOSSA LOJA</p>
                                 <p className="text-white font-bold text-lg md:text-xl leading-none">Av. César Abraão, 209</p>
                            </div>
                        </div>
                    </div>
                 </div>
               </div>

               {/* Floating Badge */}
               <div className="absolute -top-4 -right-4 z-40 bg-secondary-dark text-white w-28 h-28 rounded-full flex flex-col items-center justify-center font-bold text-center shadow-xl border-4 border-white animate-float">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">Desde</span>
                  <span className="text-3xl text-primary-gold font-heading leading-none">2010</span>
                  <div className="w-8 h-1 bg-primary-gold rounded-full mt-1"></div>
               </div>
            </div>

            {/* Text Side */}
            <div className="md:w-1/2">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary-blue text-sm font-bold mb-6 border border-blue-100">
                  <ShieldCheck size={16} /> TRADIÇÃO E MODERNIDADE
               </div>
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary-dark mb-6 leading-tight">
                 Infraestrutura Completa para <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-gold">Cuidar de Você</span>
               </h2>
               
               <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                 Localizada estrategicamente na <strong>Av. César Abraão, 209</strong>, a Inovata se tornou referência em Osasco. Nossa loja física combina equipamentos de última geração com um atendimento humanizado que entende a necessidade de cada cliente.
               </p>
               
               <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                 Entendemos que cada peça de roupa conta uma história: o terno daquela reunião importante, o vestido de festa inesquecível, o edredom que aquece a família. Por isso, tratamos tudo com extremo respeito, utilizando produtos biodegradáveis e técnicas que preservam as fibras.
               </p>

               <div className="flex flex-col sm:flex-row gap-4">
                 <a href={`https://wa.me/${CONTACT.whatsapp}`} className="flex-1 bg-primary-gold text-secondary-dark px-8 py-4 rounded-xl font-bold text-center hover:bg-white hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-gold">
                    Agendar Visita
                 </a>
                 <a href="/servicos" className="flex-1 border-2 border-gray-200 text-gray-600 px-8 py-4 rounded-xl font-bold text-center hover:border-primary-blue hover:text-primary-blue transition-colors">
                    Conhecer Serviços
                 </a>
               </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default About;