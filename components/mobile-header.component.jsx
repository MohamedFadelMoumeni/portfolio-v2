import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import NavItem from "./navitem.component";
const Mobileheader = () => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);
  return (
    <div className="md:hidden">
      <HiMenuAlt3
        cursor="pointer"
        onClick={toggle}
        className="menu-header"
        size={25}
      />
      <div
        className={`fixed right-0 left-0 top-0 bottom-0 bg-slate-800 w-full flex flex-col  p-2 h-full ${
          !open && "hidden"
        }`}
      >
        <div className="w-full flex items-center justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer text-white"
            onClick={toggle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className=" text-white w-full self-stretch flex space-y-6 flex-col items-center h-full ">
          <NavItem title="Home" href="home" />
          <NavItem title="About me" href="aboutme" />
          <NavItem title="Service" href="service" />
          <NavItem title="Resume" href="resume" />
          <NavItem title="Testimonials" href="testimonials" />
          <NavItem title="Contact" href="contact" />
        </div>
      </div>
    </div>
  );
};

export default Mobileheader;
