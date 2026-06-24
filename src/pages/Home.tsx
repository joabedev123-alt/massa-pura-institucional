import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 3);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 3) % 3);

  const produtosDestaque = [
    {
      id: 1,
      title: 'Massa Pura AC-I',
      tag: 'Áreas Internas',
      icon: 'bi-house-door',
      colorClass: 'text-brand-green',
      bgLightClass: 'bg-brand-green/10',
      borderClass: 'border-brand-green',
      hoverClass: 'hover:bg-brand-green',
      desc: 'Ideal para cerâmicas, azulejos, pastilhas e lajotas em ambientes internos. Melhor custo-benefício.',
      features: ['Fácil aplicação', 'Alto rendimento', 'Embalagem 20kg'],
      link: '/produtos/ac-i'
    },
    {
      id: 2,
      title: 'Massa Pura AC-II',
      tag: 'Interna e Externa',
      icon: 'bi-building',
      colorClass: 'text-brand-blue',
      bgLightClass: 'bg-brand-blue/10',
      borderClass: 'border-brand-blue',
      hoverClass: 'hover:bg-brand-blue',
      desc: 'Alta resistência para pisos, paredes, garagens e ambientes úmidos.',
      features: ['Maior aderência', 'Para ambientes úmidos', 'Embalagem 20kg'],
      link: '/produtos/ac-ii'
    },
    {
      id: 3,
      title: 'Massa Pura AC-III',
      tag: '9 Funções Premium',
      icon: 'bi-gem',
      colorClass: 'text-brand-red',
      bgLightClass: 'bg-brand-red/10',
      borderClass: 'border-brand-red',
      hoverClass: 'hover:bg-brand-red',
      desc: 'Máximo desempenho para porcelanatos, mármores, granitos e piso sobre piso.',
      features: ['Piso sobre piso', 'Porcelanatos premium', 'Embalagem 20kg'],
      link: '/produtos/ac-iii'
    }
  ];
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat bg-brand-black text-white overflow-hidden py-16 md:py-32 lg:py-40"
        style={{ backgroundImage: "url('/fundo_novo.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/90 via-black/70 md:via-black/50 to-black/30 md:to-transparent z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col justify-center min-h-[60vh]">
            <div className="w-full md:w-4/5 lg:w-1/2 md:ml-auto text-center md:text-right mt-16 md:mt-0">
              <motion.h1 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight drop-shadow-2xl text-white"
              >
                Argamassa de Alto Padrão para Obras com Mais <span className="text-brand-orange">Qualidade</span>, <span className="text-brand-yellow">Rendimento</span> e <span className="text-brand-green">Praticidade</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg md:text-2xl text-gray-100 mb-8 md:mb-10 font-medium leading-relaxed drop-shadow-md"
              >
                Linha completa de argamassas Massa Pura para áreas internas, externas, porcelanatos, cerâmicas, pisos e revestimentos profissionais.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end"
              >
                <a 
                  href="https://wa.me/5521978958281" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(40,167,69,0.4)] text-center"
                >
                  <i className="bi bi-whatsapp text-xl md:text-2xl"></i> Falar no WhatsApp
                </a>
                <Link 
                  to="/produtos"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-black text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1 hover:shadow-xl text-center"
                >
                  Ver Produtos
                </Link>
              </motion.div>
            </div>
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

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-10">
            {produtosDestaque.map((produto, index) => (
              <div key={produto.id} className={`bg-white rounded-xl overflow-hidden shadow-xl border-t-8 ${produto.borderClass} flex flex-col group relative ${index === 1 ? 'transform md:-translate-y-4' : ''}`}>
                 <div className="p-8 flex-grow">
                   <div className="flex justify-between items-start mb-6">
                     <div>
                       <h3 className="text-2xl font-black text-brand-black mb-1">{produto.title}</h3>
                       <span className={`${produto.bgLightClass} ${produto.colorClass} px-3 py-1 rounded font-bold text-sm`}>{produto.tag}</span>
                     </div>
                     <i className={`bi ${produto.icon} text-3xl ${produto.colorClass} opacity-50`}></i>
                   </div>
                   <p className="text-gray-600 font-medium mb-6">
                     {produto.desc}
                   </p>
                   <ul className="space-y-2 font-semibold text-gray-700 mb-8">
                     {produto.features.map((feature, i) => (
                       <li key={i} className="flex items-center gap-2"><i className={`bi bi-check-circle-fill ${produto.colorClass}`}></i> {feature}</li>
                     ))}
                   </ul>
                 </div>
                 <div className="p-6 bg-gray-50 border-t border-gray-100">
                   <Link to={produto.link} className={`block w-full py-3 text-center bg-brand-black text-white font-bold rounded ${produto.hoverClass} transition-colors`}>
                     Ver Detalhes do Produto
                   </Link>
                 </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {produtosDestaque.map((produto) => (
                  <div key={produto.id} className="min-w-full px-2">
                    <div className={`bg-white rounded-xl overflow-hidden shadow-xl border-t-8 ${produto.borderClass} flex flex-col group relative h-full`}>
                       <div className="p-6 flex-grow">
                         <div className="flex justify-between items-start mb-4">
                           <div>
                             <h3 className="text-xl font-black text-brand-black mb-1">{produto.title}</h3>
                             <span className={`${produto.bgLightClass} ${produto.colorClass} px-3 py-1 rounded font-bold text-sm inline-block`}>{produto.tag}</span>
                           </div>
                           <i className={`bi ${produto.icon} text-2xl ${produto.colorClass} opacity-50`}></i>
                         </div>
                         <p className="text-gray-600 font-medium mb-6 text-sm">
                           {produto.desc}
                         </p>
                         <ul className="space-y-2 font-semibold text-gray-700 mb-6 text-sm">
                           {produto.features.map((feature, i) => (
                             <li key={i} className="flex items-center gap-2"><i className={`bi bi-check-circle-fill ${produto.colorClass}`}></i> {feature}</li>
                           ))}
                         </ul>
                       </div>
                       <div className="p-4 bg-gray-50 border-t border-gray-100 mt-auto">
                         <Link to={produto.link} className={`block w-full py-3 text-center bg-brand-black text-white font-bold rounded ${produto.hoverClass} transition-colors`}>
                           Ver Detalhes do Produto
                         </Link>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 bg-white/90 shadow-md text-brand-black w-10 h-10 rounded-full flex items-center justify-center z-10"
              aria-label="Anterior"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 bg-white/90 shadow-md text-brand-black w-10 h-10 rounded-full flex items-center justify-center z-10"
              aria-label="Próximo"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {produtosDestaque.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-brand-orange' : 'bg-gray-300'}`}
                  aria-label={`Ir para o slide ${index + 1}`}
                />
              ))}
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
          <div className="flex flex-wrap justify-center items-end gap-6 md:gap-10 transition-all duration-500">
             <img src="/argamassas/argamassa ac1.png" alt="Argamassa AC-I" className="w-32 sm:w-48 md:w-64 h-auto object-cover bg-white rounded-xl shadow-xl border-b-4 border-brand-green hover:scale-105 transition-transform" />
             <img src="/argamassas/argamassa ac2.png" alt="Argamassa AC-II" className="w-40 sm:w-56 md:w-80 h-auto object-cover bg-white rounded-xl shadow-2xl scale-110 relative z-10 border-b-4 border-brand-blue hover:scale-105 transition-transform" />
             <img src="/argamassas/argamassaac3.png" alt="Argamassa AC-III" className="w-32 sm:w-48 md:w-64 h-auto object-cover bg-white rounded-xl shadow-xl border-b-4 border-brand-red hover:scale-105 transition-transform" />
          </div>
        </div>
      </section>
      
      {/* Massa Pronta e Rejunte */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-4 uppercase">Massa Pronta e Rejunte</h2>
            <div className="w-16 md:w-24 h-2 bg-brand-orange mx-auto mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Soluções complementares para garantir o acabamento perfeito e a agilidade que a sua obra precisa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {/* Massa Pronta */}
            <div className="bg-brand-light rounded-xl overflow-hidden shadow-lg border-t-8 border-brand-orange flex flex-col group hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-2">
              <div className="h-48 md:h-56 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                 <i className="bi bi-bricks text-6xl text-gray-400 group-hover:scale-110 transition-transform duration-500"></i>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-6 text-2xl font-black text-white">Massa Pronta</h3>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <p className="text-gray-700 font-medium mb-6 text-lg">
                  Mistura homogênea e de alta qualidade, pronta para uso. Ideal para assentamento de tijolos, blocos e pequenos reparos estruturais.
                </p>
                <ul className="space-y-3 font-semibold text-gray-700 mb-8 mt-auto">
                  <li className="flex items-center gap-3"><i className="bi bi-check-circle-fill text-brand-orange text-xl"></i> Ganho de tempo na obra</li>
                  <li className="flex items-center gap-3"><i className="bi bi-check-circle-fill text-brand-orange text-xl"></i> Redução de desperdício</li>
                  <li className="flex items-center gap-3"><i className="bi bi-check-circle-fill text-brand-orange text-xl"></i> Alta resistência e aderência</li>
                </ul>
                <a href="https://wa.me/5521978958281" target="_blank" rel="noreferrer" className="block w-full py-3 text-center bg-brand-black text-white font-bold rounded hover:bg-brand-orange transition-colors">
                  Solicitar Orçamento
                </a>
              </div>
            </div>

            {/* Rejunte */}
            <div className="bg-brand-light rounded-xl overflow-hidden shadow-lg border-t-8 border-brand-yellow flex flex-col group hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-2">
              <div className="h-40 md:h-48 bg-white relative overflow-hidden flex items-center justify-center">
                 <img src="/argamassas/rejunte.png" alt="Rejuntes Especiais" className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-6 text-2xl font-black text-white">Rejuntes Especiais</h3>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <p className="text-gray-700 font-medium mb-6 text-lg">
                  Acabamento impecável para pisos e revestimentos. Disponível em diversos núcleos, com fórmula premium para proteção máxima.
                </p>
                <ul className="space-y-3 font-semibold text-gray-700 mb-8 mt-auto">
                  <li className="flex items-center gap-3"><i className="bi bi-check-circle-fill text-brand-yellow text-xl"></i> Ação antimofo e fungicida</li>
                  <li className="flex items-center gap-3"><i className="bi bi-check-circle-fill text-brand-yellow text-xl"></i> Cores fortes que não desbotam</li>
                  <li className="flex items-center gap-3"><i className="bi bi-check-circle-fill text-brand-yellow text-xl"></i> Proteção extra contra umidade</li>
                </ul>
                <a href="https://wa.me/5521978958281" target="_blank" rel="noreferrer" className="block w-full py-3 text-center bg-brand-black text-white font-bold rounded hover:bg-brand-yellow hover:text-black transition-colors">
                  Solicitar Orçamento
                </a>
              </div>
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

      {/* Dúvidas Recentes */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-4 uppercase">Dúvidas Recentes</h2>
            <div className="w-16 md:w-24 h-2 bg-brand-orange mx-auto mb-4 md:mb-6"></div>
          </div>
          
          <div className="space-y-4">
            <details className="group bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center text-brand-black list-none">
                Qual a diferença entre AC-I, AC-II e AC-III?
                <span className="transition group-open:rotate-180">
                  <i className="bi bi-chevron-down text-brand-orange"></i>
                </span>
              </summary>
              <p className="text-gray-700 mt-4 font-medium leading-relaxed">
                A <strong>AC-I</strong> é ideal para projetos internos. A <strong>AC-II</strong> tem maior aderência e suporta variações de umidade, sendo ideal para áreas externas. A <strong>AC-III</strong> é a mais premium, projetada para porcelanatos e aplicações de piso sobre piso.
              </p>
            </details>

            <details className="group bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center text-brand-black list-none">
                Qual o rendimento médio de uma embalagem de 20kg?
                <span className="transition group-open:rotate-180">
                  <i className="bi bi-chevron-down text-brand-orange"></i>
                </span>
              </summary>
              <p className="text-gray-700 mt-4 font-medium leading-relaxed">
                O rendimento varia dependendo das dimensões do revestimento e da superfície, mas em média, uma embalagem rende aproximadamente 4 metros quadrados.
              </p>
            </details>

            <details className="group bg-brand-light p-6 rounded-lg border-l-4 border-brand-orange cursor-pointer">
              <summary className="font-bold text-lg flex justify-between items-center text-brand-black list-none">
                Como faço para entrar em contato ou ser um revendedor?
                <span className="transition group-open:rotate-180">
                  <i className="bi bi-chevron-down text-brand-orange"></i>
                </span>
              </summary>
              <p className="text-gray-700 mt-4 font-medium leading-relaxed">
                Basta clicar no botão do WhatsApp disponível em nosso site e falar diretamente com um de nossos especialistas. Estamos prontos para oferecer um atendimento personalizado!
              </p>
            </details>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/faq" className="inline-flex items-center gap-2 font-bold text-brand-orange hover:text-brand-black transition-colors text-lg">
              Ver todas as dúvidas <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
