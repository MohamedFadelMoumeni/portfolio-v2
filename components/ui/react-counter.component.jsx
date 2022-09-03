import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const Counter = ({ end, decimals }) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={1.2}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <h1
            className="text-5xl font-bold mb-2"
            data-to={end}
            ref={countUpRef}
          >
            +900
          </h1>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
