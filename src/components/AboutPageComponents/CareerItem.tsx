"use client";

import React, { useRef } from "react";
import {  motion, useInView } from "framer-motion";

interface CareerItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
  logoUrl?: string; // Optional logo
}

const CareerItem: React.FC<CareerItemProps> = ({
  title,
  company,
  duration,
  description,
  technologies,
  logoUrl,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations for child elements
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ListVarient = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 1} },
  };

  const ListItemVarient = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }

const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { delay: 0.5 } },
};

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="career-item flex gap-2 items-center bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md border dark:border-neutral-800"
    >
      <div className="flex-1">
        {/* Title */}
        <motion.h3
          variants={childVariants}
          className="text-xl font-semibold text-neutral-900 dark:text-white"
        >
          {title}
        </motion.h3>

        {/* Company */}
        <motion.p
          variants={childVariants}
          className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
        >
          {company}
        </motion.p>

        {/* Duration */}
        <motion.p
          variants={childVariants}
          className="text-sm text-neutral-500 dark:text-neutral-500"
        >
          {duration}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={childVariants}
          className="mt-2 text-neutral-700 dark:text-neutral-300"
        >
          {description}
        </motion.p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <motion.div
            variants={childVariants}
          >
            <h4 className="mt-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              Technologies:
            </h4>
            <motion.ul
              variants={ListVarient}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-1 flex flex-wrap gap-2"
            >
              {technologies.map((tech, index) => (
                <motion.li
                  key={index}
                  variants={ListItemVarient}
                  className="px-2 py-1 text-xs bg-neutral-200 dark:bg-white/80 rounded-md"
                >
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </div>

      {/* Logo */}
      {logoUrl && (
        <motion.img
          variants={logoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.25 }}
          src={logoUrl}
          alt={`${company} logo`}
          className="h-16 rounded-md shadow-md "
        />
      )}
    </motion.div>
  );
};

export default CareerItem;
