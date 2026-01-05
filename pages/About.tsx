import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Users, Award, ShieldCheck } from 'lucide-react';
import { CONTACT } from '../constants';

const About: React.FC = () => {
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
      <Helmet>
        <title>Sobre Nós | Lavanderia Inovata - Tradição e Qualidade em Osasco</title>
        <meta name="description" content="Conheça a história da Lavanderia Inovata. Mais de 15 anos cuidando das roupas de Osasco com carinho, tecnologia e responsabilidade ambiental." />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

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
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary-gold/20 text-primary-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Qualidade Premium</h3>
                <p className="text-gray-600">Processos rigorosos de lavagem e passadoria para garantir o melhor resultado.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 text-primary-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Equipe Experiente</h3>
                <p className="text-gray-600">Profissionais treinados para identificar e tratar cada tipo de tecido adequadamente.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustentabilidade</h3>
                <p className="text-gray-600">Uso consciente de água e produtos biodegradáveis que não agridem o meio ambiente.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Garantia</h3>
                <p className="text-gray-600">Satisfação garantida ou refazemos o serviço. Seu feedback é nossa evolução.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Text */}
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1517677208171-0bc67429de01?q=80&w=1000&auto=format&fit=crop" 
                   alt="Equipe Lavanderia" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-bold text-lg">Cuidamos de cada detalhe</p>
                 </div>
               </div>
            </div>
            <div className="md:w-1/2">
               <h2 className="text-3xl font-heading font-bold text-secondary-dark mb-6">Mais que uma lavanderia</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 Localizada estrategicamente na Av. César Abraão, 209, a Inovata se tornou referência em Osasco. Não somos apenas um lugar onde se lava roupa; somos parceiros da sua rotina.
               </p>
               <p className="text-gray-600 mb-6 leading-relaxed">
                 Entendemos que cada peça de roupa conta uma história: o terno daquela reunião importante, o vestido de festa inesquecível, o edredom que aquece a família. Por isso, tratamos tudo com extremo respeito e cuidado.
               </p>
               <div className="bg-primary-blue text-white p-6 rounded-xl">
                 <p className="font-bold text-lg text-center">
                   "Nossa missão é proporcionar bem-estar através de roupas limpas, macias e cheirosas, economizando o tempo dos nossos clientes."
                 </p>
               </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default About;