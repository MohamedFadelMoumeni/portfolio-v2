import React from "react";

const WorkCard = ({ children, title, date, description }) => {
  return (
    <div className="w-full text-white  flex items-start p-4">
      <div className="w-auto mr-5">{children}</div>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl font-semibold">{title}.</h1>
          <p>{date}</p>
        </div>
        <p className="w-full mt-4">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
