import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shirt, Snowflake, Droplets, Truck, CheckCircle, HelpCircle } from 'lucide-react';
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
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lavagem de Edredons" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Delivery" } }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Serviços de Lavanderia em Osasco | Lavar, Passar e Seco | Lavanderia Inovata</title>
        <meta name="description" content="Conheça nossos serviços: Lavar e Passar, Lavagem a Seco, Edredons, Tapetes e Delivery Grátis em Osasco e região. Qualidade Premium!" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-secondary-dark mb-6">Nossos Serviços Premium</h1>
            <p className="text-lg text-gray-600">
              Combinamos tecnologia de ponta com o cuidado artesanal para garantir que suas roupas durem mais e estejam sempre impecáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 p-4 rounded-2xl text-primary-blue">
                <Shirt size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-dark mb-3">Lavar e Passar (Dia a Dia)</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Ideal para roupas de uso diário. Utilizamos produtos biodegradáveis de alta performance que removem manchas sem danificar as fibras.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Camisas e Camisetas</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Jeans e Calças</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Roupas de Ginástica</li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-xl transition-shadow">
              <div className="bg-primary-gold/10 p-4 rounded-2xl text-primary-gold">
                <Snowflake size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-dark mb-3">Lavagem a Seco (Dry Clean)</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Tecnologia especializada para tecidos que não podem ver água. Preserva a estrutura, cor e textura de peças finas.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Ternos e Blazers</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Vestidos de Festa</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Casacos de Lã/Couro</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-xl transition-shadow">
              <div className="bg-cyan-50 p-4 rounded-2xl text-cyan-600">
                <Droplets size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-dark mb-3">Peças Volumosas (Wet Cleaning)</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Higiene profunda para itens de casa. Eliminamos ácaros, fungos e odores, garantindo a saúde da sua família.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Edredons e Cobertores</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Cortinas e Tapetes</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Pelúcias</li>
                </ul>
              </div>
            </div>

             {/* Service 4 */}
             <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-xl transition-shadow">
              <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600">
                <Truck size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary-dark mb-3">Delivery Rápido</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Conveniência total. Buscamos e entregamos suas roupas em casa ou no escritório. Atendemos um raio de 15km de Osasco.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Agendamento via WhatsApp</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Entrega em 24h a 48h</li>
                  <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle size={16} className="text-green-500"/> Frete Grátis acima de R$50</li>
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
                { q: "Quanto tempo demora para lavar minhas roupas?", a: "O prazo padrão é de 24 a 48 horas úteis, dependendo do volume e tipo de peça. Peças delicadas ou tapetes podem levar um pouco mais." },
                { q: "Vocês buscam em casa?", a: "Sim! Temos serviço de delivery. Para pedidos acima de R$50, o frete é grátis em nossa área de cobertura." },
                { q: "Como devo separar as roupas?", a: "Não se preocupe! Basta colocar tudo na sacola. Nossa equipe especializada faz a triagem por cor e tipo de tecido antes da lavagem." },
                { q: "Quais produtos vocês usam?", a: "Utilizamos produtos profissionais da linha OMO e Comfort, além de aditivos específicos para remoção de manchas que preservam as fibras." }
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