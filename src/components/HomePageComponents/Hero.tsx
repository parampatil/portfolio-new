import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex w-full items-center justify-center bg-gray-900 text-white"
    >
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
        {/* Name and Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-8xl font-berkshire"
            >
              Param
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="text-8xl font-berkshire"
            >
              Patil
            </motion.h1>
          </div>
          <p className="text-lg text-gray-400 md:text-xl">
            Software Engineer | Indiana University Bloomington | MSc in Computer Science
          </p>
        </motion.div>


        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [20, 0, 20], opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 text-gray-400"
        >
          <p>Scroll Down</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
