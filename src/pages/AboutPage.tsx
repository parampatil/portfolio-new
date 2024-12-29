import { motion } from "motion/react";

const AboutPage = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the about page where you can learn more about me.
      </p>
    </motion.div>
  );
};

export default AboutPage;
