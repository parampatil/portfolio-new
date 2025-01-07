import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MagicCard } from "@/components/ui/magic-card";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

import IULogo from "@/assets/images/Education Icons/IU Logo.png";
import SPPULogo from "@/assets/images/Education Icons/SPPU Logo.png";

import CplusLogo from "@/assets/images/Skills Icons/Cplus Logo.png";
import CsharpLogo from "@/assets/images/Skills Icons/Csharp Logo.png";
import JavaScriptLogo from "@/assets/images/Skills Icons/JavaScript Logo.png";
import TypeScriptLogo from "@/assets/images/Skills Icons/Typescript Logo.svg";
import PythonLogo from "@/assets/images/Skills Icons/Python Logo.png";

import ReactLogo from "@/assets/images/Skills Icons/React Logo.png";
import NextJSLogo from "@/assets/images/Skills Icons/NextJs.svg";
import GCPLogo from "@/assets/images/Skills Icons/GCP Logo.png";
import GitLogo from "@/assets/images/Skills Icons/Git Logo.png";
import SQLLogo from "@/assets/images/Skills Icons/SQL Logo.png";
import SocialMediaDock from "../SocialMediaDock";

import AboutWave from "@/assets/Images/Backgrounds/AboutWave";

const skillsInner = [
  { name: "C++", icon: CplusLogo },
  { name: "C#", icon: CsharpLogo },
  { name: "JavaScript", icon: JavaScriptLogo },
  { name: "TypeScript", icon: TypeScriptLogo },
  { name: "Python", icon: PythonLogo },
];

const skillsOuter = [
  { name: "React", icon: ReactLogo },
  { name: "Next.js", icon: NextJSLogo },
  { name: "Google Cloud", icon: GCPLogo },
  { name: "Git", icon: GitLogo },
  { name: "SQL", icon: SQLLogo },
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
    <section
      id="about-me"
      className="relative flex min-h-screen w-full justify-center bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16 text-white"
    >
      <div className="container p-2 md:p-0">
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
            <MagicCard className="rounded-lg p-6 shadow-lg">
              Experienced in leading teams and building high-performance web
              applications.
            </MagicCard>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-6 row-span-2 md:col-span-3 lg:col-span-2"
          >
            <MagicCard className="flex size-full flex-col items-center justify-center rounded-lg p-6 shadow-lg hover:shadow-xl">
              <div className="relative flex size-full min-h-[400px] flex-col items-center justify-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                  Skills
                </span>

                {/* Outer Orbit */}
                <OrbitingCircles iconSize={40} radius={180}>
                  {skillsOuter.map((skill) => (
                    <div key={skill.name} className="relative">
                      <img src={skill.icon} alt={skill.name} />
                      <p className="absolute left-1/2 -translate-x-1/2 text-center text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </OrbitingCircles>
                {/* Inner Orbit */}
                <OrbitingCircles
                  iconSize={40}
                  radius={100}
                  speed={1.5}
                  delay={20}
                  reverse
                >
                  {skillsInner.map((skill) => (
                    <div key={skill.name} className="relative">
                      <img src={skill.icon} alt={skill.name} />
                      <p className="absolute left-1/2 -translate-x-1/2 text-center text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </OrbitingCircles>
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
            <MagicCard className="rounded-lg p-6 shadow-lg hover:shadow-xl">
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
                      className="h-12 w-12 object-contain"
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
            <MagicCard className="rounded-lg p-6 shadow-lg hover:shadow-xl">
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
                className="mt-4 inline-block rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 px-4 py-2 font-medium transition-transform duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:text-white"
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
            className="col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-3"
          >
            <MagicCard className="rounded-lg p-6 shadow-lg hover:shadow-xl">
              <h3 className="mb-4 text-xl font-semibold text-yellow-400">
                Let’s Collaborate!
              </h3>
              <p className="mb-4 text-sm text-gray-300">
                I am always eager to work on innovative projects and solve
                challenging problems. Let’s connect and discuss your ideas.
              </p>
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0">
                <a
                  href="#/contact"
                  className="my-auto flex h-fit w-fit items-center rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-2 text-center font-medium transition-transform duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:text-white"
                >
                  Get in Touch
                </a>
                {/* Social media Icons */}
                <div className="flex-1">
                  <SocialMediaDock />
                </div>
              </div>
            </MagicCard>
          </motion.div>

          {/* Learn more about me Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-6 md:col-span-3 lg:col-span-6 xl:col-span-1"
          >
            <MagicCard className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-green-400">
                More About Me
              </h3>
              <p className="mb-4 text-sm text-gray-300">
                Get to know more about me and my journey.
              </p>
              <Link
                to="/about"
                className="rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 px-4 py-2 font-medium transition-transform duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:text-white"
              >
                Learn More
              </Link>
            </MagicCard>
          </motion.div>
        </div>
      </div>
      
      {/* Background Wave */}
      {/* <AboutWave /> */}
    </section>
  );
};

export default AboutSection;
