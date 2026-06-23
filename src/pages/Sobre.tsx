export default function Sobre() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="text-5xl font-black text-brand-black mb-8 uppercase">Sobre a <span className="text-brand-orange">Massa Pura</span></h1>
        <div className="w-24 h-2 bg-brand-orange mb-10"></div>
        <p className="text-xl text-gray-700 font-medium mb-6">
          A Argamassa Massa Pura Esquincalha oferece produtos de alto padrão para assentamento de pisos, cerâmicas, azulejos, pastilhas, lajotas, porcelanatos, mármores, granitos, pedras decorativas e piso sobre piso.
        </p>
        <p className="text-xl text-gray-700 font-medium mb-12">
          Nossa empresa, MASSA PURA ESQUINCALHA COM. E IND. DE ARGAMASSA LTDA, está focada em entregar o melhor rendimento e qualidade para o mercado da construção civil.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-brand-light p-8 rounded-xl border-l-8 border-brand-orange">
             <h3 className="text-2xl font-black mb-4">Slogan</h3>
             <p className="text-lg font-bold text-gray-600">ARGAMASSAS DE ALTO PADRÃO E QUALIDADE</p>
           </div>
           <div className="bg-brand-light p-8 rounded-xl border-l-8 border-brand-orange">
             <h3 className="text-2xl font-black mb-4">Missão</h3>
             <p className="text-lg font-bold text-gray-600">Os produtos MASSA PURA têm qualidade, rendimento e praticidade.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
