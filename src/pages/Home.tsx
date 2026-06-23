import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-texture bg-brand-black text-white overflow-hidden py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight text-shadow">
                Argamassa de Alto Padrão para Obras com Mais <span className="text-brand-orange">Qualidade</span>, <span className="text-brand-yellow">Rendimento</span> e <span className="text-brand-green">Praticidade</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium">
                Linha completa de argamassas Massa Pura para áreas internas, externas, porcelanatos, cerâmicas, pisos e revestimentos profissionais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5521978958281" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg"
                >
                  <i className="bi bi-whatsapp text-2xl"></i> Falar no WhatsApp
                </a>
                <Link 
                  to="/produtos"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-black text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-3 transition-all"
                >
                  Ver Produtos
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-brand-orange/20 rounded-full blur-3xl -z-10"></div>
              <div className="w-full relative shadow-2xl rounded-lg border-4 border-brand-orange overflow-hidden bg-brand-light flex items-center justify-center">
                <img 
                  src="/foto hero.jpeg" 
                  alt="Argamassa Massa Pura" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-4 md:mb-6 uppercase">O que fazemos</h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              Fabricamos e comercializamos argamassas para assentamento de revestimentos, oferecendo soluções robustas para obras residenciais, comerciais e profissionais da construção civil.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: 'bi-bricks', title: 'Assentamento' },
              { icon: 'bi-house-gear', title: 'Áreas Internas' },
              { icon: 'bi-building', title: 'Áreas Externas' },
              { icon: 'bi-grid-3x3-gap', title: 'Pisos e Paredes' },
              { icon: 'bi-gem', title: 'Porcelanato' },
              { icon: 'bi-tools', title: 'Uso Profissional' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-brand-light p-6 rounded-lg text-center border-b-4 border-transparent hover:border-brand-orange transition-all shadow-sm hover:shadow-xl"
              >
                <i className={`bi ${item.icon} text-5xl text-brand-orange mb-4 block`}></i>
                <h3 className="font-bold text-brand-black">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16 md:py-24 bg-brand-light border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-4 uppercase">Nossa Linha de Produtos</h2>
            <div className="w-16 md:w-24 h-2 bg-brand-orange mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 font-medium">O produto certo para cada necessidade da sua obra.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Produto 1 - AC-I */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border-t-8 border-brand-green flex flex-col group relative">
               <div className="p-8 flex-grow">
                 <div className="flex justify-between items-start mb-6">
                   <div>
                     <h3 className="text-2xl font-black text-brand-black mb-1">Massa Pura AC-I</h3>
                     <span className="bg-brand-green/10 text-brand-green px-3 py-1 rounded font-bold text-sm">Áreas Internas</span>
                   </div>
                   <i className="bi bi-house-door text-3xl text-brand-green opacity-50"></i>
                 </div>
                 <p className="text-gray-600 font-medium mb-6">
                   Ideal para cerâmicas, azulejos, pastilhas e lajotas em ambientes internos. Melhor custo-benefício.
                 </p>
                 <ul className="space-y-2 font-semibold text-gray-700 mb-8">
                   <li className="flex items-center gap-2"><i className="bi bi-check-circle-fill text-brand-green"></i> Fácil aplicação</li>
                   <li className="flex items-center gap-2"><i className="bi bi-check-circle-fill text-brand-green"></i> Alto rendimento</li>
                   <li className="flex items-center gap-2"><i className="bi bi-check-circle-fill text-brand-green"></i> Embalagem 20kg</li>
                 </ul>
               </div>
               <div className="p-6 bg-gray-50 border-t border-gray-100">
                 <Link to="/produtos/ac-i" className="block w-full py-3 text-center bg-brand-black text-white font-bold rounded hover:bg-brand-green transition-colors">
                   Ver Detalhes do Produto
                 </Link>
               </div>
            </div>

            {/* Produto 2 - AC-II */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border-t-8 border-brand-blue flex flex-col group relative transform md:-translate-y-4">
               <div className="p-8 flex-grow">
                 <div className="flex justify-between items-start mb-6">
                   <div>
                     <h3 className="text-2xl font-black text-brand-black mb-1">Massa Pura AC-II</h3>
                     <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded font-bold text-sm">Interna e Externa</span>
                   </div>
                   <i className="bi bi-building text-3xl text-brand-blue opacity-50"></i>
                 </div>
                 <p className="text-gray-600 font-medium mb-6">
                   Alta resistência para pisos, paredes, garagens e ambientes úmidos.
                 </p>
                 <ul className="space-y-2 font-semibold text-gray-700 mb-8">
                   <li className="flex items-center gap-2"><i className="bi bi-check-circle-fill text-brand-blue"></i> Maior aderência</li>
                   <li className="flex items-center gap-2"><i className="bi bi-check-circle-fill text-brand-blue"></i> Para ambientes úmidos</li>
                   <li className="flex items-center gap-2"><i className="bi bi-check-circle-fill text-brand-blue"></i> Embalagem 20kg</li>
                 </ul>
               </div>
               <div className="p-6 bg-gray-50 border-t border-gray-100">
                 <Link to="/produtos/ac-ii" className="block w-full py-3 text-center bg-brand-black text-white font-bold rounded hover:bg-brand-blue transition-colors">
                   Ver Detalhes do Produto
                 </Link>
               </div>
            </div>

            {/* Produto 3 - AC-III */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border-t-8 border-brand-red flex flex-col group relative">
               <div className="p-8 flex-grow">
                 <div className="flex justify-between items-start mb-6">
                   <div>
                     <h3 className="text-2xl font-black text-brand-black mb-1">Massa Pura AC-III</h3>
                     <span className="bg-brand-red/10 text-brand-red px-3 py-1 rounded font-bold text-sm">9 Funções Premium</span>
                   </div>
                   <i className="bi bi-gem text-3xl text-brand-red opacity-50"></i>
                 </div>
                 <p className="text-gray-600 font-medium mb-6">
                   Máximo desempenho para porcelanatos, mármores, granitos e piso sobre piso.
                 </p>
                 <ul className="space-y-2 font-semibold text-gray-700 mb-8">
                   <li className="flex items-center gap-2"><i className="bi bi-check-circle-fill text-brand-red"></i> Piso sobre piso</li>
                   <li className="flex items-center gap-2"><i className="bi bi-check-circle-fill text-brand-red"></i> Porcelanatos premium</li>
                   <li className="flex items-center gap-2"><i className="bi bi-check-circle-fill text-brand-red"></i> Embalagem 20kg</li>
                 </ul>
               </div>
               <div className="p-6 bg-gray-50 border-t border-gray-100">
                 <Link to="/produtos/ac-iii" className="block w-full py-3 text-center bg-brand-black text-white font-bold rounded hover:bg-brand-red transition-colors">
                   Ver Detalhes do Produto
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher a Massa Pura */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background diagonal decorative */}
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-brand-light transform skew-x-12 translate-x-1/2 md:translate-x-32 -z-10 opacity-50 md:opacity-100"></div>
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-black mb-6 md:mb-8 uppercase leading-tight">
                Por que escolher a <span className="text-brand-orange">Massa Pura?</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-medium mb-8 md:mb-10">
                Os produtos Massa Pura têm qualidade, rendimento e praticidade. Nossa missão é oferecer os melhores produtos técnicos para a sua obra com um preço justo.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Qualidade de alto padrão", icon: "bi-star-fill" },
                  { title: "Melhor rendimento", icon: "bi-graph-up-arrow" },
                  { title: "Fácil preparo", icon: "bi-bucket-fill" },
                  { title: "Linha Completa", icon: "bi-boxes" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <i className={`bi ${item.icon} text-2xl text-brand-orange`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-black">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {/* Image Grid Placeholder */}
               <div className="space-y-4">
                 <div className="h-64 bg-gray-300 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
                 <div className="h-40 bg-gray-400 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
               </div>
               <div className="space-y-4 pt-8">
                 <div className="h-40 bg-gray-400 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
                 <div className="h-64 bg-gray-300 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Institucional */}
      <section className="py-16 md:py-20 relative bg-brand-black overflow-hidden border-y-8 border-brand-orange">
        <div className="absolute inset-0 bg-texture opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 uppercase tracking-wider">
            Linha Completa <span className="text-brand-orange">Massa Pura</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-4xl mx-auto mb-8 md:mb-10">
            Argamassas desenvolvidas para entregar qualidade, rendimento e praticidade em cada etapa da sua obra.
          </p>
          <div className="flex flex-wrap justify-center items-end gap-3 md:gap-8 opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Embalagens mockup */}
             <div className="w-24 sm:w-32 md:w-48 h-32 sm:h-48 md:h-64 bg-brand-green/20 border-4 border-brand-green rounded-t flex flex-col justify-end p-2 md:p-4 items-center">
                <span className="font-black text-brand-green text-sm sm:text-xl md:text-3xl">AC-I</span>
             </div>
             <div className="w-28 sm:w-40 md:w-56 h-40 sm:h-56 md:h-72 bg-brand-blue/20 border-4 border-brand-blue rounded-t flex flex-col justify-end p-2 md:p-4 items-center scale-110 relative z-10 shadow-2xl">
                <span className="font-black text-brand-blue text-base sm:text-2xl md:text-4xl">AC-II</span>
             </div>
             <div className="w-24 sm:w-32 md:w-48 h-32 sm:h-48 md:h-64 bg-brand-red/20 border-4 border-brand-red rounded-t flex flex-col justify-end p-2 md:p-4 items-center">
                <span className="font-black text-brand-red text-sm sm:text-xl md:text-3xl">AC-III</span>
             </div>
          </div>
        </div>
      </section>
      
      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-4 uppercase">Quem usa, aprova.</h2>
            <div className="w-16 md:w-24 h-2 bg-brand-orange mx-auto mb-4 md:mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-orange relative">
              <i className="bi bi-quote text-5xl text-brand-orange/20 absolute top-4 right-6"></i>
              <div className="flex text-brand-yellow mb-4">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p className="text-lg text-gray-700 italic font-medium mb-6">
                "Produto com ótimo rendimento e fácil aplicação. Tenho usado na minha obra e o pedreiro elogiou bastante a qualidade."
              </p>
              <h4 className="font-bold text-brand-black uppercase">- Cliente</h4>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-orange relative transform md:-translate-y-4">
              <i className="bi bi-quote text-5xl text-brand-orange/20 absolute top-4 right-6"></i>
              <div className="flex text-brand-yellow mb-4">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p className="text-lg text-gray-700 italic font-medium mb-6">
                "Uso a linha AC-II em obras internas e externas, sempre com bom resultado. A consistência da massa é excelente."
              </p>
              <h4 className="font-bold text-brand-black uppercase">- Profissional Autônomo</h4>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-orange relative">
              <i className="bi bi-quote text-5xl text-brand-orange/20 absolute top-4 right-6"></i>
              <div className="flex text-brand-yellow mb-4">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p className="text-lg text-gray-700 italic font-medium mb-6">
                "A linha AC-III atende muito bem trabalhos com porcelanato e piso sobre piso. Secagem rápida e aderência perfeita."
              </p>
              <h4 className="font-bold text-brand-black uppercase">- Construtor</h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
