import React from "react";

const WorkCard = ({ children }) => {
  return (
    <div className="w-full text-white  flex items-start p-4">
      <div className="w-auto mr-5">{children}</div>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl font-semibold">This is the title</h1>
          <p>2022/01/01</p>
        </div>
        <p className="w-full mt-4">
          Aali is a leading web design agency with an award-winning design
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
