import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nome do Site */}
        <a href="#" className="text-white text-2xl font-bold">
          COVID-19 Monitor
        </a>

        {/* Menu para Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="states"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              Estados
            </Link>
          </li>
          <li>
            <Link
              to="date"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              Data Específica
            </Link>
          </li>
          <li>
            <Link
              to="countries"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              Países
            </Link>
          </li>
          <li>
            <Link
              to="form"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              Formulário
            </Link>
          </li>
        </ul>

        {/* Ícone do Menu Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 mt-4 space-y-2">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="block text-white p-2 hover:bg-blue-700 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="states"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="block text-white p-2 hover:bg-blue-700 cursor-pointer"
            >
              Estados
            </Link>
          </li>
          <li>
            <Link
              to="date"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="block text-white p-2 hover:bg-blue-700 cursor-pointer"
            >
              Data Específica
            </Link>
          </li>
          <li>
            <Link
              to="countries"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="block text-white p-2 hover:bg-blue-700 cursor-pointer"
            >
              Países
            </Link>
          </li>
          <li>
            <Link
              to="form"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="block text-white p-2 hover:bg-blue-700 cursor-pointer"
            >
              Formulário
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;