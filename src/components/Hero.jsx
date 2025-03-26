"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import TypingElement from "./Typingelement";

const Hero = () => {
  return (
    <>
      <div className="text-center mx-auto p-4 mt-[170px]">
        <div className="text-[1.5rem] md:text-[2rem] text-[#66FCF1]">
          <TypingElement message="Heello There..." />
        </div>
        <p className="text-[1.25rem] md:text-[1.5rem] text-[#C5C6C7]">
          I’m Ravtej, a Full Stack Developer passionate about writing clean,
          efficient, and scalable code.
        </p>
      </div>
      <div className="text-center mt-[170px] mx-auto p-4">
        <div className="grid grid-flow-col sm:w-[30%] sm:mx-auto ">
          <div className="mx-auto">
            <a href="https://www.linkedin.com/in/ravtej-singh-a63549219/">
              <FaLinkedinIn className="w-4 h-4" fill="#66FCF1" />
            </a>
          </div>
          <div className="mx-auto">
            <a href="https://github.com/RvtjSngh">
              <FaGithub className="w-4 h-4" fill="#66FCF1" />
            </a>
          </div>
          <div className="mx-auto">
            <a href="https://x.com/RavtejSng">
              <FaTwitter className="w-4 h-4" fill="#66FCF1" />
            </a>
          </div>
          <div className="mx-auto">
            <a href="https://leetcode.com/u/Ravtej/">
              <SiLeetcode className="w-4 h-4" fill="#66FCF1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
