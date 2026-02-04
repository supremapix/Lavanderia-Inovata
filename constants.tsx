import { ContactInfo, Neighborhood, Service } from './types';
import { Shirt, Snowflake, Droplets, Truck, Armchair, Sparkles } from 'lucide-react';
import React from 'react';

export const CONTACT: ContactInfo = {
  phone: '(11) 3683-1307',
  whatsapp: '5511921691307',
  whatsappDisplay: '(11) 9.2169-1307',
  email: 'lavanderia.inovata@gmail.com',
  address: 'Av. César Abraão, 209 - Osasco, SP',
  cnpj: '39.483.827/0001-39'
};

export const NEIGHBORHOODS: Neighborhood[] = [
  // Osasco
  { id: 'oz-1', name: 'Centro de Osasco', city: 'Osasco', slug: 'osasco-centro' },
  { id: 'oz-2', name: 'Bonfim', city: 'Osasco', slug: 'osasco-bonfim' },
  { id: 'oz-3', name: 'Presidente Altino', city: 'Osasco', slug: 'osasco-presidente-altino' },
  { id: 'oz-4', name: 'Rochdale', city: 'Osasco', slug: 'osasco-rochdale' },
  { id: 'oz-5', name: 'Jardim Piratininga', city: 'Osasco', slug: 'osasco-jardim-piratininga' },
  { id: 'oz-6', name: 'Vila Yara', city: 'Osasco', slug: 'osasco-vila-yara' },
  { id: 'oz-7', name: 'Km 18', city: 'Osasco', slug: 'osasco-km-18' },
  { id: 'oz-8', name: 'Quitaúna', city: 'Osasco', slug: 'osasco-quitauna' },
  { id: 'oz-9', name: 'Jardim das Flores', city: 'Osasco', slug: 'osasco-jardim-das-flores' },
  { id: 'oz-10', name: 'City Bussocaba', city: 'Osasco', slug: 'osasco-city-bussocaba' },
  
  // São Paulo
  { id: 'sp-1', name: 'Lapa', city: 'São Paulo', slug: 'sao-paulo-lapa' },
  { id: 'sp-2', name: 'Pirituba', city: 'São Paulo', slug: 'sao-paulo-pirituba' },
  { id: 'sp-4', name: 'Vila Leopoldina', city: 'São Paulo', slug: 'sao-paulo-vila-leopoldina' },
  { id: 'sp-5', name: 'Jaguaré', city: 'São Paulo', slug: 'sao-paulo-jaguare' },
  { id: 'sp-6', name: 'Butantã', city: 'São Paulo', slug: 'sao-paulo-butanta' },

  // Barueri
  { id: 'br-1', name: 'Alphaville', city: 'Barueri', slug: 'barueri-alphaville' },
  { id: 'br-2', name: 'Tamboré', city: 'Barueri', slug: 'barueri-tambore' },
];

export const SERVICES_DATA: any[] = [
  {
    id: 'lavanderia-osasco',
    title: 'Lavanderia Osasco',
    description: 'A melhor lavanderia profissional em Osasco com sistema leva e traz.',
    icon: <Shirt className="w-12 h-12 text-primary-gold" />,
    features: ['Lavagem a seco', 'Passadoria profissional', 'Limpeza profissional']
  },
  {
    id: 'lavagem-edredons-tapetes',
    title: 'Edredons e Tapetes',
    description: 'Lavagem de edredons e higienização de tapetes com secagem em estufa.',
    icon: <Droplets className="w-12 h-12 text-primary-gold" />,
    features: ['Lava tapete perto de mim', 'Lavagem de edredons', 'Limpeza profunda']
  }
];

