import { motion } from "motion/react";
import { PageTransitionProps } from "./PageTransitionTypes";

const PageTransitionLeft = ({ children, className }: PageTransitionProps) => (
  <motion.div
    initial={{ translateX: "100%" }}
    animate={{ translateX: "0%" }}
    exit={{ translateX: "-100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default PageTransitionLeft;