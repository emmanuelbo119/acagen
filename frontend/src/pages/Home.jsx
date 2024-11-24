import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Estado para manejar el colapso

  const handleFileUpload = (event) => {
    const files = event.target.files;
    console.log("Archivos seleccionados:", files);
  };

  const handleFolderUpload = (event) => {
    const files = event.target.files;
    console.log("Carpeta seleccionada:", files);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Contenido Principal */}
      <div className="flex flex-grow">
        {/* Sección Izquierda */}
        <aside
          className={`transition-all duration-300 ${
            isCollapsed ? "w-16" : "w-64"
          } bg-gray-100 border-r border-gray-200 relative`}
        >
          {/* Botón para Colapsar/Expandir */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)} // Alternar entre colapsar y expandir
            className="absolute top-4 right-[-12px] bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-600 transition"
          >
            {isCollapsed ? "▶️" : "◀️"}
          </button>

          {/* Contenido de la Barra Lateral */}
          <div className="p-4 space-y-4">
            <h2
              className={`text-lg font-semibold mb-4 ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              Bases de datos
            </h2>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-center lg:justify-start bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                <span className="flex justify-center items-center w-6 h-6">✨</span>
                {!isCollapsed && <span className="ml-2">Generar</span>}
              </button>
              <button className="w-full flex items-center justify-center lg:justify-start bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                <span className="flex justify-center items-center w-6 h-6">♻️</span>
                {!isCollapsed && <span className="ml-2">Regenerar</span>}
              </button>
              <button className="w-full flex items-center justify-center lg:justify-start bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300">
                <span className="flex justify-center items-center w-6 h-6">✏️</span>
                {!isCollapsed && <span className="ml-2">Editar</span>}
              </button>
              <button className="w-full flex items-center justify-center lg:justify-start bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300">
                <span className="flex justify-center items-center w-6 h-6">💾</span>
                {!isCollapsed && <span className="ml-2">Guardar</span>}
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {/* Botón para Subir Archivo */}
              <label
                className="w-full flex items-center justify-center lg:justify-start bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 cursor-pointer"
                htmlFor="fileInput"
              >
                <span className="flex justify-center items-center w-6 h-6">📁</span>
                {!isCollapsed && <span className="ml-2">Subir archivo</span>}
              </label>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />

              {/* Botón para Subir Carpeta */}
              <label
                className="w-full flex items-center justify-center lg:justify-start bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 cursor-pointer"
                htmlFor="folderInput"
              >
                <span className="flex justify-center items-center w-6 h-6">📂</span>
                {!isCollapsed && <span className="ml-2">Subir carpeta</span>}
              </label>
              <input
                id="folderInput"
                type="file"
                webkitdirectory="true"
                className="hidden"
                onChange={handleFolderUpload}
              />
            </div>
          </div>
        </aside>

        {/* Sección Principal */}
        <main className="flex-1 p-6">
          {/* Input del Prompt */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Describe el contenido</h2>
            <textarea
              className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:ring focus:ring-blue-200"
              placeholder="Ejemplo: Escribe un párrafo de 500 palabras que explique el funcionamiento de una base de datos con ejemplos."
            />
          </div>

          {/* Secciones Dinámicas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-bold text-gray-800 mb-2">
                Introducción a las Bases de Datos
              </h3>
              <p className="text-sm text-gray-600">
                Primeros pasos, Instalación, Tipos de Motores...
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-bold text-gray-800 mb-2">SQL</h3>
              <p className="text-sm text-gray-600">
                Primeros Pasos, Ejemplos, Ejercicios...
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-bold text-gray-800 mb-2">Relaciones</h3>
              <p className="text-sm text-gray-600">
                Tipos de Relaciones, Claves Primarias, Claves Foráneas...
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-bold text-gray-800 mb-2">Consultas Avanzadas</h3>
              <p className="text-sm text-gray-600">
                Group By, Subconsultas...
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
