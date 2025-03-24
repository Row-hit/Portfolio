"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeRun } from "./GlobeRun";
import { div } from "motion/react-client";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/Data/confetti.json";
import { Renderer } from "three/webgpu";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  titleClassName,
  img,
  imgClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  titleClassName?: string;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("contact@Row-hit.coder");

    setCopied(true);
  };

  return (
    <div
      className={cn(
        "group/bento overflow-hidden shadow-input row-span-1 flex flex-col relative justify-between space-y-4 rounded-3xl  border border-white/[0.15]  transition duration-200 hover:shadow-xl ",
        className
      )}
      style={{
        background: " rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div
              className="absolute z-50 flex text-white
items-center justify-center font-bold"
            />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex-col flex px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-50">
            {description}
          </div>
          <div className="mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-50 ">
            {title}
          </div>

          {id === 2 && <GlobeRun />}
          {id === 3 && (
            <div className="flex gap-1  w-fit absolute top-0 -right-3 lg:-right-2 ">
              <div className="flex flex-col gap-3 lg:gap-5 h-fit">
                {["React.js", "Next.js", "JavaScript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 px-3 text-xs lg:text-sm opacity-50 lg:opacity-75 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="py-4 px-3 rounded-lg
text-center bg-[#10132e71]"
                />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 h-fit">
                <span
                  className="py-4 px-3 rounded-lg
text-center bg-[#10132e71]"
                />
                {["UI lib", "MangoDB", "Tailwind"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 px-3 text-xs  opacity-50 lg:opacity-60 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"
                position={"left"}
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
