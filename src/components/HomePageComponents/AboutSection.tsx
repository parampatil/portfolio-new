import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MagicCard } from "@/components/ui/magic-card";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

import IULogo from "@/assets/images/Education Icons/IU Logo.png";
import SPPULogo from "@/assets/images/Education Icons/SPPU Logo.png";

import SkillsCard from "@/components/SkillsCard";
import SocialMediaDock from "../SocialMediaDock";
import ButtonThemed from "../ui/ButtonThemed";

// import AboutWave from "@/assets/Images/Backgrounds/AboutWave";

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
      className="relative flex min-h-screen w-full justify-center bg-white from-gray-900 via-black to-gray-800 py-16 dark:bg-gradient-to-b dark:text-white"
    >
      <div
        className="absolute bottom-0 left-0 h-40 bg-red-400"
        style={{
          clipPath: "ellipse(50% 100% at 50% 100%)",
        }}
      />

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
            <MagicCard className="p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
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
            <MagicCard className="flex size-full flex-col items-center justify-center p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <SkillsCard />
            </MagicCard>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <MagicCard className="p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
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
                      <p className="text-sm text-gray-600 dark:text-gray-300">
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
            <MagicCard className="p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="mb-4 text-xl font-semibold text-pink-400">
                Projects
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 mix-blend-difference">
                {projects.map((project, idx) => (
                  <li key={idx}>{project}</li>
                ))}
              </ul>
              <Link
                to="/#projects"
                className="mt-4 flex h-fit w-fit flex-1 items-center rounded-lg bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 px-6 py-2 text-center font-medium transition-transform duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:text-white"
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
            <MagicCard className="p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="mb-4 text-xl font-semibold text-yellow-400">
                Let’s Collaborate!
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                I am always eager to work on innovative projects and solve
                challenging problems. Let’s connect and discuss your ideas.
              </p>
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0">
                <ButtonThemed to="#/contact">Get in Touch</ButtonThemed>

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
            <MagicCard className="p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="mb-4 text-xl font-semibold text-green-400">
                More About Me
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                Get to know more about me and my journey.
              </p>
              <Link
                to="/about"
                className="mt-4 flex h-fit w-fit items-center rounded-lg bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 px-6 py-2 text-center font-medium transition-transform duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:text-white"
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
