import React from "react";

const Button = ({ type = "primary", onClick, disabled, className, children }) => {
  const baseStyle =
    "font-bold py-2 px-4 rounded-lg transition duration-300 focus:outline-none";
  const styles = {
    primary: `${baseStyle} bg-[#82A9D0] text-white hover:bg-[#729BBE]`,
    secondary: `${baseStyle} bg-[#EDF0F2] text-gray-800 hover:bg-[#DDE1E4]`,
    disabled: `${baseStyle} bg-[#617AFA] text-white cursor-not-allowed`,
  };

  return (
    <button
      className={`${styles[disabled ? "disabled" : type]} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
