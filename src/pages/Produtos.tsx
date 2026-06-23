import { Link } from 'react-router-dom';

export default function Produtos() {
  return (
    <div className="py-16 md:py-24 bg-brand-light min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4 md:mb-6 uppercase">Nossos <span className="text-brand-orange">Produtos</span></h1>
          <div className="w-16 md:w-24 h-2 bg-brand-orange mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            A linha completa da Massa Pura para garantir a melhor aderência e durabilidade para a sua obra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-brand-green">
            <h3 className="text-3xl font-black text-brand-black mb-2">Massa Pura AC-I</h3>
            <p className="text-brand-green font-bold mb-6 bg-brand-green/10 inline-block px-3 py-1 rounded">Áreas Internas</p>
            <p className="text-gray-600 font-medium mb-8">
              Ideal para cerâmicas, azulejos, pastilhas e lajotas em ambientes internos.
            </p>
            <Link to="/produtos/ac-i" className="block text-center bg-brand-black text-white py-3 rounded font-bold hover:bg-brand-green transition-colors">
              Detalhes do Produto
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-brand-blue">
            <h3 className="text-3xl font-black text-brand-black mb-2">Massa Pura AC-II</h3>
            <p className="text-brand-blue font-bold mb-6 bg-brand-blue/10 inline-block px-3 py-1 rounded">Interna e Externa</p>
            <p className="text-gray-600 font-medium mb-8">
              Alta resistência para pisos, paredes, garagens e ambientes úmidos.
            </p>
            <Link to="/produtos/ac-ii" className="block text-center bg-brand-black text-white py-3 rounded font-bold hover:bg-brand-blue transition-colors">
              Detalhes do Produto
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-brand-red">
            <h3 className="text-3xl font-black text-brand-black mb-2">Massa Pura AC-III</h3>
            <p className="text-brand-red font-bold mb-6 bg-brand-red/10 inline-block px-3 py-1 rounded">9 Funções</p>
            <p className="text-gray-600 font-medium mb-8">
              Máximo desempenho para porcelanatos, mármores, granitos e piso sobre piso.
            </p>
            <Link to="/produtos/ac-iii" className="block text-center bg-brand-black text-white py-3 rounded font-bold hover:bg-brand-red transition-colors">
              Detalhes do Produto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
