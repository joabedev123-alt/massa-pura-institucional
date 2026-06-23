import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Se rolou para baixo e passou de 150px, esconde. Se rolou para cima, mostra.
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-white border-b-4 border-brand-orange shadow-lg"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-1">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-Photoroom.png" alt="Massa Pura" className="h-28 md:h-32 object-contain -my-4" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-brand-black">
            <Link to="/" className="hover:text-brand-orange transition-colors">Início</Link>
            <Link to="/sobre" className="hover:text-brand-orange transition-colors">Sobre</Link>
            <div className="group relative py-4">
              <Link to="/produtos" className="hover:text-brand-orange transition-colors flex items-center gap-1">
                Produtos <i className="bi bi-chevron-down text-xs"></i>
              </Link>
              <div className="absolute top-full mt-0 left-0 w-48 bg-white border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col">
                <Link to="/produtos/ac-i" className="px-4 py-3 hover:bg-brand-light border-b text-brand-green font-bold">AC-I (Interna)</Link>
                <Link to="/produtos/ac-ii" className="px-4 py-3 hover:bg-brand-light border-b text-brand-blue font-bold">AC-II (Cinza)</Link>
                <Link to="/produtos/ac-iii" className="px-4 py-3 hover:bg-brand-light text-brand-red font-bold">AC-III (9 Funções)</Link>
              </div>
            </div>
            <Link to="/aplicacoes" className="hover:text-brand-orange transition-colors">Portfólio</Link>
            <Link to="/contato" className="hover:text-brand-orange transition-colors">Contato</Link>
          </nav>

          <div className="hidden md:flex">
            <a 
              href="https://wa.me/5521978958281" 
              target="_blank" 
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-md font-bold flex items-center gap-2 transition-colors shadow-md"
            >
              <i className="bi bi-whatsapp"></i> Falar com Especialista
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-4xl text-brand-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t p-4 absolute w-full shadow-lg"
        >
          <div className="flex flex-col gap-4 font-semibold text-lg">
            <Link to="/" onClick={() => setIsOpen(false)}>Início</Link>
            <Link to="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link>
            <Link to="/produtos/ac-i" onClick={() => setIsOpen(false)} className="text-brand-green">AC-I (Interna)</Link>
            <Link to="/produtos/ac-ii" onClick={() => setIsOpen(false)} className="text-brand-blue">AC-II (Cinza)</Link>
            <Link to="/produtos/ac-iii" onClick={() => setIsOpen(false)} className="text-brand-red">AC-III (9 Funções)</Link>
            <Link to="/aplicacoes" onClick={() => setIsOpen(false)}>Portfólio</Link>
            <Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link>
            <a 
              href="https://wa.me/5521978958281" 
              target="_blank" 
              rel="noreferrer"
              className="bg-green-500 text-white px-4 py-3 rounded-md font-bold flex items-center justify-center gap-2 mt-2"
            >
              <i className="bi bi-whatsapp"></i> Falar com Especialista
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
