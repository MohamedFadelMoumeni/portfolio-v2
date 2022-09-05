import React from "react";
import Container from "./container.component";
import Image from "next/image";
import Link from "next/link";
const Trusted = () => {
  return (
    <div className="w-full  py-20">
      <Container>
        <h1 className="text-center text-black  text-5xl font-bold mb-4">
          Worked with
        </h1>
        <p className="mb-10 text-center text-black text-lg">
          I'm proud to have collaborated with some awesome companies
        </p>
        <div className="w-full flex items-center justify-between flex-wrap">
          <Link href={"https://hakamae.com/"}>
            <a target="_blank">
              <Image src="/1524486511538.jpg" width={100} height={100} />
            </a>
          </Link>
          <Link href={"https://fikralabs.com"}>
            <a target="_blank">
              <Image src="/1587997223022.jpg" width={100} height={100} />
            </a>
          </Link>
          <Link href="https://mirattibags.com/">
            <a target="_blank">
              <Image src="/1575030244310.jpg" width={100} height={100} />
            </a>
          </Link>
          <Link href="https://actunow.ma">
            <a target="_blank">
              <Image src="/Logo V3-04.png" width={170} height={50} />
            </a>
          </Link>
          <Link href="https://www.ncsc.gov.uk/">
            <a target="_blank">
              <Image
                src="/national-cyber-security-centre-ncsc-logo-vector.png"
                width={150}
                height={100}
              />
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Trusted;
