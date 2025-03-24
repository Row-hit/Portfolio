import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/Data";

const Footer = () => {
  return (
    <footer className="mb-[100px] md:mb-5 pb-10 w-full relative" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple-400">your</span> digital
          presence to the next level?
        </h1>

        <p className="text-white-200 text-center md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href={"mailto:contact@row-hit.com"}>
          <MagicButton
            title="Let's get in touch "
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-around mt-16 ">
        <p className="text-sm  md:text-base  md:font-normal font-light ">
          Copyright © 2025 Row-Hit
        </p>
        <div className="flex items-center gap-6 md:gap-3 ">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer  flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-100 rounded-lg border border-white/30"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
