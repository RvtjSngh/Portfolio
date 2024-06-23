import React from "react";

const page = (children) => {
  return (
    <>
      <div className="py-4 transform translate-y-[5vh] mx-[1rem] sm:mx-8">
        <h1 className="text-center text-[#c5c6c7] text-[2rem]">About Me</h1>
        <div className="pt-[1rem] text-left text-[1rem] sm:text-[1.5rem] text-[#C5C6C7]">
          I'm a Software Developer adept at crafting flawless user interfaces.
          Proficient in React, HTML, CSS, and JavaScript, I enjoy crafting
          engaging web experiences. With a strong eye for design and expertise
          in frameworks like React and Next.js, I'm well-equipped to bring your
          vision to life.<div className="h-4"></div> I hold a Bachelor's degree
          from{" "}
          <a className="italic text-[#66FCF1]" href="https://www.thapar.edu/">
            Maharshtra Institute of Engineering & Technology.
          </a>
          <div className="h-4"></div>My primary technologies include React.js,
          Next.js, HTML, CSS, SCSS and JavaScript and I use Figma for design.
          With a solid foundation in front-end development and UI/UX design, I
          also have precise knowledge of backend technologies like Node.js,
          Express.js, Mongoose and MongoDB.<div className="h-4"></div>I have a
          strong grasp of advance Data Structures and Algorithms. Committed to
          continuous learning and embracing challenges in the ever-evolving tech
          landscape.
          {/* <div className="h-4"></div>
          Some of the technologies I usually work with are React.js, NextJS,
          HTML, CSS, SCSS, JavaScript, Node.js, Express.js, Mongoose and
          MongoDB, and for designing, I mainly use MaterialUI
          <div className="h-4"></div>
          With solid front-end and UI/UX design basics, I am currently focused
          on learning more about backend technologies. */}
        </div>
        <div className="h-8"></div>
        <div className="text-center text-[#C5C6C7] text-[1rem] sm:text-[1.5rem]">
          You can reach me here!<br></br>
          <span className="underline hover:text-[#66FCF1]">
            rvtjsngh@gmail.com
          </span>
        </div>
      </div>
    </>
  );
};

export default page;
