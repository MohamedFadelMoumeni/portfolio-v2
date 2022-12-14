import React from "react";
import NavItem from "./navitem.component";

const Navigation = () => {
  return (
    <nav className="hidden md:flex grow  items-center justify-end space-x-10">
      <NavItem title="Home" href="home" />
      <NavItem title="About me" href="aboutme" />
      <NavItem title="Service" href="service" />
      <NavItem title="Resume" href="resume" />
      <NavItem title="Testimonials" href="testimonials" />
      <NavItem title="Contact" href="contact" />
    </nav>
  );
};

export default Navigation;
