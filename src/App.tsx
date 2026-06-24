import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import ProdutoACI from './pages/ProdutoACI';
import ProdutoACII from './pages/ProdutoACII';
import ProdutoACIII from './pages/ProdutoACIII';
import Aplicacoes from './pages/Aplicacoes';
import ComoUsar from './pages/ComoUsar';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/ac-i" element={<ProdutoACI />} />
            <Route path="/produtos/ac-ii" element={<ProdutoACII />} />
            <Route path="/produtos/ac-iii" element={<ProdutoACIII />} />
            <Route path="/aplicacoes" element={<Aplicacoes />} />
            <Route path="/como-usar" element={<ComoUsar />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Botão Flutuante do WhatsApp */}
        <a 
          href="https://wa.me/5521978958281" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </Router>
  );
}

export default App;
