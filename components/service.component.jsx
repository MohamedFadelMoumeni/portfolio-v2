import React from "react";
import Container from "./container.component";
import Cardservice from "./ui/card-service.component";
const Service = () => {
  return (
    <div className="w-full py-10 md:py-20" id="service">
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
            description="I create your digital presence with a unique design.
 I effectively manage your digital identity and the user experience of your client.
Usint the lastest technologies."
          />
          <Cardservice
            title="Mobile Developement"
            img="/Mobile Phone_Outline.png"
            description="Develop high added value mobile apps.
I also provide actionable insights and recommendations. I have the ability to hit the ground running and solve many challenges."
          />

          <Cardservice
            title="Penestration Testing"
            img="/Security_Outline.png"
            description="Simulate an attack on your apps to show you your weaknesses (and how to bolster them)."
          />
        </div>
      </Container>
    </div>
  );
};

export default Service;
