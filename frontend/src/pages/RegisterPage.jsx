import React, { useState } from "react";

const RegisterPage = () => {
  const [avatar, setAvatar] = useState(null); // Estado para manejar el avatar

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file)); // Actualiza el avatar con la URL local del archivo
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log("Formulario enviado");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Formulario de Registro */}
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Registro en AcaGen
        </h1>
        <form
          className="w-full max-w-md bg-white space-y-4"
          onSubmit={handleSubmit}
        >
          {/* Campos de entrada */}
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="Institución"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="Rol"
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />
          <input
            type="password"
            placeholder="Contraseña..."
            className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
          />

          {/* Subir Avatar */}
          <div className="flex flex-col items-center space-y-2">
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar seleccionado"
                className="w-24 h-24 rounded-full border border-gray-300 object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center text-gray-400">
                Avatar
              </div>
            )}
            <label
              htmlFor="avatarInput"
              className="text-blue-500 cursor-pointer text-sm"
            >
              Elige tu foto de avatar
              <span className="block text-gray-500 text-xs">
                Puede ser un archivo .jpg o .png
              </span>
            </label>
            <input
              id="avatarInput"
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>

          {/* Botón de Registro */}
          <button
            type="submit"
            className="w-full h-12 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            Registrar
          </button>
        </form>
      </main>
    </div>
  );
};

export default RegisterPage;
