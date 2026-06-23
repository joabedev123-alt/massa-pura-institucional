import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t-8 border-brand-orange">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-black text-white tracking-tighter mb-4">
              MASSA PURA
            </div>
            <p className="text-gray-400 mb-6 font-medium">
              Argamassas de alto padrão para obras com mais qualidade, rendimento e praticidade.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/massapura" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-brand-orange transition-colors">
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a href="https://facebook.com/massapura" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-brand-orange transition-colors">
                <i className="bi bi-facebook text-xl"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-orange">Menu Rápido</h4>
            <ul className="space-y-3 font-medium text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre a Empresa</Link></li>
              <li><Link to="/aplicacoes" className="hover:text-white transition-colors">Portfólio</Link></li>
              <li><Link to="/como-usar" className="hover:text-white transition-colors">Como Usar</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Dúvidas Frequentes (FAQ)</Link></li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-orange">Nossos Produtos</h4>
            <ul className="space-y-3 font-medium text-gray-300">
              <li><Link to="/produtos/ac-i" className="hover:text-brand-green transition-colors">Argamassa AC-I (Interna)</Link></li>
              <li><Link to="/produtos/ac-ii" className="hover:text-brand-blue transition-colors">Argamassa AC-II (Cinza)</Link></li>
              <li><Link to="/produtos/ac-iii" className="hover:text-brand-red transition-colors">Argamassa AC-III (9 Funções)</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-brand-orange">Contato</h4>
            <ul className="space-y-4 font-medium text-gray-300">
              <li className="flex items-start gap-3">
                <i className="bi bi-whatsapp text-green-500 text-xl mt-1"></i>
                <div>
                  <div className="text-sm text-gray-400">WhatsApp</div>
                  <a href="https://wa.me/5521978958281" className="hover:text-white text-lg font-bold">(21) 97895-8281</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-telephone text-xl mt-1"></i>
                <div>
                  <div className="text-sm text-gray-400">Televendas</div>
                  <a href="tel:2140421444" className="hover:text-white text-lg font-bold">(21) 4042-1444</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-envelope text-xl mt-1"></i>
                <a href="mailto:massapuraesquincalha@outlook.com" className="hover:text-white break-all">
                  massapuraesquincalha@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="bi bi-geo-alt text-xl mt-1"></i>
                <div className="text-sm">
                  Rua Trinta e Sete, SN, Quadra 40, Lote 8 e 9<br />
                  Jardim Maracanã - Seropédica - RJ<br />
                  CEP: 23891-755
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left text-sm text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} MASSA PURA ESQUINCALHA COM. E IND. DE ARGAMASSA LTDA. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">CNPJ: 36.510.243/0001-17</p>
        </div>
      </div>
    </footer>
  );
}
