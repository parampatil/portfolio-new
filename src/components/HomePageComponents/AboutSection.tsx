import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { MagicCard } from "@/components/ui/magic-card";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

import SkillsCard from "@/components/SkillsCard";
import SocialMediaDock from "../SocialMediaDock";
import ButtonThemed from "../ui/ButtonThemed";

import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

const AboutSection = () => {
  return (
    <section
      id="about-me"
      className="relative flex min-h-screen w-full justify-center bg-white from-gray-950 via-gray-900 to-gray-800 py-16 dark:bg-gradient-to-b dark:text-white"
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
        <div className="grid auto-rows-max grid-cols-6 gap-6">
          {/* Professional Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-full"
          >
            <MagicCard className="flex items-start gap-4 bg-white p-5 shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-neutral-900">
              {/* Main text */}
              <div>
                <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
                  Full Stack Developer & Problem Solver
                </h2>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                  I’m a full stack developer specializing in building secure,
                  scalable, and user-friendly web applications. At{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    360 World Inc
                  </span>
                  , I rapidly delivered admin dashboards and business sites with
                  Next.js, Go, and GCP. At{" "}
                  <span className="font-semibold text-pink-600 dark:text-pink-400">
                    Indiana University
                  </span>
                  , I led machine learning and automation projects. I thrive on
                  clean code, modern UI/UX, and turning ambitious ideas into
                  real-world results.
                </p>
              </div>
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
            <EducationSection />
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-6 h-full md:col-span-3 lg:col-span-2"
          >
            <ExperienceSection />
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
                <ButtonThemed to="/contact">Get in Touch</ButtonThemed>

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
