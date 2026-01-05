import React from 'react';
import { CONTACT } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const Contact: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Lavanderia Inovata",
      "address": CONTACT.address,
      "telephone": CONTACT.phone,
      "email": CONTACT.email,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ]
    }
  };

  return (
    <>
      <EnhancedSEO 
        title="Contato | Lavanderia Inovata Osasco"
        description="Entre em contato com a Lavanderia Inovata. Telefone, WhatsApp e endereço na Av. César Abraão, 209 - Osasco."
        structuredData={schemaData}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Contato', item: '/contato' }
        ]}
      />
      
      <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-black text-center text-secondary-dark mb-12">Fale Conosco</h1>
          
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Info Section */}
            <div className="bg-secondary-dark text-white p-10 md:w-1/3 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-8">Canais de Atendimento</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary-gold mb-1">Ligue ou WhatsApp</p>
                      <p className="text-lg">{CONTACT.phone}</p>
                      <p className="text-lg">{CONTACT.whatsappDisplay}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-primary-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary-gold mb-1">E-mail</p>
                      <p>{CONTACT.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary-gold mb-1">Endereço</p>
                      <p>{CONTACT.address}</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Clock className="text-primary-gold shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-primary-gold mb-1">Horário</p>
                      <p>Seg - Sex: 8h às 18h</p>
                      <p>Sáb: 9h às 13h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                 <p className="text-gray-400 text-sm">CNPJ: {CONTACT.cnpj}</p>
              </div>
            </div>
            
            {/* Form & Map Section */}
            <div className="md:w-2/3 flex flex-col">
               {/* Map Iframe */}
               <div className="h-64 bg-gray-200 w-full relative">
                 <iframe 
                   title="Localização Lavanderia Inovata"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.077678564887!2d-46.79409892383804!3d-23.53001866043141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff6370000001%3A0x4000000000000000!2sAv.%20C%C3%A9sar%20Abra%C3%A3o%2C%20209%20-%20Osasco%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen={true} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="absolute inset-0"
                 ></iframe>
               </div>

               <div className="p-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Envie uma mensagem direta</h2>
                <form className="space-y-4" onSubmit={(e) => {
                   e.preventDefault();
                   window.open(`https://wa.me/${CONTACT.whatsapp}?text=Mensagem do Site`, '_blank');
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none" placeholder="Seu nome" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp</label>
                      <input type="tel" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none" placeholder="(11) 99999-9999" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Como podemos ajudar?</label>
                    <textarea rows={3} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none" placeholder="Digite sua mensagem..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-blue text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors">
                    Iniciar Conversa no WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;