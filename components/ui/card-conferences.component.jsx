import React from "react";
import Image from "next/image";
import Zoom from "react-reveal/Zoom";

const CardConf = () => {
  return (
    <>
      <Zoom>
        <div
          data-to={22}
          className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 "
        >
          <Image src={"/1652193936765.jfif"} width={500} height={500} />
          <div className="grow self-stretch pl-0  md:pl-6 ">
            <h1 className="text-3xl font-bold mb-6">
              Training in future technologies (GIZ).
            </h1>
            <p className="mb-6">
              Collaboration with giz Morocco team, to increase the employability
              of young people via digital bootcamps in order to collectively
              tackle the high unemployment rate.
            </p>
            <p className="mb-6">
              Taking absolute beginners from zero to getting hired, to advanced
              courses that experienced professionals use to upskill and advance
              their career.
            </p>
            <p className="font-bold italic">
              Teaching Reactjs, NodeJs, MongoDB , Wordpress.
            </p>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default CardConf;
