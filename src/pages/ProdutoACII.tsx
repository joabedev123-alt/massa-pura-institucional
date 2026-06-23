export default function ProdutoACII() {
  return (
    <div className="py-16 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/3">
             <div className="w-full bg-black border-4 border-brand-blue rounded-xl overflow-hidden flex items-center justify-center shadow-2xl relative">
                <video 
                  src="/fotos videos/argamassaac2.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  controls
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <span className="bg-brand-blue/10 text-brand-blue px-4 py-2 rounded font-bold text-sm md:text-lg inline-block mb-4">Uso Interno e Externo</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-black mb-4 md:mb-6 uppercase">Massa Pura <span className="text-brand-blue">Tipo AC-II Cinza</span></h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6 md:mb-8">
              A escolha certa para cerâmicas, pisos, paredes, garagens e ambientes úmidos.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-brand-light p-4 rounded-lg flex items-center gap-3 border-l-4 border-brand-blue">
                <i className="bi bi-check-circle-fill text-brand-blue text-xl"></i>
                <span className="font-bold">Fácil aplicação</span>
              </div>
              <div className="bg-brand-light p-4 rounded-lg flex items-center gap-3 border-l-4 border-brand-blue">
                <i className="bi bi-check-circle-fill text-brand-blue text-xl"></i>
                <span className="font-bold">Rendimento</span>
              </div>
              <div className="bg-brand-light p-4 rounded-lg flex items-center gap-3 border-l-4 border-brand-blue">
                <i className="bi bi-check-circle-fill text-brand-blue text-xl"></i>
                <span className="font-bold">Qualidade</span>
              </div>
              <div className="bg-brand-light p-4 rounded-lg flex items-center gap-3 border-l-4 border-brand-blue">
                <i className="bi bi-check-circle-fill text-brand-blue text-xl"></i>
                <span className="font-bold">Menor custo</span>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-black text-xl mb-3">Informações Técnicas</h3>
              <ul className="space-y-2 font-medium text-gray-700">
                <li><strong>Indicação:</strong> Áreas internas e externas</li>
                <li><strong>Aplicações:</strong> Cerâmicas, pisos e paredes, garagens, ambientes úmidos</li>
                <li><strong>Embalagem:</strong> 20kg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
