import React from "react";

const Container = ({ children, style }) => {
  return (
    <div className={`container mx-auto  ${style} px-2 md:px-0`}>{children}</div>
  );
};

export default Container;
