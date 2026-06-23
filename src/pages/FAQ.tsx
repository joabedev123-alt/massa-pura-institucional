import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Qual argamassa usar em áreas internas?",
      a: "A Massa Pura Tipo AC-I é indicada para áreas internas."
    },
    {
      q: "Qual argamassa usar em áreas internas e externas?",
      a: "A Massa Pura Tipo AC-II é indicada para ambientes internos e externos, incluindo pisos, paredes, garagens e ambientes úmidos."
    },
    {
      q: "Qual produto usar para porcelanato e piso sobre piso?",
      a: "A Massa Pura Tipo AC-III / 9 Funções é indicada para porcelanato, mármore, granito, cerâmica, pedras decorativas, ardósia e piso sobre piso."
    },
    {
      q: "As embalagens são de quantos quilos?",
      a: "As embalagens apresentadas são de 20kg."
    },
    {
      q: "A argamassa pode ser usada em piscinas?",
      a: "A linha AC-III apresentada não é indicada para piscinas, saunas, estufas, churrasqueiras, lareiras, pisos aquecidos e frigoríficos."
    },
    {
      q: "Como comprar ou solicitar informações?",
      a: "O contato pode ser feito pelo WhatsApp, telefone, e-mail ou redes sociais."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4 md:mb-6 uppercase text-center">Dúvidas <span className="text-brand-orange">Frequentes</span></h1>
        <div className="w-16 md:w-24 h-2 bg-brand-orange mx-auto mb-10 md:mb-16"></div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-5 bg-brand-light hover:bg-gray-100 font-bold text-lg flex justify-between items-center transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.q}
                <i className={`bi bi-chevron-${openIndex === index ? 'up' : 'down'} text-brand-orange`}></i>
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white text-gray-700 font-medium border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
