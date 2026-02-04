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
  { id: 'sp-3', name: 'Jaraguá', city: 'São Paulo', slug: 'sao-paulo-jaragua' },
  { id: 'sp-4', name: 'Vila Leopoldina', city: 'São Paulo', slug: 'sao-paulo-vila-leopoldina' },
  { id: 'sp-5', name: 'Jaguaré', city: 'São Paulo', slug: 'sao-paulo-jaguare' },
  { id: 'sp-6', name: 'Butantã', city: 'São Paulo', slug: 'sao-paulo-butanta' },
  { id: 'sp-7', name: 'Rio Pequeno', city: 'São Paulo', slug: 'sao-paulo-rio-pequeno' },
  { id: 'sp-8', name: 'Raposo Tavares', city: 'São Paulo', slug: 'sao-paulo-raposo-tavares' },
  { id: 'sp-9', name: 'Vila Sônia', city: 'São Paulo', slug: 'sao-paulo-vila-sonia' },

  // Carapicuíba
  { id: 'cp-1', name: 'Centro', city: 'Carapicuíba', slug: 'carapicuiba-centro' },
  { id: 'cp-2', name: 'Cohab', city: 'Carapicuíba', slug: 'carapicuiba-cohab' },
  { id: 'cp-3', name: 'Vila Dirce', city: 'Carapicuíba', slug: 'carapicuiba-vila-dirce' },
  { id: 'cp-4', name: 'Fazendinha', city: 'Carapicuíba', slug: 'carapicuiba-fazendinha' },

  // Barueri
  { id: 'br-1', name: 'Alphaville', city: 'Barueri', slug: 'barueri-alphaville' },
  { id: 'br-2', name: 'Tamboré', city: 'Barueri', slug: 'barueri-tambore' },
  { id: 'br-3', name: 'Jardim Silveira', city: 'Barueri', slug: 'barueri-jardim-silveira' },
  { id: 'br-4', name: 'Centro', city: 'Barueri', slug: 'barueri-centro' },

  // Jandira
  { id: 'jd-1', name: 'Centro', city: 'Jandira', slug: 'jandira-centro' },
  { id: 'jd-2', name: 'Jardim Alvorada', city: 'Jandira', slug: 'jandira-jardim-alvorada' },
];

export const SERVICES_DATA: any[] = [
  {
    id: 'roupas',
    title: 'Roupas e Têxteis',
    description: 'Do dia a dia aos tecidos finos. Lavamos, passamos e renovamos suas roupas.',
    icon: <Shirt className="w-12 h-12 text-primary-gold" />,
    features: ['Roupas do dia a dia', 'Ternos e Vestidos', 'Lavagem a Seco']
  },
  {
    id: 'casa',
    title: 'Casa e Decoração',
    description: 'Higienização profunda para renovar o ambiente da sua casa.',
    icon: <Armchair className="w-12 h-12 text-primary-gold" />,
    features: ['Tapetes e Cortinas', 'Edredons e Cobertores', 'Estofados e Sofás']
  },
  {
    id: 'especiais',
    title: 'Especiais e Infantil',
    description: 'Cuidado redobrado com itens delicados, tênis e artigos de bebê.',
    icon: <Sparkles className="w-12 h-12 text-primary-gold" />,
    features: ['Tênis e Calçados', 'Carrinhos de Bebê', 'Pelúcias e Malas']
  },
  {
    id: 'delivery',
    title: 'Delivery Rápido',
    description: 'Conveniência total: buscamos e entregamos no seu endereço.',
    icon: <Truck className="w-12 h-12 text-primary-gold" />,
    features: ['Raio de 15km', 'Coleta Agendada', 'Entrega 24-48h']
  }
];

