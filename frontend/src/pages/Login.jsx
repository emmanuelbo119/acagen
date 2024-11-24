import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* Contenedor Principal */}
      <div className="flex w-[900px] h-[500px] shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Sección Izquierda - Formulario */}
        <div className="flex flex-col justify-center items-center w-1/2 bg-white p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Iniciar sesión en AcaGen
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Use su email institucional para iniciar sesión
          </p>
          <div className="space-y-4 w-full max-w-sm">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 rounded-lg border border-gray-300 px-4 text-base text-gray-800 focus:ring focus:ring-[#82A8D1]"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full h-12 rounded-lg border border-gray-300 px-4 pr-12 text-base text-gray-800 focus:ring focus:ring-[#82A8D1]"
              />
              <Link
                to="/forgot-password"
                className="absolute right-4 top-3 text-sm text-gray-500 hover:text-[#82A8D1]"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </div>
          <Button
            className="w-full h-12 mt-4"
            type="primary"
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>
          <p className="text-center text-sm text-gray-500 mt-4">o</p>
          <Button className="w-full h-12" type="secondary">
            Sign in with Google
          </Button>
        </div>

        {/* Sección Derecha - Bienvenida */}
        <div className="flex flex-col justify-center items-center w-1/2 bg-[#82A8D1] text-white p-8">
          <h1 className="text-3xl font-bold mb-4">Bienvenido a AcaGen</h1>
          <p className="text-sm text-white/90 mb-6">¿No tienes una cuenta?</p>
          <Link
            to="/register"
            className="bg-white text-[#82A8D1] font-semibold rounded-full px-6 py-2 shadow-lg hover:bg-gray-100"
          >
            Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
