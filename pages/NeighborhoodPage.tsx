import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { NEIGHBORHOODS, CONTACT, SERVICES_DATA } from '../constants';
import Typewriter from '../components/Typewriter';
import { MapPin, Check, Phone, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NeighborhoodPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Extract "lavanderia-" prefix if it exists in the route params logic, 
  // but simpler to match slug directly from our constant list logic.
  // The route is defined as /lavanderia-:slug, so the param `slug` is just the suffix.
  
  const neighborhood = NEIGHBORHOODS.find(n => n.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!neighborhood) {
    return <Navigate to="/" replace />;
  }

  const nearbyHoods = NEIGHBORHOODS
    .filter(n => n.city === neighborhood.city && n.id !== neighborhood.id)
    .slice(0, 5);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LaundryService",
    "name": `Lavanderia Inovata - ${neighborhood.name}`,
    "image": "https://lavanderiainovata.com.br/logo.png", // Conceptual URL
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTACT.address,
      "addressLocality": "Osasco",
      "addressRegion": "SP",
      "postalCode": "06268-010"
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
    "url": window.location.href,
    "telephone": "+551136831307",
    "priceRange": "$$"
  };

  return (
    <>
      <Helmet>
        <title>Lavanderia em {neighborhood.name} | Delivery Rápido | Lavanderia Inovata</title>
        <meta name="description" content={`Procurando lavanderia em ${neighborhood.name}? A Lavanderia Inovata oferece lavagem a seco, passar roupa e delivery rápido em ${neighborhood.name} e região.`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <main className="bg-gray-50 min-h-screen pt-20">
        {/* Breadcrumb */}
        <div className="bg-secondary-dark text-white py-4">
          <div className="container mx-auto px-4 text-sm flex items-center gap-2">
            <Link to="/" className="hover:text-primary-gold">Home</Link>
            <span>/</span>
            <Link to="/#bairros" className="hover:text-primary-gold">Bairros</Link>
            <span>/</span>
            <span className="text-primary-gold">{neighborhood.name}</span>
          </div>
        </div>

        {/* Local Hero */}
        <section className="relative bg-gradient-primary py-20 text-white overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <MapPin size={300} />
           </div>
           <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <Link to="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors">
                  <ArrowLeft size={20} /> Voltar para Home
                </Link>
                <h1 className="text-3xl md:text-5xl font-heading font-black mb-6">
                  <Typewriter 
                    texts={[
                      `Lavanderia em ${neighborhood.name}`,
                      `Delivery Rápido em ${neighborhood.name}`,
                      `Melhor Lavanderia de ${neighborhood.name}`
                    ]} 
                  />
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Serviço premium de lavagem e passadoria com coleta e entrega gratuita em {neighborhood.name} para pedidos acima de R$50.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`https://wa.me/5511921691307?text=Olá! Moro em ${neighborhood.name} e gostaria de agendar uma coleta.`} 
                     className="bg-primary-gold text-secondary-dark px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white transition-all transform hover:scale-105">
                    AGENDE COLETA EM {neighborhood.name.toUpperCase()}
                  </a>
                </div>
              </div>
           </div>
        </section>

        {/* Content SEO */}
        <section className="py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary-dark mb-6">
                  Por Que Escolher Nossa Lavanderia em {neighborhood.name}?
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      `Delivery em ${neighborhood.name}`,
                      'Coleta e entrega em 24-48h',
                      'Lavagem profissional a seco',
                      'Passagem impecável',
                      'Atendimento personalizado',
                      'Preços justos e transparentes'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <Check size={14} className="text-green-600" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-secondary-dark mb-6">
                  Serviços de Lavanderia em {neighborhood.name}
                </h2>
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl border-l-4 border-primary-blue shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-2 text-primary-blue">Lavagem e Passagem em {neighborhood.name}</h3>
                    <p className="text-gray-600">
                      Oferecemos serviço completo de lavagem e passagem para moradores de {neighborhood.name}. 
                      Suas roupas do dia a dia tratadas com produtos de alta qualidade, devolvidas limpas, cheirosas e perfeitamente passadas.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border-l-4 border-primary-gold shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-2 text-primary-gold">Lavagem a Seco em {neighborhood.name}</h3>
                    <p className="text-gray-600">
                      Ternos, vestidos de festa, e roupas delicadas requerem cuidado especial. 
                      Nossa lavanderia atende {neighborhood.name} com equipamentos modernos para lavagem a seco profissional.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-l-4 border-secondary-dark shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-2 text-secondary-dark">Delivery em {neighborhood.name}</h3>
                    <p className="text-gray-600">
                      Não perca tempo no trânsito. Coletamos e entregamos suas roupas diretamente em {neighborhood.name}. 
                      Basta agendar pelo WhatsApp e nossa equipe vai até você.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-secondary-dark mb-6">
                  Como Funciona o Delivery para {neighborhood.name}
                </h2>
                <ol className="relative border-l border-gray-200 ml-4 space-y-8">
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white text-primary-blue font-bold">1</span>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Contato</h3>
                    <p className="text-gray-600">Chame no WhatsApp (11) 9.2169-1307.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white text-primary-blue font-bold">2</span>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Coleta</h3>
                    <p className="text-gray-600">Informe seu endereço em {neighborhood.name} e agendamos a busca.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white text-primary-blue font-bold">3</span>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Entrega</h3>
                    <p className="text-gray-600">Receba tudo pronto em 24h a 48h.</p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Sticky Contact Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary-gold/20 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-center">Peça Agora</h3>
                <p className="text-center text-sm text-gray-500 mb-6">Atendimento exclusivo para {neighborhood.name}</p>
                
                <a href={`https://wa.me/5511921691307`} className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-lg font-bold mb-4 hover:brightness-105 transition-all">
                   WhatsApp
                </a>
                <a href="tel:1136831307" className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-200 transition-all">
                   <Phone size={18} /> Ligar
                </a>
              </div>

              {/* Nearby Areas */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold mb-4 text-gray-800">Áreas Próximas Atendidas</h3>
                <ul className="space-y-2">
                  {nearbyHoods.map(hood => (
                    <li key={hood.id}>
                      <Link to={`/lavanderia-${hood.slug}`} className="text-primary-blue hover:underline text-sm flex items-center gap-2">
                        <MapPin size={12} /> {hood.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default NeighborhoodPage;
