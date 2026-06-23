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
      </div>
    </Router>
  );
}

export default App;
