import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#EDF0F2] text-black py-1">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">
        {/* Redes Sociales */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54v-2.2c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.872h2.773l-.443 2.89h-2.33V21.878C18.344 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20c7.547 0 11.675-6.252 11.675-11.675 0-.18 0-.356-.012-.532A8.349 8.349 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.116 4.116 0 001.804-2.27 8.253 8.253 0 01-2.605.994A4.108 4.108 0 0016.616 4a4.108 4.108 0 00-4.104 4.104c0 .322.036.637.107.94C8.111 8.87 5.421 7.335 3.77 4.93a4.104 4.104 0 001.27 5.477A4.073 4.073 0 013.6 9.7v.052a4.106 4.106 0 003.29 4.027 4.1 4.1 0 01-1.852.07 4.108 4.108 0 003.833 2.85A8.233 8.233 0 012 18.58a11.615 11.615 0 006.29 1.84" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zm-7 19h-3v-7h3v7zm-1.5-8.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm8.5 8.268h-3v-4.035c0-.66-.487-1.232-1.132-1.328A1.264 1.264 0 0014.5 16v3h-3v-7h3v.915c.512-.712 1.371-1.155 2.25-1.155 1.931 0 3.5 1.569 3.5 3.5V19z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm8.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm0 2c-1.653 0-3 1.347-3 3s1.347 3 3 3 3-1.347 3-3-1.347-3-3-3z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-black py-6">
          © {new Date().getFullYear()} AcaGen. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
