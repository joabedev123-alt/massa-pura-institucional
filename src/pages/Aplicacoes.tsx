import { motion } from 'framer-motion';

export default function Aplicacoes() {
  return (
    <div className="py-16 md:py-24 bg-brand-light min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4 md:mb-6 uppercase">Aplicações e <span className="text-brand-orange">Portfólio</span></h1>
          <div className="w-16 md:w-24 h-2 bg-brand-orange mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Veja as infinitas possibilidades e os excelentes resultados da aplicação dos nossos produtos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { title: 'Pisos STs', image: 'pisos_sts_1782303227080.png' },
            { title: 'Paredes', image: 'paredes_revestimento_1782303238830.png' },
            { title: 'Porcelanato', image: 'porcelanato_luxo_1782303249138.png' },
            { title: 'Garagens', image: 'garagens_piso_1782303260307.png' },
            { title: 'Áreas internas', image: 'areas_internas_1782303270950.png' },
            { title: 'Áreas externas', image: 'areas_externas_1782303280914.png' },
            { title: 'Obras em acabamento', image: 'obras_acabamento_1782303290875.png' },
            { title: 'Aplicadores', image: 'aplicadores_profissionais_1782303301386.png' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group border-t-4 border-brand-orange"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none"></div>
                <img src={`/portfolio/${item.image}`} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 bg-brand-black">
                <h3 className="text-lg font-bold text-white text-center">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
