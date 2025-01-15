"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Achievement {
  title: string;
  description: string;
  videos?: { url: string; description: string }[];
  links?: { label: string; url: string }[];
}

const achievements: Achievement[] = [
  {
    title: "3rd Runner-Up - GDSC Hackathon",
    description:
      "Participated in the GDSC Hackathon with a partner and secured the 3rd runner-up position. During the 2-day hackathon, we built a PDF splitter tool that uses OCR to detect chapters and split the PDF automatically. This project enhanced my understanding of OCR and PDF processing.",
    links: [
      {
        label: "View Project Report (PDF)",
        url: "https://github.com/parampatil/splitpdf_exe/blob/main/Project%20Report.pdf",
      },
    ],
  },
  {
    title: "Best Project - Introduction to VR Class",
    description:
      "Created two projects in Unity for the Intro to VR class. The first project involved crafting a creative scene and showcasing animations. The second project was an interactive game. These projects greatly improved my understanding of C# and Unity development.",
    videos: [
      {
        url: "https://www.youtube.com/embed/enuf0H3dLIU",
        description: "This video demonstrates the creative scene animation created in Unity.",
      },
      {
        url: "https://www.youtube.com/embed/--Fj6DdTb58",
        description:
          "This video showcases the interactive game developed using Unity, focusing on gameplay mechanics.",
      },
    ],
  },
];

const Achievements: React.FC = () => {
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
    <section ref={ref} id="achievements" className="p-5 lg:p-10 2xl:p-20 w-full">
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
            {/* Render Links */}
            {achievement.links && (
              <ul className="mt-4 space-y-2">
                {achievement.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {/* Render Videos */}
            {achievement.videos && (
              <div className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {achievement.videos.map((video, videoIndex) => (
                    <div key={videoIndex} className="flex flex-col space-y-2">
                      <iframe
                        src={video.url}
                        title={`Video ${videoIndex + 1}`}
                        className="w-full h-64 xl:h-72 2xl:h-96 rounded-lg shadow--xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <p className="text-neutral-700 dark:text-neutral-300">{video.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
