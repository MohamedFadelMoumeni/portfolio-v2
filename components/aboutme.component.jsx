import React, { useEffect } from "react";
import Container from "./container.component";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import ReactVisibilitySensor from "react-visibility-sensor";
import Skill from "./ui/skill.component";

const Aboutme = () => {
  return (
    <div className="bg-white" id="aboutme">
      <Container>
        <div className="w-full py-10 md:py-20 flex  flex-col md:flex-row  items-center justify-between">
          <div className="w-full md:w-3/5 relative parallax flex items-center justify-center md:justify-start">
            <Fade left cascade style={{ background: "transparent" }}>
              <Image width="300" height="420" src={"/me.jpg"} />
            </Fade>
            {({ countUpRef, start }) => (
              <ReactVisibilitySensor onChange={start} delayedCall>
                <Fade left cascade style={{ background: "transparent" }}>
                  <Image
                    ref={countUpRef}
                    width="300"
                    height="420"
                    src={"/me.jpg"}
                  />
                </Fade>
              </ReactVisibilitySensor>
            )}
          </div>
          <div className="grow md:pl-10  self-stretch  py-6">
            <h4 className="font-bold mb-4 text-red-500 text-lg">About me</h4>
            <h1 className="text-3xl font-bold mb-6">
              I'm Mohamed Web Designer
            </h1>
            <p className="text-lg text-slate-400 font-regular mb-6">
              Hi! My name is Aali Walker. I am UI/UX designer, and I'm very
              passionate and dedicated to my work.
            </p>
            <p className="text-lg text-slate-400 font-regular">
              With 20 years experience as a professional graphic designer and
              web developer, I have acquired the skills and knowledge necessary
              to make your project a success
            </p>
            <div className="w-full p-1  mt-4">
              <h2 className="font-bold mb-4">Skills :</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-6 ">
                <Skill title="Html/Css" />
                <Skill title="Javascript/ES6" />
                <Skill title="Tailwindcss/Scss" />
                <Skill title="ReactJs/React native" />
                <Skill title="Redux" />
                <Skill title="Styled-components" />
                <Skill title="Nextjs" />
                <Skill title="Nodejs" />
                <Skill title="SQL" />
                <Skill title="NoSQL" />
                <Skill title="Burp suite" />
                <Skill title="Linux" />
                <Skill title="Nmap" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Aboutme;
