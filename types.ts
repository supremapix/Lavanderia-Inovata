export interface Neighborhood {
  id: string;
  name: string;
  city: 'Osasco' | 'São Paulo' | 'Carapicuíba' | 'Barueri' | 'Jandira';
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  cnpj: string;
}
