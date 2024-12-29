import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="w-full flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">Showcasing my work, skills, and hobbies.</p>
      </div>
    </motion.section>
  );
};

export default Hero;
