import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { NEIGHBORHOODS, CONTACT } from '../constants';
import Typewriter from '../components/Typewriter';
import { MapPin, Check, Phone, ArrowLeft, Star, Shield, Clock, Truck, Sparkles, Footprints, Shirt, Armchair, Baby, ArrowRight } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const NeighborhoodPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const neighborhood = NEIGHBORHOODS.find(n => n.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!neighborhood) {
    return <Navigate to="/" replace />;
  }

  const nearbyHoods = NEIGHBORHOODS
    .filter(n => n.city === neighborhood.city && n.id !== neighborhood.id)
    .slice(0, 10); 

  // Dynamic Intro Text
  const getIntroText = () => {
    switch (neighborhood.city) {
      case 'Osasco':
        return `Como uma empresa orgulhosamente de Osasco, a Lavanderia Inovata oferece um atendimento prioritário e expresso para o bairro ${neighborhood.name}. Conhecemos cada rua da região e garantimos a logística mais rápida da cidade.`;
      case 'São Paulo':
        return `A excelência da Lavanderia Inovata chega à Zona Oeste de São Paulo. Moradores do ${neighborhood.name} agora contam com nosso serviço de delivery premium, trazendo a qualidade de lavanderia de alto padrão direto para sua porta.`;
      case 'Barueri':
        return `Atendemos a exigente região de ${neighborhood.city} e ${neighborhood.name} com padrões internacionais de higienização. Especialistas em roupas finas, enxovais de luxo e itens delicados, com a discrição e pontualidade que você merece.`;
      default:
        return `A Lavanderia Inovata expandiu sua área de atuação premium para incluir ${neighborhood.name} em ${neighborhood.city}. Levamos até você a tecnologia mais avançada em limpeza têxtil com a comodidade do serviço leva e traz.`;
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "additionalType": "https://schema.org/LaundryService",
    "name": `Lavanderia Inovata - Atendimento ${neighborhood.name}`,
    "image": "https://lavanderiainovata.vercel.app/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTACT.address,
      "addressLocality": "Osasco",
      "addressRegion": "SP",
      "postalCode": "06268-010",
      "addressCountry": "BR"
    },
    // Main headquarters location
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5329,
      "longitude": -46.7919
    },
    // Specific service area for this page
    "areaServed": {
      "@type": "Place",
      "name": neighborhood.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": neighborhood.city,
        "addressRegion": "SP"
      }
    },
    "url": window.location.href,
    "telephone": "+551136831307",
    "priceRange": "$$",
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Lavanderia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Lavanderia Delivery em ${neighborhood.name}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Lavagem de Tênis em ${neighborhood.name}`
          }
        },
        {
           "@type": "Offer",
           "itemOffered": {
             "@type": "Service",
             "name": `Limpeza de Sofás e Tapetes em ${neighborhood.name}`
           }
         }
      ]
    }
  };

  return (
    <>
      <EnhancedSEO 
        title={`Lavanderia em ${neighborhood.name} | Delivery Premium | Inovata`}
        description={`Procurando Lavanderia em ${neighborhood.name}? Especialistas em Roupas, Tênis, Tapetes e Estofados. Delivery Rápido e Grátis* em ${neighborhood.name}. Confira!`}
        structuredData={schemaData}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Bairros', item: '/#bairros' },
          { name: neighborhood.name, item: `/lavanderia/${neighborhood.slug}` }
        ]}
      />

      <main className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-secondary-dark text-white py-4 border-b border-gray-800 pt-28">
          <div className="container mx-auto px-4 text-sm flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary-gold transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <Link to="/#bairros" className="hover:text-primary-gold transition-colors">Bairros Atendidos</Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">{neighborhood.city}</span>
            <span className="text-gray-600">/</span>
            <span className="text-primary-gold font-semibold">{neighborhood.name}</span>
          </div>
        </div>

        {/* Local Hero Premium */}
        <section className="relative bg-secondary-dark py-20 lg:py-28 overflow-hidden">
           {/* Background Image with Overlay */}
           <div className="absolute inset-0 z-0 opacity-40">
             {/* Use a generic city/delivery or laundry image that fits well behind text */}
             <img 
               src="https://images.unsplash.com/photo-1449824913929-2b3a3e3690c0?q=80&w=2070&auto=format&fit=crop" 
               alt={`Vista aérea ou representativa de ${neighborhood.city}`} 
               className="w-full h-full object-cover"
             />
           </div>
           <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark via-secondary-dark/95 to-secondary-dark/70 z-0"></div>

           <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary-gold text-sm font-bold mb-6 border border-white/10 backdrop-blur-sm animate-pulse-glow">
                  <Truck size={16} /> ATENDIMENTO VIP EM {neighborhood.name.toUpperCase()}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 leading-tight">
                  <span className="block text-2xl md:text-3xl font-normal text-gray-300 mb-2">Lavanderia Profissional no</span>
                  <Typewriter 
                    texts={[
                      neighborhood.name,
                      `Delivery no ${neighborhood.name}`,
                      `Qualidade no ${neighborhood.name}`
                    ]} 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white"
                  />
                </h1>

                <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                  {getIntroText()}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href={`https://wa.me/5511921691307?text=Olá! Moro em ${neighborhood.name} e gostaria de agendar uma coleta.`} 
                     className="flex items-center justify-center gap-3 bg-gradient-gold text-secondary-dark px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all btn-premium">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
                    Agendar Coleta no {neighborhood.name}
                  </a>
                </div>
              </div>
           </div>
        </section>

        {/* Premium Differentials Grid */}
        <section className="py-16 -mt-10 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Clock size={32} />, title: 'Coleta Expressa', desc: `Busca rápida em ${neighborhood.name} com horários flexíveis.` },
                { icon: <Shield size={32} />, title: 'Seguro Garantia', desc: 'Suas peças asseguradas durante todo o processo.' },
                { icon: <Sparkles size={32} />, title: 'Tecnologia', desc: 'Produtos biodegradáveis e máquinas de última geração.' },
                { icon: <Star size={32} />, title: 'Experiência', desc: 'Mais de 15 anos cuidando de roupas finas e delicadas.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto bg-blue-50 text-primary-blue rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secondary-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content SEO & Services Expanded */}
        <section className="py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Introduction Text */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary-dark mb-6 relative pl-4 border-l-4 border-primary-gold">
                  Soluções Completas de Limpeza para {neighborhood.name}
                </h2>
                <div className="prose text-gray-600 max-w-none text-lg leading-relaxed">
                  <p className="mb-4">
                    A vida no <strong>{neighborhood.name}</strong> exige praticidade e qualidade. Por isso, a Lavanderia Inovata desenvolveu um sistema de logística exclusivo para atender sua região com máxima eficiência.
                  </p>
                  <p>
                    Não somos apenas uma lavanderia comum. Somos um centro completo de higienização têxtil. Se você mora em {neighborhood.name}, pode confiar desde suas roupas do dia a dia até itens complexos como tapetes persas, cortinas de linho e vestidos de alta costura aos nossos cuidados.
                  </p>
                </div>
              </div>

              {/* Expanded Detailed Services List for Neighborhood */}
              <div className="space-y-12">
                <h3 className="text-2xl font-bold text-secondary-dark border-b pb-4">O Que Lavamos para Você no {neighborhood.name}?</h3>
                
                {/* Tênis Detail */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-6">
                   <div className="shrink-0 bg-orange-100 p-4 rounded-xl h-fit w-fit text-orange-600">
                      <Footprints size={32} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">Tênis, Sneakers e Calçados</h4>
                      <p className="text-gray-600 mb-4">
                         Moradores do {neighborhood.name} adoram nosso serviço de renovação de calçados. Lavamos tênis de corrida, sapatos sociais, botas e sneakers de coleção.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                         <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> <strong>Materiais:</strong> Camurça, Couro, Lona, Sintético e Tecido.</li>
                         <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> <strong>Processo:</strong> Limpeza manual detalhada, higienização interna contra odores.</li>
                      </ul>
                   </div>
                </div>

                {/* Roupas Detail */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-6">
                   <div className="shrink-0 bg-blue-100 p-4 rounded-xl h-fit w-fit text-primary-blue">
                      <Shirt size={32} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">Roupas e Peças Delicadas</h4>
                      <p className="text-gray-600 mb-4">
                         Recupere seu tempo livre. Cuidamos de toda sua roupa, desde peças do dia a dia até vestidos de festa e ternos que exigem lavagem a seco.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                         <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> <strong>Benefícios:</strong> Roupas mais macias, cores preservadas e passadoria impecável.</li>
                         <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> <strong>Diferencial:</strong> Tratamento individual de manchas em colarinhos e punhos.</li>
                      </ul>
                   </div>
                </div>

                {/* Casa Detail */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-6">
                   <div className="shrink-0 bg-teal-100 p-4 rounded-xl h-fit w-fit text-teal-600">
                      <Armchair size={32} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">Tapetes e Cortinas</h4>
                      <p className="text-gray-600 mb-4">
                         Renove o ar da sua casa no {neighborhood.name}. Removemos ácaros e poeira profunda de itens de decoração.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                         <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> <strong>Tapetes:</strong> Retirada e entrega inclusa. Secagem em estufa.</li>
                         <li className="flex items-center gap-2"><Check size={16} className="text-green-500"/> <strong>Cortinas:</strong> Nós retiramos dos trilhos/varões e instalamos de volta.</li>
                      </ul>
                   </div>
                </div>

              </div>

              {/* Callout Delivery */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Truck size={150} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Delivery Gratuito no {neighborhood.name}*</h3>
                  <p className="text-blue-100 mb-6 max-w-lg">
                    Para pedidos acima de R$ 250,00, a coleta e entrega são por nossa conta. Abaixo deste valor, consulte a taxa para sua região.
                  </p>
                  <a href={`https://wa.me/5511921691307?text=Quero aproveitar o delivery grátis (acima de R$250) no ${neighborhood.name}`} className="inline-block bg-white text-primary-blue px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors btn-premium">
                    Solicitar Delivery Agora
                  </a>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Sticky Contact Card */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-gold sticky top-28">
                <div className="text-center mb-6">
                   <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Atendimento Exclusivo</p>
                   <h3 className="text-2xl font-bold text-secondary-dark">{neighborhood.name}</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                   <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg">
                      <Clock className="text-green-600" size={20} />
                      <span className="text-sm font-medium">Coletas: Seg à Sáb</span>
                   </div>
                   <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg">
                      <Truck className="text-blue-600" size={20} />
                      <span className="text-sm font-medium">Prazo: 24h a 48h</span>
                   </div>
                </div>

                <a href={`https://wa.me/5511921691307`} className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold mb-4 shadow-lg hover:brightness-105 transition-all transform hover:scale-105 btn-premium">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
                   Chamar no WhatsApp
                </a>
              </div>

              {/* Nearby Areas List */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold mb-4 text-gray-800 flex items-center gap-2">
                  <MapPin size={18} className="text-primary-blue"/> 
                  Também atendemos perto
                </h3>
                <ul className="space-y-3">
                  {nearbyHoods.map(hood => (
                    <li key={hood.id}>
                      <Link to={`/lavanderia/${hood.slug}`} className="group flex items-center justify-between text-gray-600 hover:text-primary-blue text-sm transition-colors p-2 rounded-lg hover:bg-white">
                        <span>{hood.name}</span>
                        <ArrowLeft size={14} className="rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Floating/Sticky Bottom CTA Mobile for conversion */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 md:hidden z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] flex justify-between items-center gap-4">
            <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase font-bold">Atendimento em</span>
                <span className="text-secondary-dark font-bold leading-tight">{neighborhood.name}</span>
            </div>
            <a href="https://wa.me/5511921691307" className="bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 animate-pulse-glow">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" className="w-5 h-5" />
                Chamar
            </a>
        </div>
      </main>
    </>
  );
};

export default NeighborhoodPage;