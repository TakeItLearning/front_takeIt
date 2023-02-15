import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="py-8 flex flex-col items-center my-44">
      <h1 className="text-5xl font-bold mb-4 text-center">Contactez-nous</h1>
      <div className="w-full md:w-1/2 h-1/2 ">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

