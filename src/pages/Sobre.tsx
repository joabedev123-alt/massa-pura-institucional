export default function Sobre() {
  return (
    <div className="py-16 md:py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-8 uppercase">Massa Pura <span className="text-brand-orange">Esquincalha</span></h1>
        <div className="w-24 h-2 bg-brand-orange mb-10"></div>
        <div className="bg-gray-50 border-l-4 border-brand-orange p-6 md:p-8 rounded-r-lg shadow-sm mb-12">
          <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed italic">
            "Nós somos a Massa Pura Esquincalha, indústria e comércio de Argamassa, rejuntes flexíveis, massa pronta, e artefatos de concreto. Comércio atacadista e varejista de materiais de construção em geral. A Massa Pura Esquincalha é uma indústria de argamassa que preza pela qualidade em excelência, sem perder o atendimento personalizado e individual para todos amigos clientes e os parceiros vendedores. Nossa firma tem nome e sobrenome, A Massa Pura é uma indústria já consolidada no mercado de construção e vem com o sobrenome Esquincalha que já é reconhecido a mais de 50 anos em várias áreas empresárias sempre de muito sucesso, respeito e responsabilidade."
          </p>
        </div>

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
