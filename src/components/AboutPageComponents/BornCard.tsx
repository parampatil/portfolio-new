"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cake } from "lucide-react";

interface BornCardProps {
  birthDate: string; // Date in 'YYYY-MM-DD' format
  dayOfWeek: string; // Name of the day, e.g., "Sunday"
  funFacts?: string[]; // Optional fun facts
  imageUrl?: string; // Optional image URL
}

const BornCard: React.FC<BornCardProps> = ({
  birthDate,
  dayOfWeek,
  funFacts = [],
  imageUrl,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  const factVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="born-card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-6 shadow-lg text-white flex items-center"
    >
      <div className="flex-1">
        {/* Birth date */}
        <motion.h3 className="text-2xl font-bold">
          🎂 I was born on {birthDate}
        </motion.h3>

        {/* Day of the week */}
        <motion.p className="text-lg font-medium mt-1">
          It was a beautiful {dayOfWeek}.
        </motion.p>

        {/* Fun facts */}
        {funFacts.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Fun Facts:</h4>
            <ul className="mt-2 list-disc list-inside">
              {funFacts.map((fact, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={factVariants}
                  className="text-sm text-neutral-100"
                >
                  {fact}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Image or icon */}
      <div className="ml-6">
        {imageUrl ? (
          <motion.img
            src={imageUrl}
            alt="Born day"
            className="h-20 w-20 rounded-full shadow-lg"
          />
        ) : (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          >
            <Cake size={64} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BornCard;
