import React from "react";

const Input = ({ type, placeholder, ...otherProps }) => {
  return (
    <input
      className="w-full py-2 bg-slate-100 border-2 border-slate-200 rounded-lg px-4 text-lg placeholder:text-slate-500 "
      type={type}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};
export default Input;
