import React from "react";

const RoadCard = ({ bg, title }) => {
  return (
    <div
      className={`w-full p-4 cursor-pointer  text-white ${bg} rounded-lg duration-700 hover:scale-90`}
    >
      <h1 className="text-xl mb-2 font-bold">{title}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde
        alias blanditiis quia doloremque, quibusdam quaerat? Ratione possimus
        omnis unde.
      </p>
    </div>
  );
};

export default RoadCard;
