import React from "react";
import Container from "./container.component";
import FormContact from "./form-contact.component";

const Contact = () => {
  return (
    <div className="w-full py-10 md:py-20" id="contact">
      <Container>
        <div className="w-full flex flex-col items-center">
          <h1 className="text-5xl text-center font-bold mb-6">
            Connect with me
          </h1>
          <p className="text-lg text-slate-400 font-regular text-center">
            With 20 years experience as a professional graphic designer and web
            developer, I have acquired the skills and knowledge necessary to
            make your project a success
          </p>
          <div className="w-full md:w-10/12 mt-6">
            <FormContact />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
