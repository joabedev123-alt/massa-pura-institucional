export default function Aplicacoes() {
  return (
    <div className="py-16 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4 md:mb-6 uppercase">Aplicações e <span className="text-brand-orange">Portfólio</span></h1>
          <div className="w-16 md:w-24 h-2 bg-brand-orange mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Veja as infinitas possibilidades e os excelentes resultados da aplicação dos nossos produtos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Pisos cerâmicos", "Paredes revestidas", "Porcelanato", "Garagens",
            "Áreas internas", "Áreas externas", "Obras em acabamento", "Aplicadores profissionais"
          ].map((item, i) => (
            <div key={i} className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors z-10"></div>
               <div className="absolute inset-0 bg-texture opacity-50 z-0"></div>
               <span className="relative z-20 text-white font-bold text-center px-2 group-hover:scale-110 transition-transform">
                 {item}
               </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
