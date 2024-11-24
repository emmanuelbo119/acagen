import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="AcaGen Logo" className="h-8 w-8" />
          <span className="text-lg font-bold text-gray-900">AcaGen</span>
        </div>

        {/* Botón de menú hamburguesa */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // Ícono de cerrar (X)
                    : "M4 6h16M4 12h16M4 18h16" // Ícono de hamburguesa
                }
              />
            </svg>
          </button>
        </div>

        {/* Links - Visibles en pantallas grandes */}
        <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-700 ml-auto">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/examples" className="hover:text-blue-500">
              Ejemplos
            </a>
          </li>
          <li>
            <a href="/docs" className="hover:text-blue-500">
              Docs
            </a>
          </li>
          <li>
            <a href="/api" className="hover:text-blue-500">
              API Documentación
            </a>
          </li>
          <li>
            <a href="/feedback" className="hover:text-blue-500">
              Feedback
            </a>
          </li>
        </ul>

        {/* Avatar */}
        <div className="hidden lg:flex items-center ml-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="h-10 w-10 rounded-full border border-gray-300"
          />
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="space-y-3 text-sm font-medium text-gray-700">
            <li>
              <a href="/" className="block hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/examples" className="block hover:text-blue-500">
                Ejemplos
              </a>
            </li>
            <li>
              <a href="/docs" className="block hover:text-blue-500">
                Docs
              </a>
            </li>
            <li>
              <a href="/api" className="block hover:text-blue-500">
                API Documentación
              </a>
            </li>
            <li>
              <a href="/feedback" className="block hover:text-blue-500">
                Feedback
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
