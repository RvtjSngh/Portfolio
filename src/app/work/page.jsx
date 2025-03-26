import React from "react";

// async function getdata() {
//   const query = `*[_type == 'work']`;
//   //const url = `https://n8a3iqt4.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27work%27%5D`;
//   // const res = await fetch(url);
//   //const data = await res.json();
//   const data = await client.fetch(query);
//   return data;
// }

const page = () => {
  const items = [
    {
      projecttype: "Personal Project",
      title: "Product Service Application",
      imgsrc: "/JSpring-Boot.webp",
      tech: "Java Spring-Boot | AWS | MySQL | Redis",
      discription:
        "Developed a Spring Boot-based Product Service with RESTful APIs for efficient CRUD operations, improving data management by 40%. Optimized database interactions using JPA, Hibernate, MySQL (AWS RDS), secured access with AWS security groups, integrated Stripe for payments, and reduced API response time from ~500ms to ~5ms using Redis Cache.",
      url: "https://github.com/RvtjSngh/ProductService",
    },
    {
      projecttype: "Personal Project",
      title: "Doctor-Patient Appointment System",
      imgsrc: "/NodeJS.webp",
      tech: "NodeJS | ExpressJS | AWS | NoSQL(MongoDB)",
      discription:
        "Developed a doctor-patient appointment system with secure scheduling and communication, built on Node.js, Express.js, MongoDB, and AWS. Implemented LinkedIn authentication, real-time audio/video calling (WebRTC, Socket.io), Razorpay payments, and JWT-based security, managing user data via Amazon S3.",
      url: "https://github.com/RvtjSngh/Appointment-System-Backend",
    },
    {
      projecttype: "Personal Project",
      title: "Apple Landing Page Clone",
      imgsrc: "/applelandingpage.png",
      tech: "Nextjs | SCSS",
      discription:
        "An Apple-inspired Land Page Clone powered by Next.js and elevated with SCSS styling, delivering a seamless blend of cutting-edge web development and minimalist design aesthetics.",
      url: "https://apple-landing-page-look-alike-pg5u.vercel.app",
    },
    {
      projecttype: "zus.network",
      title: "Zus Business Website",
      imgsrc: "/zusnetwork.png",
      tech: "ReactJS | CSS | Framer Motion",
      discription: "Company website revamped using ReactJS & CSS.",
      url: "https://zus.network",
    },
  ];

  return (
    <>
      <div className="transform translate-y-[7vh] mx-[1rem] sm:mx-[10rem] text-center">
        <div className="text-[#C5C6C7] font-semibold text-[2rem]">Projects</div>
        <div className="text-[#C5C6C7] text-[1rem] sm:text-[1.5rem] pt-4">
          Welcome to My Projects Showcase! Here, I demonstrate my expertise in
          full-stack development, building scalable backend systems and
          engaging, user-friendly web experiences. My projects highlight
          proficiency in Java Spring Boot, Node.js, SQL, NoSQL, AWS, React.js,
          and Next.js, showcasing seamless integration between frontend and
          backend. Each project reflects my ability to design robust
          architectures, optimize performance, ensure security, and deliver an
          exceptional user experience.
        </div>
        <div className="mt-8 sm:mt-20 ">
          {items.map((project, index) => (
            <div key={index} className="flex flex-col space-y-8 mb-8 sm:mb-16">
              <p className="text-[#c5c6c7] text-[20px] sm:text-[2rem]">
                {project.projecttype}
              </p>
              <h2 className="text-[#C5C6C7] text-[24px] sm:text-[2rem]">
                {project.title}
              </h2>

              <img src={project.imgsrc} alt={project.title} />
              <p className="text-[#c5c6c7] font-bold rounded-md">
                Technologies: {project.tech}
              </p>
              <p className="text-[#c5c6c7] text-left sm:text-[20px]">
                {project.discription}
              </p>

              <a
                href={project.url}
                target="_blank"
                className="border-[2px] border-[#c5c6c7] w-[130px] p-2 font-semibold text-[#c5c6c7]"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
