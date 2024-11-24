import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white font-['Plus_Jakarta_Sans']">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 px-10 py-3">
        <div className="flex items-center gap-4 text-gray-900">
          <div className="w-6 h-6">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold">AcaGen</h2>
        </div>
      </header>

      {/* Login Content */}
      <div className="flex flex-1 justify-center px-10 py-5">
        <div className="w-full max-w-md space-y-5">
          <h1 className="text-center text-2xl font-bold">Iniciar sesión en AcaGen</h1>
          <p className="text-center text-gray-600">Use su email institucional para iniciar sesión</p>

          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 rounded-lg border border-gray-300 px-4 text-base text-gray-800 focus:ring focus:ring-blue-200"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full h-12 rounded-lg border border-gray-300 px-4 pr-12 text-base text-gray-800 focus:ring focus:ring-blue-200"
              />
              <button className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128 80a48 48 0 1 0 48 48 48.05 48.05 0 0 0-48-48Z"></path>
                </svg>
              </button>
            </div>
          </div>

          <button className="w-full h-12 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600">
            Iniciar Sesión
          </button>

          <p className="text-center text-sm text-gray-500">o</p>

          <button className="w-full h-12 rounded-lg bg-gray-200 text-gray-900 font-bold hover:bg-gray-300">
            Sign in with Google
          </button>

          <div className="flex justify-between text-sm text-gray-500">
            <a href="#" className="underline">¿Olvidaste tu contraseña?</a>
            <a href="#" className="underline">¿No tienes una cuenta? Regístrate aquí</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
