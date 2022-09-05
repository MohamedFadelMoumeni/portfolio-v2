import React from "react";
import Container from "./container.component";
import CardConf from "./ui/card-conferences.component";
import ReactVisibilitySensor from "react-visibility-sensor";
import Zoom from "react-reveal/Zoom";

const Conferences = () => {
  return (
    <div className="w-full py-10 md:py-20">
      <Container>
        <div className="w-full mb-12">
          <h1 className="text-5xl text-center font-bold">Conferences</h1>
          <p className="text-black mt-4 text-center text-lg w-full">
            Teaching the next generation of ambitious developers.
          </p>
        </div>

        <CardConf />
      </Container>
    </div>
  );
};

export default Conferences;
