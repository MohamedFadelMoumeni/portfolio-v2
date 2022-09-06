import React from "react";
import Image from "next/image";

const Cardservice = ({ img, title, description }) => {
  return (
    <div className="max-h-fit drop-shadow-md p-4 flex flex-col md:flex-row  items-center justify-between col-span-4  md:col-span-2  rounded-lg bg-white">
      <div className="w-full h-48 md:h-auto md:w-2/5 relative self-stretch  flex items-center justify-center">
        <Image src={img} width={200} height={200} />
      </div>
      <div className="text-black w-full md:w-3/5 ">
        <h1 className="text-xl font-bold ">{title}</h1>
        <p className="mt-6 ">{description}</p>
      </div>
    </div>
  );
};

export default Cardservice;
