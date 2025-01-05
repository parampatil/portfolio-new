import { motion } from "motion/react";
import { PageTransitionProps } from "./PageTransitionTypes";

const pageVariants = {
    initial: {
        opacity: 0, // Start fully transparent
        scale: 0.9, // Start slightly scaled down
    },
    in: {
        opacity: 1, // Fade in to fully visible
        scale: 1, // Scale to normal size
    },
    out: {
        opacity: 0, // Fade out to fully transparent
        scale: 1.1, // Scale up slightly
    },
};

const pageTransition = {
  duration: 0.3, // Slightly faster transition
  ease: "easeInOut", // Smooth easing
};

const PageTransition = ({
  children,
  className,
}: React.PropsWithChildren<PageTransitionProps>) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className={className}
  >
    {children}
  </motion.div>
);

export default PageTransition;