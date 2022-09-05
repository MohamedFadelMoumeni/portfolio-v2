import React from "react";

const Carouselcard = ({ data }) => {
  return (
    <div className="w-full h-full p-4 text-black">
      <h1 className="text-center text-xl">{data.content}</h1>
      <p className="mt-6 text-italic text-center italic font-bold ">
        {data.author}.
      </p>
    </div>
  );
};

export default Carouselcard;
