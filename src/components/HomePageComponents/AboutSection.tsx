import { motion } from "motion/react";
import { MagicCard } from "@/components/ui/magic-card";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

import IULogo from "@/assets/IU Logo.png";
import SPPULogo from "@/assets/SPPU Logo.png";

import ReactLogo from "@/assets/React Logo.png";
import NextJSLogo from "@/assets/nextjs.svg";
import TypeScriptLogo from "@/assets/Typescript Logo.svg";
import PythonLogo from "@/assets/Python Logo.png";
import { Link } from "react-router-dom";

const skills = [
  { name: "React", icon: ReactLogo },
  { name: "Next.js", icon: NextJSLogo },
  { name: "TypeScript", icon: TypeScriptLogo },
  { name: "Python", icon: PythonLogo },
];

const universities = [
  {
    name: "Indiana University Bloomington",
    logo: IULogo,
    details: "Master of Science in Computer Science | GPA: 3.7/4",
  },
  {
    name: "Savitribai Phule Pune University",
    logo: SPPULogo,
    details: "Bachelor of Engineering in Computer Engineering | GPA: 9.56/10",
  },
];

const projects = [
  "MapReduce System with Google Cloud Functions",
  "Patient & Insurance Management System",
  "COVID Vaccine Slot Booking Software",
];

const AboutSection = () => {
  return (
    <section id="about-me" className="w-full flex justify-center ite bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16 text-white min-h-screen">
      <div className="container px-6">
        {/* Section Title */}
        <AnimatedShinyText className="mb-8 text-center text-4xl font-bold">
          About Me
        </AnimatedShinyText>

        {/* Custom Bento Grid */}
        <div className="grid grid-cols-6 gap-6">
          {/* Professional Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-full md:col-span-full lg:row-span-full"
          >
            <MagicCard className="bg-gray/90 rounded-lg p-6 shadow-lg hover:bg-gradient-to-br">
              Experienced in leading teams and building high-performance web
              applications.
            </MagicCard>
          </motion.div>
          
          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-6 md:col-span-3 lg:col-span-2 row-span-2"
          >
            <MagicCard className="rounded-lg bg-gray-800/80 p-6 shadow-lg hover:shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-purple-400">
                Top Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="mb-2 h-12 w-12"
                    />
                    <p className="text-sm text-gray-300">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </MagicCard>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <MagicCard className="rounded-lg bg-gray-800/80 p-6 shadow-lg hover:shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-blue-400">
                Education
              </h3>
              <div className="space-y-4">
                {universities.map((university) => (
                  <motion.div
                    key={university.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-4"
                  >
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="object-contain h-12 w-12"
                    />
                    <div>
                      <p className="font-medium">{university.name}</p>
                      <p className="text-sm text-gray-300">
                        {university.details}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </MagicCard>
          </motion.div>

          {/* Projects Card */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-6 md:col-span-3 lg:col-span-2"
            >
            <MagicCard className="rounded-lg bg-gray-800/80 p-6 shadow-lg hover:shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-pink-400">
              Projects
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
              {projects.map((project, idx) => (
                <li key={idx}>{project}</li>
              ))}
              </ul>
              <Link
              to="/#projects"
              className="mt-4 inline-block rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 px-4 py-2 font-medium transition-transform duration-300 hover:-translate-y-[2px] hover:bg-gradient-to-r hover:text-white"
              >
              View All Projects
              </Link>
            </MagicCard>
            </motion.div>

          

          {/* Call-to-action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <MagicCard className="rounded-lg bg-gray-800/80 p-6 shadow-lg hover:shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-yellow-400">
                Let’s Collaborate!
              </h3>
              <p className="mb-4 text-sm text-gray-300">
                I am always eager to work on innovative projects and solve
                challenging problems.
              </p>
              <a
                href="#/about"
                className="inline-block rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-2 font-medium transition-transform duration-300 hover:-translate-y-[2px] hover:bg-gradient-to-r hover:text-white"
              >
                Learn More About Me
              </a>
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
