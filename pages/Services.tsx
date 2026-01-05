import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shirt, Snowflake, Droplets, Truck, CheckCircle, HelpCircle, Footprints, Armchair, Baby, Sparkles } from 'lucide-react';
import { CONTACT } from '../constants';

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
      "name": "Serviços de Lavanderia",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lavar e Passar" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lavagem a Seco" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tênis e Calçados" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estofados e Tapetes" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carrinhos de Bebê" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Delivery" } }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Serviços de Lavanderia em Osasco | Tênis, Tapetes, Sofás e Roupas</title>
        <meta name="description" content="Lavagem profissional de: Roupas, Tênis, Tapetes, Cortinas, Estofados, Carrinhos de Bebê e Pelúcias. Delivery Grátis em Osasco e região!" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-secondary-dark mb-6">Nossos Serviços Premium</h1>
            <p className="text-lg text-gray-600">
              Muito mais que roupas. Somos especialistas em higienização profunda de itens de casa, calçados e artigos infantis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Service 1: Roupas */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col gap-6 items-start hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 p-4 rounded-2xl text-primary-blue">
                <Shirt size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-dark mb-3">Lavar e Passar</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Cuidado completo para roupas do dia a dia, camisas sociais, uniformes e roupas de ginástica.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Camisas e Calças</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Roupas de Cama e Banho</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Lavagem a Seco (Ternos)</li>
                </ul>
              </div>
            </div>

            {/* Service 2: Tênis */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col gap-6 items-start hover:shadow-xl transition-shadow">
              <div className="bg-orange-50 p-4 rounded-2xl text-orange-500">
                <Footprints size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-dark mb-3">Tênis e Calçados</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Deixamos seus tênis, sapatos e botas com aparência de novos! Removemos odores e manchas difíceis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Tênis Esportivos e Casuais</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Higienização Interna</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Clareamento de Solados</li>
                </ul>
              </div>
            </div>

            {/* Service 3: Casa */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col gap-6 items-start hover:shadow-xl transition-shadow">
              <div className="bg-teal-50 p-4 rounded-2xl text-teal-600">
                <Armchair size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-dark mb-3">Estofados e Decoração</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Higienização profunda para eliminar ácaros e renovar as cores de tapetes, cortinas e sofás.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Tapetes e Cortinas</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Sofás e Poltronas</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Edredons e Cobertores</li>
                </ul>
              </div>
            </div>

             {/* Service 4: Infantil */}
             <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col gap-6 items-start hover:shadow-xl transition-shadow">
              <div className="bg-pink-50 p-4 rounded-2xl text-pink-500">
                <Baby size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-dark mb-3">Infantil e Bebê</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Segurança total para o seu bebê. Usamos produtos hipoalergênicos para higienizar carrinhos e pelúcias.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Carrinhos de Bebê</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Bebê Conforto e Cadeirinhas</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Ursinhos de Pelúcia</li>
                </ul>
              </div>
            </div>

            {/* Service 5: Especiais */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col gap-6 items-start hover:shadow-xl transition-shadow">
              <div className="bg-purple-50 p-4 rounded-2xl text-purple-600">
                <Sparkles size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-dark mb-3">Itens Especiais</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Lavagem técnica para itens complexos que exigem cuidado extra e equipamentos específicos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Malas de Viagem</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Jaquetas de Couro</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Vestidos de Noiva</li>
                </ul>
              </div>
            </div>

             {/* Service 6: Delivery */}
             <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col gap-6 items-start hover:shadow-xl transition-shadow">
              <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600">
                <Truck size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-dark mb-3">Delivery Rápido</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Conveniência total. Buscamos e entregamos no seu endereço. Grátis para pedidos acima de R$50.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Atendemos Osasco e Região</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Entrega em 24h a 48h</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Agendamento via WhatsApp</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-3">
              <HelpCircle className="text-primary-gold" /> Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {[
                { q: "Vocês lavam tênis de camurça?", a: "Sim! Temos processos específicos para camurça, couro e tecidos sintéticos, garantindo a limpeza sem danos." },
                { q: "Como funciona a lavagem de sofá?", a: "Para sofás e estofados grandes, nossa equipe vai até sua casa realizar a higienização com máquinas extratoras profissionais." },
                { q: "O carrinho de bebê fica muito tempo parado?", a: "Não! Entendemos a necessidade. O prazo médio para carrinhos e bebê conforto é de 3 a 4 dias para secagem total e garantia de higiene." },
                { q: "Lavam tapetes grandes?", a: "Sim, lavamos tapetes de todos os tamanhos e materiais (persa, sisal, sintético). Retiramos e entregamos em sua casa." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg text-secondary-dark mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;