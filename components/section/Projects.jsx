import Image from "next/image";
import Header from "../Header";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Wumbo Landing Page",
      demoURL: "https://wumbo.vercel.app",
      codeURL: "https://github.com/syncr0nate/wumbo-app",
      imageURL: "/assets/img/project1.png",
    },
    {
      id: 2,
      name: "Collosal Landing Page",
      demoURL: "https://collosal-web.vercel.app",
      codeURL: "https://github.com/syncr0nate/collosal",
      imageURL: "/assets/img/project2.png",
    },
    {
      id: 3,
      name: "Hoobank | Modern Bank",
      demoURL: "#",
      codeURL: "#",
      imageURL: "/assets/img/project3.png",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="relative px-8 lg:px-0 mb-40 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <div className="absolute bottom-0 left-16 -z-50 w-36 h-36 rounded-full bg-gradient-to-b from-secondary/20 to-secondary/5"></div>
      <div className="absolute -bottom-10 left-32 -z-50 w-36 h-36 rounded-full bg-gradient-to-b from-secondary/20 to-secondary/5"></div>
      <Header
        title="Latest Project"
        subTitle="Lately I've been working on a slicing design"
      />
      <div className="block space-y-16 lg:space-y-0 sm:flex justify-evenly w-full sm:w-8/12 flex-wrap items-center my-16 gap-10">
        {projects.map((project) => (
          <div
            className={`${
              project.id == 2 && "lg:mt-20"
            } border-t border-white/10 py-5 space-y-5`}
            key={project.id}
          >
            <h3 className="text-xl lg:text-2xl font-josefin mb-2 text-white py-2">
              {project.name}
            </h3>
            <Image
              src={project.imageURL}
              width={400}
              height={250}
              alt={project.name}
            />
            <div className="flex items-center space-x-3">
              <ButtonPrimary href={project.demoURL} name="View Demo" />
              <ButtonSecondary
                href={project.codeURL}
                name="View Code"
                logo="/assets/logo/github.png"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
