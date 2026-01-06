import React from 'react';
import { Shirt, Snowflake, Droplets, Truck, CheckCircle, HelpCircle, Footprints, Armchair, Baby, Sparkles, ShieldCheck, Clock, Sun } from 'lucide-react';
import { CONTACT } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const Services: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Laundry Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Lavanderia Inovata",
      "telephone": CONTACT.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT.address,
        "addressLocality": "Osasco",
        "addressRegion": "SP"
      }
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -23.5329,
        "longitude": -46.7919
      },
      "geoRadius": "15000"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços Inovata",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lavagem de Tênis" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lavagem de Roupas Sociais" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Higienização de Estofados" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpeza de Tapetes" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Higienização de Carrinho de Bebê" } }
        ]
    }
  };

  return (
    <>
      <EnhancedSEO 
        title="Serviços Premium de Lavanderia | Tênis, Roupas, Tapetes e Baby | Inovata"
        description="Conheça nossos processos detalhados de lavagem. Especialistas em clareamento de tênis, higienização de carrinhos de bebê, tapetes persas e roupas finas."
        structuredData={schemaData}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Serviços', item: '/servicos' }
        ]}
      />

      <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-secondary-dark mb-6">Excelência em Cada Detalhe</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Na Lavanderia Inovata, não apenas limpamos; nós restauramos, higienizamos e prolongamos a vida útil dos seus itens mais queridos com tecnologia e processos artesanais.
            </p>
          </div>

          {/* SECTION 1: TÊNIS E CALÇADOS */}
          <section className="mb-24 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-orange-600 font-bold mb-4 bg-orange-50 px-4 py-2 rounded-full w-fit">
                  <Footprints size={20} /> SPA de Calçados
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark mb-6">Renovação Total para Seus Tênis</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Seus calçados merecem um tratamento VIP. Nosso processo de lavagem de tênis combina técnicas manuais com produtos específicos para cada material, garantindo limpeza profunda sem danos.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Materiais que Tratamos:</h3>
                    <div className="flex flex-wrap gap-3">
                      {['Couro Liso', 'Camurça & Nobuck', 'Tecido & Mesh', 'Sintético', 'Lona'].map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-gray-200">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">O Processo Inclui:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} />
                        <div>
                          <strong className="block text-gray-800">Limpeza Artesanal:</strong>
                          <span className="text-gray-600 text-sm">Escovação manual específica para preservar texturas delicadas como camurça.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} />
                        <div>
                          <strong className="block text-gray-800">Clareamento de Solados:</strong>
                          <span className="text-gray-600 text-sm">Remoção da oxidação (amarelado) das bordas de borracha.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a href={`https://wa.me/${CONTACT.whatsapp}?text=Quero lavar meus tênis! (Origem: Página Serviços - Tênis)`} className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors btn-premium shadow-lg">
                       Renovar Meus Tênis Agora
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative h-96 lg:h-auto bg-gray-100">
                {/* Image: Close up of sneakers being cleaned or clean sneakers */}
                <img 
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Tênis limpos e renovados - Lavanderia de Tênis" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-end p-8">
                  <p className="text-white font-bold text-xl">Deixe seus sneakers novos de novo.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: ROUPAS E TÊXTEIS */}
          <section className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                 {/* Image: Ironing or stack of folded shirts */}
                 <img 
                   src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop" 
                   alt="Roupas sendo passadas a ferro com perfeição" 
                   className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                   <div className="flex items-center gap-3 mb-2">
                     <Clock className="text-primary-gold" />
                     <span className="font-bold text-secondary-dark">Economize Tempo</span>
                   </div>
                   <p className="text-xs text-gray-600">O brasileiro gasta em média 4h por semana lavando e passando. Deixe isso com a gente!</p>
                 </div>
               </div>

               <div className="order-1 lg:order-2">
                 <div className="inline-flex items-center gap-2 text-primary-blue font-bold mb-4 bg-blue-50 px-4 py-2 rounded-full w-fit">
                    <Shirt size={20} /> Vestuário Premium
                 </div>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-dark mb-6">Cuidado Têxtil Completo</h2>
                 <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                   Mais do que apenas lavar, nós cuidamos das fibras do tecido. Utilizamos processos que evitam o desbotamento, encolhimento e desgaste precoce das suas peças favoritas.
                 </p>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                   <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-primary-blue transition-colors">
                     <h4 className="font-bold text-secondary-dark mb-2 flex items-center gap-2">
                       <Droplets size={18} className="text-blue-500"/> Lavagem Wet & Dry
                     </h4>
                     <p className="text-sm text-gray-600">Tecnologia Wet Cleaning para peças delicadas e Lavagem a Seco para ternos e vestidos de festa.</p>
                   </div>
                   <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-primary-blue transition-colors">
                     <h4 className="font-bold text-secondary-dark mb-2 flex items-center gap-2">
                       <Sparkles size={18} className="text-yellow-500"/> Tira-Manchas
                     </h4>
                     <p className="text-sm text-gray-600">Pré-tratamento artesanal de colarinhos, punhos e manchas específicas.</p>
                   </div>
                 </div>

                 <div className="mt-8">
                     <a href={`https://wa.me/${CONTACT.whatsapp}?text=Preciso lavar e passar minhas roupas. (Origem: Página Serviços - Roupas)`} className="inline-block bg-primary-blue text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors btn-premium shadow-lg">
                        Agendar Coleta de Roupas
                     </a>
                  </div>
               </div>
            </div>
          </section>

          {/* SECTION 3: TAPETES E CORTINAS */}
          <section className="mb-24 bg-secondary-dark rounded-3xl overflow-hidden text-white relative">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12">
                   <div className="inline-flex items-center gap-2 text-teal-300 font-bold mb-4 bg-white/10 px-4 py-2 rounded-full w-fit backdrop-blur-md">
                      <Armchair size={20} /> Casa & Decor
                   </div>
                   <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Tapetes e Cortinas: Higiene Profunda</h2>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                     Itens de decoração acumulam poeira e ácaros invisíveis. Nossa lavagem especializada recupera as cores vivas e elimina agentes alergênicos, melhorando a qualidade do ar da sua casa.
                   </p>

                   <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-primary-gold mb-4">Tapetes (Processo 5 Etapas)</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start gap-3">
                            <span className="bg-white/10 p-1 rounded mt-1"><CheckCircle size={14}/></span>
                            <span><strong>1. Remoção de Poeira:</strong> Batimento mecânico para remover terra profunda.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="bg-white/10 p-1 rounded mt-1"><CheckCircle size={14}/></span>
                            <span><strong>2. Lavagem Bactericida:</strong> Imersão e escovação rotativa.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="bg-white/10 p-1 rounded mt-1"><CheckCircle size={14}/></span>
                            <span><strong>3. Secagem em Estufa:</strong> Previne odores e preserva as fibras.</span>
                          </li>
                        </ul>
                      </div>
                   </div>
                   <div className="mt-8">
                     <a href={`https://wa.me/${CONTACT.whatsapp}?text=Orçamento para tapetes e cortinas (Origem: Página Serviços - Tapetes)`} className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition-colors btn-premium shadow-lg">
                        Limpar Meus Tapetes
                     </a>
                  </div>
                </div>
                <div className="relative h-96 lg:h-auto">
                   {/* Image: Living room with clean rug or curtain */}
                   <img 
                    src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sala de estar limpa com tapete higienizado" 
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                   />
                </div>
             </div>
          </section>

          {/* SECTION 4: BABY E INFANTIL */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 md:p-12 border border-pink-100 shadow-lg">
               <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 text-pink-600 font-bold mb-4 bg-white px-4 py-2 rounded-full w-fit shadow-sm">
                        <Baby size={20} /> Linha Baby & Kids
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">Segurança e Carinho para seu Bebê</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      Sabemos que a pele do bebê é sensível. Por isso, nossa linha infantil utiliza exclusivamente <strong>produtos hipoalergênicos e testados dermatologicamente</strong>.
                    </p>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
                      <h3 className="font-bold text-lg text-pink-600 mb-3">Carrinhos e Bebê Conforto</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Desmontamos todas as partes removíveis para higienização completa. Realizamos lavagem por extração no estofado fixo para remover restos de leite, comida e sujeira.
                      </p>
                    </div>
                    
                    <div>
                        <a href={`https://wa.me/${CONTACT.whatsapp}?text=Preciso higienizar o carrinho do bebê. (Origem: Página Serviços - Baby)`} className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors btn-premium shadow-lg">
                           Higienizar Carrinho de Bebê
                        </a>
                    </div>
                  </div>

                  <div className="md:w-1/2 flex flex-col justify-center items-center">
                     <div className="grid grid-cols-2 gap-4 w-full">
                        {/* Image: Baby Stroller */}
                        <img 
                           src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1770&auto=format&fit=crop" 
                           className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-500 w-full h-48 object-cover" 
                           alt="Carrinho de Bebê Higienizado"
                        />
                        {/* Image: Plush Toy - Fixed Broken Link */}
                        <img 
                           src="https://images.unsplash.com/photo-1555445054-d98c281e57c8?q=80&w=500&auto=format&fit=crop" 
                           className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-500 translate-y-8 w-full h-48 object-cover" 
                           alt="Ursinho de Pelúcia Limpo"
                        />
                     </div>
                     <div className="mt-12 text-center">
                        <p className="font-heading font-bold text-2xl text-pink-400">"Cuidado de mãe,<br/>profissionalismo Inovata."</p>
                     </div>
                  </div>
               </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href={`https://wa.me/${CONTACT.whatsapp}?text=Gostaria de saber mais sobre os serviços de lavanderia. (Origem: CTA Final Serviços)`} 
              className="inline-block bg-primary-gold text-secondary-dark px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:bg-secondary-dark hover:text-primary-gold transition-all transform hover:-translate-y-1 btn-premium"
            >
              Solicitar Orçamento Agora
            </a>
          </div>

        </div>
      </main>
    </>
  );
};

export default Services;