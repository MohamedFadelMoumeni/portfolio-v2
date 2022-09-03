import React from "react";
import Container from "./container.component";
import Cardservice from "./ui/card-service.component";
const Service = () => {
  return (
    <div className="w-full py-10 md:py-20">
      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 md:mt-10">
          <div className="w-full col-span-1 md:col-span-2">
            <h1 className=" text-5xl font-bold mb-6 ">My service</h1>
            <p className=" w-full text-slate-400 font-regular text-xl">
              We offer high quality products for competitive prices. Our main
              goal is customer satisfaction, which we obtain through market
              orientation of ongoing service and support.
            </p>
          </div>
          <Cardservice
            title="Web Developement"
            img="/Web Developer_Outline.png"
          />
          <Cardservice
            title="Mobile Developement"
            img="/Mobile Phone_Outline.png"
          />
          <Cardservice title="UX/UI Design" img="/Designer _Outline.png" />
          <Cardservice
            title="Penestration Testing"
            img="/Security_Outline.png"
          />
        </div>
      </Container>
    </div>
  );
};

export default Service;
