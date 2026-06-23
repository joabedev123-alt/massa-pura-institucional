export default function ProdutoACI() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
             <div className="aspect-[3/4] bg-brand-green/20 border-8 border-brand-green rounded-xl flex items-center justify-center shadow-2xl">
                <span className="text-6xl font-black text-brand-green">AC-I</span>
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <span className="bg-brand-green/10 text-brand-green px-4 py-2 rounded font-bold text-lg inline-block mb-4">Uso Interno</span>
            <h1 className="text-5xl font-black text-brand-black mb-6 uppercase">Massa Pura <span className="text-brand-green">Tipo AC-I</span></h1>
            <p className="text-2xl text-gray-700 font-medium mb-8">
              A argamassa ideal para cerâmicas, azulejos, pastilhas e lajotas em áreas internas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-brand-light p-4 rounded-lg flex items-center gap-3 border-l-4 border-brand-green">
                <i className="bi bi-check-circle-fill text-brand-green text-xl"></i>
                <span className="font-bold">Fácil aplicação</span>
              </div>
              <div className="bg-brand-light p-4 rounded-lg flex items-center gap-3 border-l-4 border-brand-green">
                <i className="bi bi-check-circle-fill text-brand-green text-xl"></i>
                <span className="font-bold">Bom rendimento</span>
              </div>
              <div className="bg-brand-light p-4 rounded-lg flex items-center gap-3 border-l-4 border-brand-green">
                <i className="bi bi-check-circle-fill text-brand-green text-xl"></i>
                <span className="font-bold">Qualidade</span>
              </div>
              <div className="bg-brand-light p-4 rounded-lg flex items-center gap-3 border-l-4 border-brand-green">
                <i className="bi bi-check-circle-fill text-brand-green text-xl"></i>
                <span className="font-bold">Menor custo</span>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-black text-xl mb-3">Informações Técnicas</h3>
              <ul className="space-y-2 font-medium text-gray-700">
                <li><strong>Indicação:</strong> Áreas internas</li>
                <li><strong>Embalagem:</strong> 20kg</li>
                <li><strong>Recomendações:</strong> Siga as instruções de preparo, aplicação e cura na embalagem.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
