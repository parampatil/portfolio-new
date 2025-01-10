import { motion } from "motion/react";
import { PageTransitionProps } from "./PageTransitionTypes";

const PageTransition = ({ children, className }: PageTransitionProps) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95, // Slightly smaller size
    },
    in: {
      opacity: 1,
      scale: 1, // Back to normal size
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      scale: 1.05, // Slightly larger size on exit
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;