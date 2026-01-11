import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

import SkillsCard from "@/components/SkillsCard";
import SocialMediaDock from "../SocialMediaDock";
import ButtonThemed from "../ui/ButtonThemed";

import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2.0,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2.0,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2.0,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  return (
    <section
      id="about-me"
      className="relative flex min-h-screen w-full justify-center dark:text-white"
      ref={ref}
    >
      <div className="container p-2">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <AnimatedShinyText className="mb-8 text-center text-4xl font-bold">
            About Me
          </AnimatedShinyText>
        </motion.div>

        {/* Custom Bento Grid */}
        <motion.div
          className="grid auto-rows-max grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Professional Overview Card */}
          <motion.div variants={itemVariants} className="col-span-full">
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
            variants={scaleIn}
            className="col-span-6 row-span-2 md:col-span-3 lg:col-span-2"
          >
            <MagicCard className="flex size-full flex-col items-center justify-center p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <SkillsCard />
            </MagicCard>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={slideInLeft}
            className="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <EducationSection />
          </motion.div>

          {/* Experience Card */}
          <motion.div
            variants={slideInRight}
            className="col-span-6 h-full md:col-span-3 lg:col-span-2"
          >
            <ExperienceSection />
          </motion.div>

          {/* Call-to-action Card */}
          <motion.div
            variants={scaleIn}
            className="col-span-6 md:col-span-3 lg:col-span-4 xl:col-span-3"
          >
            <MagicCard className="p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="mb-4 text-xl font-semibold text-aurora-orange">
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
            variants={itemVariants}
            className="col-span-6 md:col-span-3 lg:col-span-6 xl:col-span-1"
          >
            <MagicCard className="p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <h3 className="mb-4 text-xl font-semibold text-green-400">
                More About Me
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                Get to know more about me and my journey.
              </p>
              <ButtonThemed to="/about">Learn More</ButtonThemed>
            </MagicCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Wave */}
      {/* <AboutWave /> */}
    </section>
  );
};

export default AboutSection;
