import React, { useEffect } from "react";
import Header from "./header.component";
import Container from "./container.component";
import Button from "./ui/button.component";
import { parallax } from "../utils";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import Typical from "react-typical";

const Hero = () => {
  useEffect(() => {
    parallax();
  });
  return (
    <div
      className="flex flex-col pt-24 md:pt-4  h-auto md:h-screen bg-slate-800 text-white  "
      id="home"
    >
      <Header />
      <div className="w-full grow">
        <Container style="h-full">
          <div className="w-full h-full  flex flex-col-reverse md:flex-row items-center justify-between relative ">
            <div className="flex flex-col  space-y-4 md:space-y-8 z-10">
              <h4 className="font-bold text-xl ">Hello, I{"'"}m</h4>
              <h1 className="font-bold text-5xl ">Mohamed Fadel</h1>
              <h4 className="font-bold text-3xl ">
                Creative{"  "}
                <Typical
                  steps={[
                    " Developer.",
                    5000,
                    " Designer.",
                    5000,
                    " Pentester.",
                    5000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                  className="text-red-500"
                />
              </h4>
              <div className="w-full flex flex-col space-y-4  items-center space-x-6">
                <Button
                  href="#contact"
                  title="Contact me"
                  style="bg-red-500 border-2 border-red-500 duration-500 hover:bg-transparent "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </Button>

                <Button
                  href="#aboutme"
                  style=" border-2 border-red-500 duration-500  hover:bg-red-500"
                  title="About me"
                />
              </div>
              <div className="flex items-center w-full md:justify-start py-8 justify-center space-x-4">
                <FaFacebookF cursor={"pointer"} size={25} />
                <FaLinkedinIn cursor={"pointer"} size={25} />
                <AiFillGithub cursor={"pointer"} size={25} />
                <MdOutlineAlternateEmail cursor={"pointer"} size={25} />
              </div>
            </div>
            <div className="flex flex-col mb-8 md:mb-0 relative w-full   md:w-2/5 align-stretch z-10">
              <div className="w-full h-80 pt-6 md:pt-0 md:h-96 flex items-center justify-center md:justify-end relative  parallax  relative">
                <img
                  data-depth="0.1"
                  src="me.jpg"
                  className="h-full   drop-shadow-2xl rounded-0 md:rounded-full md:layer  md:absolute"
                />
                <div
                  data-depth="0.5"
                  className=" w-4 h-4 bg-red-500 rounded-full layer top-0 left-0 absolute z-30"
                />
              </div>
            </div>
            <h3 className="hidden md:block absolute z-0  text-slate-800 stroke-text ">
              CODING
            </h3>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
