import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Para rolagem suave

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
    setIsMenuOpen(false); // Fecha o menu mobile ao clicar no logo
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nome do Site */}
        <button
          onClick={handleScrollToTop}
          className="text-white text-2xl font-bold hover:text-blue-400 transition-colors"
        >
          Covid Monitor
        </button>

        {/* Links de Navegação (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="states"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            Estados
          </Link>
          <Link
            to="date"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            Por Data
          </Link>
          <Link
            to="countries"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            Países
          </Link>
          <Link
            to="form"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            Formulário
          </Link>
          <a
            href="https://covid19-brazil-api-docs.vercel.app/#req_0962a88e26be4feba9e0c6c4490105c6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            API Docs
          </a>
        </div>

        {/* Menu Mobile (Ícone de Hambúrguer) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/s"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile (Links) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 mt-4 py-2">
          <Link
            to="states"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="block text-white px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            Estados
          </Link>
          <Link
            to="date"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="block text-white px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            Por Data
          </Link>
          <Link
            to="countries"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="block text-white px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            Países
          </Link>
          <Link
            to="form"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
            className="block text-white px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            Formulário
          </Link>
          <a
            href="https://covid19-brazil-api-docs.vercel.app/#req_0962a88e26be4feba9e0c6c4490105c6"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            API Docs
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;