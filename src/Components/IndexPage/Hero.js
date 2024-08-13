import React from "react";
import HeroImg from "../../assets/hero-img.png";
import PrimaryButton from "../Library/Button/PrimaryButton";
import SecondaryButton from "../Library/Button/SecondaryButton";
import { TypeAnimation } from "react-type-animation";
import "../../styles/blink-animation.css";

const Hero = () => {
  return (
    <div className="bg-purple-light flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto px-4 pt-14 pb-20 text-white grid gap-x-6 grid-cols-1 md:grid-cols-2">
        <div className="">
            
          {/* Blinking Widget */}
          <p className=" text-gray-300/80 font-semibold border-b border-gray-300/50 pb-0.5 w-fit tracking-[0.2em] text-[13px]  mb-12">
            <span className="">l e a r n i n g</span>
            <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink "></span>
            <span className="">a n d</span>
            <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink "></span>
            <br />
            <span className="">e a r n i n g</span>
            <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink "></span>
            <span>p l a t f o r m</span>
            <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink "></span>
          </p>

          {/* Navigation link */}
          <div className="flex space-x-3 mb-7">
            <PrimaryButton
              title="Login"
              icon={<i class="bi bi-arrow-right"></i>}
            />
            <SecondaryButton
              title="Sign up"
              icon={<i class="bi bi-arrow-right"></i>}
            />
          </div>

          {/* Slogun */}
          <h1 className="lg:text-6xl text-5xl mb-7 lg:leading-[4.2rem] leading-[3.7rem] font-light">
            Advice E- <br />
            learning
            <br />
            <span className=" text-white font-semibold">
              E-
              <TypeAnimation
                sequence={[
                  "Learning",
                  2000, // Waits 2s
                  "Earning",
                  2000, // Waits 2s
                ]}
                wrapper="span"
                speed={40} // 40 Km/h
                cursor={true}
                repeat={Infinity}
              />
            </span>
            <br />
            Platform
          </h1>

          {/* Description */}
          <p className="text-[18px] text-[#FFFFFFB8] mb-12">
            The main objective of this setup is how to use online social media
            in our society and how to earn online without wasting valuable time
            from online social media.
          </p>
        </div>

        {/* Hero Img */}
        <div className="flex justify-center md:items-center lg:items-baseline">
          <div className="relative">
            <img
              src={HeroImg}
              alt="Person on Laptop"
              className="max-h-60 md:max-h-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
