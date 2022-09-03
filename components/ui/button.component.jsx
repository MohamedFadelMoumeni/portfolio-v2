import React from "react";

const Button = ({ title, children, style, href }) => {
  return (
    <a
      href={href}
      className={`px-6 py-3  rounded-lg text-white flex items-center space-x-2 cursor-pointer ${style}`}
    >
      {children}

      <p className="font-semibold">{title}</p>
    </a>
  );
};

export default Button;
