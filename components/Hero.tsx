import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen pb-20 pt-36 mb-20">
      <Spotlight
        className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen opacity-100"
        fill="white"
      />
      <Spotlight
        className=" top-10 left-50 h-[80vh] w-[50wv] opacity-100"
        fill="orange"
      />
      <Spotlight
        className=" top-28 left-100  h-[80vh] w-[50wv] opacity-100"
        fill="blue"
      />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1
            className=" uppercase tracking-widest text-blue-100 max-w-80
text-xs text-center"
          >
            Dynamic Web Magic with Next. js
          </h1>

          <TextGenerateEffect
            className="text-center text-[40px]  md:text-5xl xl:text-6xl"
            words="Transforming Concepts into
Seamless User Experiences"
          />

          <p
            className="text-center md:tracking-wider
mb-4 text-sm md:text-lg lg:text-2xl"
          >
            Hi I&apos;m Rowhit , a React.js Developer based in India
          </p>

          <a href="#about">
            <MagicButton
              title={"show my work"}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
