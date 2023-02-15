import React from "react";
import Slider from "../components/Slider";
import BulleHome from "../components/BulleHome";
import image_home from "../assets/image_home.jpg";
import Carousel from "../components/Carousel";

const Home = () => (
  <>
    <div className="bg-blue-400 h-auto  p-2 flex self-center flex-col  font-sans ">
      <h1 className="text-white text-xl p-2 self-center  font-sans ">
        Votre avenir commence ici
      </h1>
      <p className="text-white text-base p-2 mt-5 self-center  font-sans ">
        Apprenez à apprendre, découvrez les compétences de demain, et prenez
        votre carrière en main.
      </p>
      <div className="self-center mt-5 p-2">
        <button className=" mr-5 font-sans text-white  p-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Get Started
        </button>
        <button className=" font-sans text-white p-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Découvrir les formation
        </button>
      </div>
    </div>
    <div className="bg-grey-200 h-auto  p-2 flex self-center flex-row justify-between font-sans h-80 mx-auto items-center ">
      <BulleHome imageSrc={image_home} title="machin" description="dfghjklmù" />
      <BulleHome imageSrc={image_home} title="machin" description="dfghjklmù" />
      <BulleHome imageSrc={image_home} title="machin" description="dfghjklmù" />
    </div>
    <div className="bg-blue-200 h-auto flex justify-center items-center">
      {" "}
      <Slider />
    </div>
  </>
);

export default Home;
