export default function Contato() {
  return (
    <div className="py-16 md:py-24 bg-brand-light min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4 md:mb-6 uppercase text-center">Fale <span className="text-brand-orange">Conosco</span></h1>
        <div className="w-16 md:w-24 h-2 bg-brand-orange mx-auto mb-10 md:mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-brand-orange">
            <h3 className="text-2xl font-black mb-6">Informações de Contato</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-500">WhatsApp</h4>
                  <a href="https://wa.me/5521978958281" className="text-xl font-black text-brand-black hover:text-brand-orange transition-colors">(021) 97895-8281</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-500">Televendas</h4>
                  <a href="tel:02140421444" className="text-xl font-black text-brand-black hover:text-brand-orange transition-colors">(021) 4042-1444</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  <i className="bi bi-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-500">E-mail</h4>
                  <a href="mailto:massapuraesquincalha@outlook.com" className="text-lg font-bold text-brand-black hover:text-brand-orange transition-colors break-all">massapuraesquincalha@outlook.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-500">Endereço</h4>
                  <p className="font-bold text-brand-black">Rua Trinta e Sete, SN, Quadra 40, Lote 8 e 9<br/>Jardim Maracanã - Seropédica - RJ<br/>CEP: 23891-755</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-8 border-brand-black">
            <h3 className="text-2xl font-black mb-6">Envie uma mensagem</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-orange" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">E-mail</label>
                <input type="email" className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-brand-orange" placeholder="Seu e-mail" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Mensagem</label>
                <textarea className="w-full border border-gray-300 rounded p-3 h-32 focus:outline-none focus:border-brand-orange" placeholder="Como podemos ajudar?"></textarea>
              </div>
              <button type="button" className="w-full bg-brand-orange hover:bg-orange-600 text-white font-black py-4 rounded text-lg transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
