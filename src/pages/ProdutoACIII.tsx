export default function ProdutoACIII() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
             <div className="aspect-[3/4] bg-brand-black border-8 border-brand-red rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-texture opacity-20"></div>
                <span className="text-6xl font-black text-brand-red relative z-10">AC-III</span>
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <span className="bg-brand-red/10 text-brand-red px-4 py-2 rounded font-bold text-lg inline-block mb-4">Piso sobre piso e porcelanato</span>
            <h1 className="text-5xl font-black text-brand-black mb-6 uppercase">Massa Pura <span className="text-brand-red">Tipo AC-III / 9 Funções</span></h1>
            <p className="text-2xl text-gray-700 font-medium mb-8">
              A argamassa premium com foco em alto desempenho para assentamentos exigentes.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                "Porcelanato interno", "Porcelanato externo", "Mármores", 
                "Granitos", "Cerâmica interna", "Cerâmica externa", 
                "Pedras decorativas", "Placa de ardósia", "Piso sobre piso"
              ].map((item, i) => (
                <div key={i} className="bg-brand-light p-3 rounded flex items-center gap-2 border-l-2 border-brand-red text-sm font-bold">
                  <i className="bi bi-check2 text-brand-red"></i>
                  {item}
                </div>
              ))}
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="font-black text-xl mb-3">Informações Técnicas</h3>
              <ul className="space-y-2 font-medium text-gray-700">
                <li><strong>Indicação:</strong> Piso sobre piso e porcelanato</li>
                <li><strong>Embalagem:</strong> 20kg</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="font-black text-xl mb-3 text-red-800 flex items-center gap-2">
                <i className="bi bi-exclamation-triangle-fill"></i> Observação Técnica
              </h3>
              <p className="font-medium text-red-900">
                Produto <strong>não indicado</strong> para aplicação em saunas, estufas, churrasqueiras, lareiras, pisos aquecidos, frigoríficos e piscinas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
