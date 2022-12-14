import React from "react";
import Container from "./container.component";

import Counter from "./ui/react-counter.component";
const Statistics = () => {
  return (
    <div className="w-full py-20 bg-slate-800 text-white">
      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <Counter end={20} />
            <p className="text-3xl font-regular">Digital Projects</p>
          </div>
          <div className="text-center">
            <Counter end={12} />
            <p className="text-3xl font-regular">Happy clients</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
