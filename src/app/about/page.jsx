import React from "react";

const page = (children) => {
  return (
    <>
      <div className="py-4 transform translate-y-[5vh] mx-[1rem] sm:mx-8">
        <h1 className="text-center text-[#c5c6c7] text-[2rem]">About Me</h1>
        <div className="pt-[1rem] text-left text-[1rem] sm:text-[1.5rem] text-[#C5C6C7]">
          I'm a Full-Stack Developer specializing in building scalable and
          high-performance backend systems using Java Spring Boot, Node.js,
          Express.js, SQL, and NoSQL (MongoDB). I leverage AWS (RDS, S3, Elastic
          Beanstalk) for cloud-based solutions, ensuring reliability and
          scalability.
          <div className="h-4"></div>
          <div className="h-4"></div>On the frontend, I craft seamless user
          experiences with React.js, Next.js, JavaScript, HTML, CSS, and SCSS,
          combining performance with intuitive design. With expertise in UI/UX
          and Figma, I ensure visually engaging and functional applications.
          <div className="h-4"></div>With a strong foundation in Data Structures
          and Algorithms, I enjoy solving complex problems and optimizing system
          performance. I am currently pursuing my Master's degree in Computer
          Science from{" "}
          <a className="italic text-[#66FCF1]" href="https://www.scaler.com">
            Scaler Academy
          </a>{" "}
          and am committed to continuous learning in the evolving tech
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
