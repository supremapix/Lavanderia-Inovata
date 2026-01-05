import { ContactInfo, Neighborhood, Service } from './types';
import { Shirt, Snowflake, Droplets, Truck } from 'lucide-react';
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
    id: 'lavar-passar',
    title: 'Lavar e Passar',
    description: 'Cuidado completo para suas roupas do dia a dia.',
    icon: <Shirt className="w-12 h-12 text-primary-gold" />,
    features: ['Roupas do dia a dia', 'Cama, mesa e banho', 'Dobradas e embaladas']
  },
  {
    id: 'a-seco',
    title: 'Lavagem a Seco',
    description: 'Tecnologia avançada para tecidos delicados e finos.',
    icon: <Snowflake className="w-12 h-12 text-primary-gold" />,
    features: ['Ternos e Vestidos', 'Tecidos delicados', 'Sem encolhimento']
  },
  {
    id: 'umida',
    title: 'Lavagem Úmida',
    description: 'Processo Wet Cleaning ecológico e eficiente.',
    icon: <Droplets className="w-12 h-12 text-primary-gold" />,
    features: ['Ecológicamente correto', 'Remove manchas difíceis', 'Hipoalergênico']
  },
  {
    id: 'delivery',
    title: 'Delivery Rápido',
    description: 'Buscamos e entregamos no conforto da sua casa.',
    icon: <Truck className="w-12 h-12 text-primary-gold" />,
    features: ['Raio de 15km', 'Coleta agendada', 'Entrega em 24-48h']
  }
];

export const HOME_TYPEWRITER_TEXTS = [
  "Lavanderia Profissional em Osasco",
  "Delivery em Até 24 Horas",
  "Atendemos 15km de Raio"
];
