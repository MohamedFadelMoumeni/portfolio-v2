import React from "react";
import Link from "next/link";
import { GrFormClose } from "react-icons/gr";

const Roadmap = () => {
  const [close, setClose] = React.useState(false);
  return (
    <div
      className={`${
        close && "hidden"
      } duration-1000 ads p-2 fixed bottom-10 drop-shadow-lg w-60 rounded-lg left-2 bg-white z-40`}
    >
      <div className="w-full flex items-center justify-end mb-2">
        <GrFormClose
          cursor="pointer"
          onClick={() => setClose(true)}
          color="black"
          size={23}
        />
      </div>
      <h1 className={`font-bold text-sm  mb-4 text-center `}>
        Not sure where to start? I{"'"}ll help you find the right path
        <Link className={`${close && "hidden"}`} href={"/comming-soon"}>
          <a className="text-red-500 block mt-2 underline">Click here</a>
        </Link>
      </h1>
    </div>
  );
};

export default Roadmap;
