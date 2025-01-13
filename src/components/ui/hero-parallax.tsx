"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";
import { Link } from "react-router-dom";

interface Certificate {
  issuer: string;
  title: string;
  thumbnail?: string;
  link?: string;
}

export const HeroParallax = ({
  certificates,
}: {
  certificates: Certificate[];
}) => {
  const firstRow = certificates.slice(0, 3);
  const secondRow = certificates.slice(3, 6);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig
  );

  // Initial translateX animations for rows
  const firstRowTranslateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-100, 0]),
    springConfig
  );
  
  const secondRowTranslateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [100, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="py-40 px-6 md:px-20 overflow-hidden antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div
          style={{ x: firstRowTranslateX }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {firstRow.map((certificate) => (
            <ProductCard certificate={certificate} key={certificate.title} />
          ))}
        </motion.div>
        <motion.div
          style={{ x: secondRowTranslateX }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {secondRow.map((certificate) => (
            <ProductCard certificate={certificate} key={certificate.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        My <br /> Certifications
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        I have been working on my skills and certifications for a while now.
        Here are some of the certifications I have earned.
      </p>
    </div>
  );
};

export const ProductCard = ({
  certificate,
}: {
  certificate: Certificate;
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      key={certificate.title}
      className="group/certificate bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg flex flex-col"
    >
      <Link
        to={certificate.link ? certificate.link : "#"}
        className="block group-hover/certificate:shadow-xl h-48 lg:h-96 w-full overflow-hidden"
      >
        <img
          src={certificate.thumbnail}
          alt={certificate.title}
          className="object-cover group-hover/certificate:object-contain w-full bg-white transition-all duration-300"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {certificate.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Issued by: {certificate.issuer}
        </p>
      </div>
    </motion.div>
  );
};