export const BLOG_POSTS = [
  {
    id: 'guia-limpeza-tenis',
    slug: 'guia-limpeza-tenis-osasco-barueri',
    title: 'Guia de Limpeza de Tênis em Osasco e Barueri',
    excerpt: 'Descubra como manter seus sneakers novos por muito mais tempo com técnicas profissionais.',
    content: `Cuidar de calçados premium exige mais do que apenas água e sabão. Em cidades como Osasco e Barueri, onde a rotina é agitada, seus tênis sofrem com a poluição e o desgaste natural. Na Lavanderia Inovata, utilizamos produtos biodegradáveis que limpam profundamente sem agredir materiais delicados como camurça e mesh. Atendemos regiões como Alphaville, Tamboré e o Centro de Osasco com nosso delivery especializado.`,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    date: '10 de Junho, 2024',
    category: 'Cuidado com Calçados'
  },
  {
    id: 'higiene-edredons',
    slug: 'higiene-edredons-tapetes-carapicuiba',
    title: 'Higiene de Edredons e Tapetes: Saúde em Carapicuíba',
    excerpt: 'Saiba por que a higienização profunda é vital para prevenir alergias na sua família.',
    content: `Com as mudanças de estação, edredons e tapetes acumulam ácaros e poeira. Moradores de Carapicuíba, Vila Dirce e redondezas agora contam com a tecnologia da Inovata para uma limpeza bactericida completa. Nossa secagem em estufa garante que nenhuma umidade permaneça, evitando mofo e odores desagradáveis.`,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    date: '15 de Junho, 2024',
    category: 'Dicas de Casa'
  },
  {
    id: 'praticidade-delivery',
    slug: 'delivery-lavanderia-lapa-vila-leopoldina',
    title: 'Delivery de Lavanderia na Lapa e Vila Leopoldina',
    excerpt: 'A solução de tempo que os paulistanos da Zona Oeste precisavam.',
    content: `O tempo é o nosso bem mais precioso. Se você vive na Lapa, Vila Leopoldina ou Jaguaré, sabe como o trânsito pode ser desafiador. Nosso serviço de "Leva e Traz" foi desenhado para eliminar a preocupação com a roupa suja da sua agenda. Buscamos suas peças e entregamos em até 48 horas, prontas para o uso.`,
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=800&auto=format&fit=crop',
    date: '20 de Junho, 2024',
    category: 'Logística & Estilo de Vida'
  }
];

export const HOME_TYPEWRITER_TEXTS = [
  "Lavanderia Premium em Osasco",
  "Seus Tênis Novos de Novo",
  "Roupas Lavadas e Passadas",
  "Tapetes e Cortinas Higienizados",
  "Edredons Limpos e Cheirosos",
  "Limpeza de Sofás e Estofados",
  "Higienização de Carrinhos de Bebê",
  "Delivery Grátis acima de R$250",
  "Cuidado Especial com Roupas Finas",
  "Remoção de Manchas Difíceis",
  "Qualidade Inovata"
];

export const HOME_FAQ = [
  {
    question: "Quais bairros de Osasco vocês atendem com Delivery?",
    answer: "Atendemos toda a região de Osasco, incluindo Centro, Vila Yara, Campesina, Parque Continental, Jaguaré, Presidente Altino, Km 18, Bela Vista, entre outros num raio de 15km da nossa loja na Av. César Abraão."
  },
  {
    question: "Quanto custa para lavar um edredom ou cobertor?",
    answer: "Nossos valores são a partir de R$ 45,00 para edredons de solteiro. Utilizamos produtos bactericidas e secagem em estufa que garantem a eliminação de ácaros e fungos, devolvendo sua peça cheirosa e macia."
  },
  {
    question: "Vocês buscam e entregam (Leva e Traz)?",
    answer: "Sim! Temos serviço de coleta e entrega (Delivery). Para pedidos acima de R$ 250,00, o frete é totalmente GRÁTIS em nossa área de cobertura. Para valores menores, consulte a taxa para seu bairro no WhatsApp."
  },
  {
    question: "Quanto tempo demora para ficar pronto?",
    answer: "Para roupas do dia a dia (cestos), o prazo médio é de 24 a 48 horas. Itens especiais como tapetes, cortinas e carrinhos de bebê levam cerca de 5 a 7 dias úteis para garantir uma secagem e higienização perfeitas."
  },
  {
    question: "Vocês lavam tênis e sapatos?",
    answer: "Sim, somos especialistas em 'Spa de Calçados'. Lavamos tênis esportivos, casuais, camurça e sapatos sociais, com limpeza detalhada da sola, palmilhas e cadarços a partir de R$ 35,00."
  }
];