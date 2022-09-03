import React from "react";

const Category = ({ title }) => {
  return (
    <a className="text-lg text-white cursor-pointer scale-1 transition duration-500 ease-in-out hover:scale-75">
      {title}
    </a>
  );
};

export default Category;
