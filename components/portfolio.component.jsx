import React from "react";
import Container from "./container.component";
import Category from "./ui/nav-projects.component";
import Cardproject from "./ui/card-project.component";
import Button from "./ui/button.component";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div
      className="w-full bg-slate-800 py-10 md:py-20 text-white"
      id="portfolio"
    >
      <Container>
        <h1 className="text-center text-5xl font-bold mb-16">
          Check my portfolio
        </h1>

        <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10">
          <Cardproject />
          <Cardproject />
          <Cardproject />
          <Cardproject />
          <Cardproject />
          <Cardproject />
        </div>
        <div className="w-full flex items-center justify-center">
          <Link href="/">
            <a className=" bg-red-500 py-2 px-6 rounded-full self-start">
              More
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
