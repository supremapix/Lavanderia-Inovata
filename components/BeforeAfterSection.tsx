import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Zap } from 'lucide-react';

interface BeforeAfterItem {
  id: string;
  before: string;
  after: string;
  title: string;
  description: string;
  benefits: string[];
}

const BeforeAfterSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const items: BeforeAfterItem[] = [
    {
      id: 'tenis-vans',
      before: '/limpesa_tenis-antes-e-depois-osascosp_(1).jpeg',
      after: '/limpesa_tenis-antes-e-depois-osascosp_(1).jpeg',
      title: 'Transformação Completa de Tênis',
      description: 'Seus tênis favoritos voltam a brilhar! Removemos sujeira profunda, solados amarelados e cadarços desgastados, devolvendo o aspecto de novo ao seu calçado premium.',
      benefits: [
        'Limpeza profunda de todos os materiais',
        'Clareamento de solados e tecidos',
        'Higienização interna contra odores',
        'Restauração do brilho original'
      ]
    },
    {
      id: 'tenis-orange',
      before: '/limpesa_tenis-antes-e-depois-osascosp_(2).jpeg',
      after: '/limpesa_tenis-antes-e-depois-osascosp_(2).jpeg',
      title: 'Renovação de Cores e Detalhes',
      description: 'Mesmo os tênis mais desgastados ganham uma segunda vida! Nossa técnica especializada preserva cores vibrantes, remove manchas rebeldes e deixa os cadarços impecáveis.',
      benefits: [
        'Remoção de manchas persistentes',
        'Cores restauradas e vibrantes',
        'Cadarços limpos e organizados',
        'Embalagem premium inclusa'
      ]
    }
  ];

  const current = items[currentIndex];

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay, items.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-gold/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold/10 text-primary-gold font-bold text-sm mb-6 border border-primary-gold/20">
            <Zap size={16} /> TRANSFORMAÇÕES REAIS
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-secondary-dark mb-6 leading-tight">
            Veja o Poder da <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-yellow-500">Higienização Premium</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Especialistas em renovação de tênis, tapetes e roupas delicadas. Cada projeto é um trabalho de arte executado com precisão e cuidado.
          </p>
        </div>

        {/* Main Gallery Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">

            {/* Images Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 relative">

              {/* Before Image */}
              <div className="group perspective">
                <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg transform transition-transform duration-500 hover:scale-105">
                  <img
                    src={current.before}
                    alt="Antes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    ANTES
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div className="group perspective">
                <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 bg-gradient-to-br from-green-50 to-green-100 shadow-lg transform transition-transform duration-500 hover:scale-105">
                  <img
                    src={current.after}
                    alt="Depois"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                    <Star size={16} /> DEPOIS
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-gradient-to-r from-secondary-dark to-secondary-dark/95 p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {current.title}
              </h3>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {current.description}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {current.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 mt-1">
                      <span className="text-secondary-dark font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-100 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/5511921691307?text=Olá! Vi as transformações de tênis no site e gostaria de saber mais sobre o serviço. (Origem: Seção Antes e Depois)"
                className="inline-flex items-center gap-2 bg-gradient-gold text-secondary-dark px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:scale-105"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" className="w-6 h-6" />
                Agendar Meu Serviço
              </a>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 flex justify-between pointer-events-none z-20">
              <button
                onClick={handlePrev}
                className="pointer-events-auto bg-white/90 backdrop-blur-md text-secondary-dark p-3 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110 group"
                aria-label="Anterior"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto bg-white/90 backdrop-blur-md text-secondary-dark p-3 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110 group"
                aria-label="Próximo"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlay(false);
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-primary-gold'
                      : 'w-3 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Ir para item ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="mt-20 rounded-[2.5rem] overflow-hidden shadow-2xl bg-black/5">
            <div className="relative pt-[56.25%] bg-secondary-dark">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/_MoxZWLhh_M?feature=share"
                title="Transformação de Tênis - Lavanderia Inovata"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gradient-to-r from-secondary-dark to-secondary-dark/95 p-8 text-center text-white">
              <p className="text-sm font-bold text-primary-gold uppercase tracking-widest mb-2">Veja em Ação</p>
              <h3 className="text-xl md:text-2xl font-bold">Processo Completo de Higienização Premium</h3>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: '15+ Anos', value: 'Experiência' },
              { label: '4.9/5', value: 'Avaliação' },
              { label: '100%', value: 'Satisfação' },
              { label: 'Premium', value: 'Qualidade' }
            ].map((badge, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-2xl font-heading font-black text-primary-gold mb-2">{badge.label}</div>
                <div className="text-sm font-medium text-gray-600">{badge.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
