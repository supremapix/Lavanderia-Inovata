import React from 'react';
import { CONTACT } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contato | Lavanderia Inovata Osasco</title>
        <meta name="description" content="Entre em contato com a Lavanderia Inovata. Telefone, WhatsApp e endereço em Osasco." />
      </Helmet>
      
      <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-black text-center text-secondary-dark mb-12">Fale Conosco</h1>
          
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="bg-secondary-dark text-white p-10 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary-gold" />
                  <div>
                    <p className="font-bold">Telefones</p>
                    <p>{CONTACT.phone}</p>
                    <p>{CONTACT.whatsappDisplay}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary-gold" />
                  <div>
                    <p className="font-bold">E-mail</p>
                    <p>{CONTACT.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary-gold" />
                  <div>
                    <p className="font-bold">Endereço</p>
                    <p>{CONTACT.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-10 md:w-1/2">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Envie uma mensagem</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none" placeholder="(11) 99999-9999" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea rows={4} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button className="w-full bg-primary-blue text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
