import React from 'react';
import { DollarSign, Info } from 'lucide-react';
import { CONTACT } from '../constants';
import EnhancedSEO from '../components/EnhancedSEO';

const Prices: React.FC = () => {
  // Simple conceptual pricing structure
  const priceCategories = [
    {
      title: "Roupas Dia a Dia (Lavar e Passar)",
      items: [
        { name: "Camisa Social", price: "R$ 18,00" },
        { name: "Camiseta / Polo", price: "R$ 12,00" },
        { name: "Calça Jeans / Sarja", price: "R$ 20,00" },
        { name: "Bermuda / Shorts", price: "R$ 15,00" },
      ]
    },
    {
      title: "Cama, Mesa e Banho",
      items: [
        { name: "Edredom Solteiro", price: "R$ 45,00" },
        { name: "Edredom Casal", price: "R$ 55,00" },
        { name: "Edredom Queen/King", price: "R$ 65,00" },
        { name: "Cobertor", price: "A partir de R$ 40,00" },
        { name: "Jogo de Lençol", price: "R$ 25,00" },
      ]
    },
    {
      title: "Tênis e Calçados",
      items: [
        { name: "Tênis Esportivo / Casual", price: "R$ 35,00" },
        { name: "Tênis Branco / Tecido", price: "R$ 40,00" },
        { name: "Sapatos Sociais", price: "R$ 30,00" },
        { name: "Botas", price: "A partir de R$ 45,00" },
      ]
    },
    {
      title: "Infantil e Bebê",
      items: [
        { name: "Carrinho de Bebê (Simples)", price: "R$ 120,00" },
        { name: "Carrinho de Bebê (Travel System)", price: "R$ 180,00" },
        { name: "Bebê Conforto / Cadeirinha", price: "R$ 80,00" },
        { name: "Ursinhos de Pelúcia (P/M)", price: "A partir de R$ 25,00" },
      ]
    },
    {
      title: "Tapetes e Cortinas",
      items: [
        { name: "Tapete (m²)", price: "R$ 35,00 / m²" },
        { name: "Cortina Tecido Leve (m²)", price: "R$ 25,00 / m²" },
        { name: "Cortina com Blackout (m²)", price: "R$ 35,00 / m²" },
      ]
    },
    {
      title: "Peças Delicadas (Seco)",
      items: [
        { name: "Terno Completo", price: "R$ 60,00" },
        { name: "Paletó / Blazer", price: "R$ 35,00" },
        { name: "Vestido de Festa", price: "Sob Consulta" },
        { name: "Casaco de Lã / Sobretudo", price: "R$ 50,00" },
      ]
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="Tabela de Preços | Lavanderia Inovata Osasco"
        description="Preços de lavanderia em Osasco: Lavar Roupas, Tênis, Tapetes, Sofás e Carrinhos de Bebê. Confira nossa tabela completa!"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Preços', item: '/precos' }
        ]}
      />

      <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-black text-secondary-dark mb-4">Tabela de Preços</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Valores transparentes para todos os nossos serviços. Qualidade premium que cabe no seu bolso.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {priceCategories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-secondary-dark text-white p-4 px-6 flex items-center gap-3">
                  <DollarSign size={20} className="text-primary-gold" />
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="divide-y divide-gray-100">
                    {category.items.map((item, i) => (
                      <li key={i} className="py-4 flex justify-between items-center hover:bg-gray-50 px-2 rounded-lg transition-colors">
                        <span className="font-medium text-gray-700">{item.name}</span>
                        <span className="font-bold text-primary-blue">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex gap-4 items-start mt-8">
              <Info className="text-primary-blue shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-primary-blue mb-2">Observações Importantes</h4>
                <p className="text-sm text-gray-600 mb-2">
                  * Os preços podem variar dependendo do tecido, complexidade da mancha, tamanho exato ou detalhes da peça.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  * Lavagem de Estofados (Sofás, Poltronas) é feita sob orçamento via foto no WhatsApp.
                </p>
                <p className="text-sm text-gray-600">
                  * Frete grátis para coleta e entrega em pedidos acima de R$ 250,00. Abaixo deste valor, consulte a taxa para sua região.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href={`https://wa.me/${CONTACT.whatsapp}?text=Olá, gostaria de um orçamento para...`} 
                className="inline-block bg-primary-gold text-secondary-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:shadow-lg transition-all"
              >
                Orçamento Personalizado no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Prices;