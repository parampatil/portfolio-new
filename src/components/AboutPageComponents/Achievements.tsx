"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Achievement {
  title: string;
  description: string;
}
const achievements: Achievement[] = [
  {
    title: "3rd Runner-Up - GDSC Hackathon",
    description: "Participated in the GDSC Hackathon with my team and secured the 3rd runner-up position. A detailed PDF report is available.",
  },
  {
    title: "Best Project - Introduction to VR Class",
    description:
      "Developed a project for the Intro to VR class that was awarded the best project. It includes interactive elements with two videos available for demonstration.",
  },
];

const CertificatesAndAchievements: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section ref={ref} id="acheivements" className="p-20 w-full">
      {/* Achievements Section */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Achievements</h2>
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md border dark:border-neutral-800"
          >
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              {achievement.title}
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CertificatesAndAchievements;