export const BLOG_POSTS = [
  {
    id: 'lavanderia-osasco-guia',
    slug: 'melhor-lavanderia-osasco-perto-de-mim',
    title: 'Lavanderia Osasco: Por que a Inovata é a melhor avaliada?',
    excerpt: 'Buscando lavanderia em Osasco perto de mim? Conheça nosso serviço de lavanderia profissional e passadoria com delivery.',
    content: `Se você está procurando por uma "lavanderia perto de mim" em Osasco que seja bem avaliada, a Lavanderia Inovata é a sua escolha definitiva. Somos especialistas em lavanderia profissional, oferecendo desde a lavagem de roupas do dia a dia até serviços complexos como lavagem a seco e passadoria profissional.

O diferencial da nossa lavanderia em Osasco centro e bairros vizinhos como o Km 18 é o nosso sistema "lavanderia osasco leva e traz" (pick up service), que garante que você não precise sair de casa. Ao contrário de uma lavanderia self service osasco, onde você faz todo o trabalho, na Inovata cuidamos de cada detalhe: da remoção de manchas à passadoria de roupas impecável.

Atendemos com excelência quem busca por empresa de limpeza osasco focada em têxteis, garantindo que suas peças recebam tratamento de lavanderia industrial com o carinho de um serviço artesanal.`,
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=800&auto=format&fit=crop',
    date: '24 de Junho, 2024',
    category: 'Lavanderia Profissional'
  },
  {
    id: 'passadoria-profissional-osasco',
    slug: 'passadoria-de-roupas-perto-de-mim-osasco',
    title: 'Serviço de Passadoria Profissional: Ganhe tempo no seu dia',
    excerpt: 'Descubra as vantagens da passadoria de roupas perto de mim e como a Lavanderia Inovata cuida das suas peças.',
    content: `Muitas vezes, lavar a roupa é a parte fácil; o desafio real é a passadoria. Se você pesquisa por "passadoria de roupas perto de mim" ou "passadoria profissional", a Lavanderia Inovata oferece o suporte que você precisa. Nossa lavanderia e passadoria utiliza equipamentos de vapor de última geração que protegem as fibras enquanto removem todos os vincos.

Diferente de ajustes de roupas perto de mim, nosso foco é a manutenção da forma e do brilho original dos tecidos. Seja para camisas sociais ou roupas de cama delicadas, a nossa passadoria de roupas garante um acabamento de hotel cinco estrelas. 

Muitos clientes que buscavam "trabalhar em lavanderia" ou entender o processo se surpreendem com a nossa técnica de lavagem a seco aliada à finalização manual.`,
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=800&auto=format&fit=crop',
    date: '22 de Junho, 2024',
    category: 'Passadoria'
  },
  {
    id: 'limpeza-tapetes-edredons-osasco',
    slug: 'lavagem-de-edredons-cortinas-tapetes-osasco',
    title: 'Lavagem de Edredons e Cortinas: Saúde em primeiro lugar',
    excerpt: 'Precisa de lava tapete perto de mim ou lavagem de cortinas? A Inovata é especialista em higienização profunda.',
    content: `Manter a casa limpa vai além da superfície. A lavagem de edredons e a lavagem de cortinas são essenciais para evitar alergias respiratórias. Se você mora em Osasco e procura "lavanderia edredom perto de mim" ou "lavagem de cortinas perto de mim", a Inovata oferece o tratamento bactericida necessário.

Como uma lavanderia profissional perto de mim, utilizamos produtos que penetram profundamente nas fibras de tapetes e cortinas. Nosso serviço de "lavanderia tapete perto de mim" inclui a retirada e entrega (lavanderia delivery), garantindo total comodidade.

Para quem busca por "limpeza profissional" e "serviço de limpeza" de alto padrão em Osasco, Barueri ou na Lapa, nosso processo de lavagem de cortinas remove ácaros e poluição acumulada sem danificar os tecidos finos.`,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    date: '20 de Junho, 2024',
    category: 'Limpeza de Itens Pesados'
  }
];

export const HOME_TYPEWRITER_TEXTS = [
  "Lavanderia Osasco Leva e Traz",
  "Lavanderia Profissional Perto de Mim",
  "Lavagem de Edredons e Tapetes",
  "Passadoria de Roupas Impecável",
  "Lavanderia em Osasco Centro e Bairros",
  "Lavagem de Tênis Osasco",
  "Lavagem de Cortinas e Sofás",
  "A Melhor Lavanderia Delivery",
  "Lavagem a Seco Premium",
  "Lavanderia Inovata: Qualidade 5 Estrelas"
];

export const HOME_FAQ = [
  {
    question: "A Lavanderia Inovata é uma lavanderia perto de mim bem avaliada?",
    answer: "Sim! Somos referência em Osasco como uma lavanderia profissional com centenas de clientes satisfeitos que elogiam nossa lavagem e passadoria, além do atendimento atencioso."
  },
  {
    question: "Vocês fazem lavagem de edredons e lavagem de cortinas?",
    answer: "Com certeza. Somos especialistas em lavagem de edredons, cobertores e cortinas de todos os tamanhos, com secagem controlada para evitar odores e garantir a higienização completa."
  },
  {
    question: "Como funciona a lavanderia osasco leva e traz?",
    answer: "É simples: você agenda pelo WhatsApp, nossa equipe retira suas roupas em casa ou no trabalho, processamos com lavagem e passadoria profissional e entregamos tudo pronto para o uso em até 48 horas."
  },
  {
    question: "Vocês são uma lavanderia de tenis osasco?",
    answer: "Sim, oferecemos um serviço exclusivo de Spa de Calçados, realizando a limpeza profunda e clareamento de tênis, sneakers e sapatos sociais."
  }
];