import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Zap, X, Check } from 'lucide-react';

interface BeforeAfterItem {
  id: string;
  before: string;
  after: string;
  title: string;
  description: string;
  benefits: string[];
  beforePoints: string[];
  afterPoints: string[];
}

const BeforeAfterSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const items: BeforeAfterItem[] = [
    {
      id: 'tenis-vans',
      before: '/antes-um.png',
      after: '/depois-um.png',
      title: 'Transformação Completa de Tênis',
      description: 'Seus tênis favoritos voltam a brilhar! Removemos sujeira profunda, solados amarelados e cadarços desgastados, devolvendo o aspecto de novo ao seu calçado premium.',
      benefits: [
        'Limpeza profunda de todos os materiais',
        'Clareamento de solados e tecidos',
        'Higienização interna contra odores',
        'Restauração do brilho original'
      ],
      beforePoints: [
        'Sujo e com manchas',
        'Cor desbotada',
        'Cadarços desgastados',
        'Aspecto de uso'
      ],
      afterPoints: [
        'Limpo e sem manchas',
        'Cor renovada e vibrante',
        'Cadarços limpos e organizados',
        'Aspecto de novo'
      ]
    },
    {
      id: 'tenis-orange',
      before: '/antes-dois.png',
      after: '/depois-dois.png',
      title: 'Renovação de Cores e Detalhes',
      description: 'Mesmo os tênis mais desgastados ganham uma segunda vida! Nossa técnica especializada preserva cores vibrantes, remove manchas rebeldes e deixa os cadarços impecáveis.',
      benefits: [
        'Remoção de manchas persistentes',
        'Cores restauradas e vibrantes',
        'Cadarços limpos e organizados',
        'Embalagem premium inclusa'
      ],
      beforePoints: [
        'Sujo e com manchas',
        'Cor desbotada',
        'Cadarços desgastados',
        'Aspecto de uso'
      ],
      afterPoints: [
        'Limpo e sem manchas',
        'Cor renovada e vibrante',
        'Cadarços limpos e organizados',
        'Aspecto de novo'
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
                    alt="Antes da higienização"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    ANTES
                  </div>
                </div>

                {/* Before Points */}
                <ul className="mt-4 rounded-2xl border border-red-100 bg-red-50/60 p-4 space-y-2">
                  {current.beforePoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                        <X size={12} className="text-white" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Image */}
              <div className="group perspective">
                <div className="relative rounded-2xl overflow-hidden h-80 md:h-96 bg-gradient-to-br from-green-50 to-green-100 shadow-lg transform transition-transform duration-500 hover:scale-105">
                  <img
                    src={current.after}
                    alt="Depois da higienização"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                    <Star size={16} /> DEPOIS
                  </div>
                </div>

                {/* After Points */}
                <ul className="mt-4 rounded-2xl border border-green-100 bg-green-50/60 p-4 space-y-2">
                  {current.afterPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-white" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
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

          {/* Vertical Video Section (9:16) com Mockup Premium */}
          <div className="mt-24 relative">
            {/* Glow / brilho de fundo premium */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[420px] h-[420px] bg-gradient-to-tr from-primary-gold/30 to-yellow-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="text-center mb-12 max-w-2xl mx-auto">
              <p className="text-sm font-bold text-primary-gold uppercase tracking-[0.2em] mb-3">Veja em Ação</p>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-secondary-dark leading-tight">
                Processo Completo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-yellow-500">Higienização Premium</span>
              </h3>
            </div>

            {/* Smartphone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Botões laterais */}
                <div className="absolute -left-[3px] top-28 w-[3px] h-8 bg-secondary-dark/80 rounded-l-lg"></div>
                <div className="absolute -left-[3px] top-40 w-[3px] h-14 bg-secondary-dark/80 rounded-l-lg"></div>
                <div className="absolute -right-[3px] top-36 w-[3px] h-20 bg-secondary-dark/80 rounded-r-lg"></div>

                {/* Moldura externa do celular */}
                <div className="relative w-[300px] sm:w-[340px] rounded-[3rem] bg-gradient-to-b from-secondary-dark to-black p-3 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
                  {/* Borda metálica dourada sutil */}
                  <div className="rounded-[2.4rem] p-[2px] bg-gradient-to-b from-primary-gold/60 via-secondary-dark to-primary-gold/40">
                    {/* Tela */}
                    <div className="relative rounded-[2.3rem] overflow-hidden bg-black">
                      {/* Notch / Dynamic Island */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 w-24 h-6 bg-black rounded-full flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-dark ring-1 ring-white/10"></div>
                        <div className="w-8 h-1.5 rounded-full bg-secondary-dark/80"></div>
                      </div>

                      {/* Vídeo 9:16 */}
                      <div className="relative aspect-[9/16] w-full bg-secondary-dark">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src="https://www.youtube.com/embed/_MoxZWLhh_M?feature=share&rel=0&modestbranding=1&playsinline=1"
                          title="Transformação de Tênis - Lavanderia Inovata"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selo premium flutuante */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-dark px-6 py-2.5 rounded-full font-bold text-sm shadow-xl flex items-center gap-2 whitespace-nowrap">
                  <Star size={16} /> Resultado Premium
                </div>
              </div>
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
