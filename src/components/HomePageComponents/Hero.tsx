import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import heroImage from "@/assets/hero2.jpg";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="flex w-full flex-col items-center justify-between overflow-hidden bg-gray-900 text-white lg:flex-row"
      ref={ref}
    >
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-10 lg:w-1/2">
        {/* Name and Title Section */}
        <motion.div
          initial={{y: -50 }}
          animate={isInView ? { y: 0 } : { y: -50 }}
          exit={{ y: -50 }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="font-berkshire bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-8xl text-transparent"
            >
              Param
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="font-berkshire bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-8xl text-transparent"
            >
              Patil
            </motion.h1>
          </div>
          <p className="mt-4 text-lg text-gray-400 md:text-xl">
            Software Engineer | Indiana University Bloomington | MS in Computer
            Science
          </p>
          <div className="mt-4 flex flex-col md:flex-row items-center space-x-1">
            <span className="mr-2 inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-semibold text-white text-nowrap animate-pulse">
              2025 Goal
            </span>
            <p className="text-lg text-gray-400 md:text-xl">
              Seeking full-time opportunities as Software Development Engineer
            </p>
          </div>
        </motion.div>
      </div>
      {/* Portrait Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 1 }
        }
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex h-full max-h-screen w-full items-center justify-center overflow-hidden lg:w-1/2"
      >
        <img
          src={heroImage}
          alt="Portrait"
          className="h-full w-full object-cover"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 50%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 50%)",
          }}
        />
      </motion.div>
      {/* Button to scroll down */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 5 }}
        >
          <Link
            to="/#about-me"
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 animate-bounce text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
