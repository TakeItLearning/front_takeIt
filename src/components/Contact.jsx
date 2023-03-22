import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="py-8 flex flex-col items-center my-44">
      <h1 className="text-5xl font-bold mb-4 text-center">Contactez-nous</h1>
      <div className="w-full md:w-1/2 h-1/2 ">
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className=" bg-white p-6 rounded-lg">
            <div className="mb-4">
              <label
                className="text-3xl block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Nom
              </label>
              <input
                className="text-3xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="text-3xl block  text-gray-700 font-bold mb-4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-3xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Votre adresse email"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className=" text-3xl block text-gray-700 font-bold mb-4"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="text-3xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="4"
                placeholder="Votre message"
                onChange={handleInputChange}
              />
            </div>
            <div className="text-3xlflex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
