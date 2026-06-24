import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t-8 border-brand-orange">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img src="/fotos videos/logo-Photoroom.png" alt="Massa Pura Esquincalha" className="h-24 md:h-28 object-contain" />
            </div>
            <p className="text-gray-400 mb-6 font-medium">
              Argamassas de alto padrão para obras com mais qualidade, rendimento e praticidade.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/massapuraesquincalha?utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-brand-orange transition-colors">
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552290323466&mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-brand-orange transition-colors">
                <i className="bi bi-facebook text-xl"></i>
              </a>
              <a href="https://m.youtube.com/@MassaPuraEsquincalhaArgamassa?ra=m&fbclid=PAZnRzaASpIvVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeezeaKrk1FzewHsImr16QPoJ346sCgZ6vTjRFLqro0HLLR7HITcWfX8CUEFw_aem_WC_lqH_SUKa4wsgl2pQR6g" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-brand-orange transition-colors">
                <i className="bi bi-youtube text-xl"></i>
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

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-start gap-6 md:gap-12 text-center md:text-left text-sm text-gray-500 font-medium">
          <div>
            <p className="mb-1">&copy; {new Date().getFullYear()} MASSA PURA ESQUINCALHA COM. E IND. DE ARGAMASSA LTDA.</p>
            <p>Todos os direitos reservados. | CNPJ: 36.510.243/0001-17</p>
          </div>
          <p className="mt-2 md:mt-0 text-base md:mr-auto">
            Produzido com <span className="text-red-500">❤️</span> por <a href="https://camaly.com.br/" target="_blank" rel="noreferrer" className="text-brand-orange hover:text-white font-bold transition-colors">CAMALY</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
