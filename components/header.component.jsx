import React, { useEffect } from "react";
import Container from "./container.component";
import Navigation from "./navigation.component";
import { headerAnimation } from "../utils";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    headerAnimation();
  });
  return (
    <div className=" w-full bg-transparent py-4 fixed top-0 right-0 left-0 header z-50">
      <Container>
        <div className="w-full flex items-center justify-between">
          <div className="relative bg-red-500 w-10 h-10 md:w-14 md:h-14 cursor-pointer">
            <Image src={"/logo.png"} layout="fill" />
          </div>
          <Navigation />
        </div>
      </Container>
    </div>
  );
};

export default Header;
