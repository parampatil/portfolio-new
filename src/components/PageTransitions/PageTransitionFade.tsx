import { motion } from "motion/react";
import { PageTransitionProps } from "./PageTransitionTypes";


const PageTransitionFade = ({ children, className }: PageTransitionProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default PageTransitionFade;
