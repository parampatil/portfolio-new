import { motion } from "motion/react";
import Hero from "@/components/HomePageComponents/Hero";
import ProjectsSection from "@/components/HomePageComponents/ProjectsSection";
import AboutSection from "@/components/HomePageComponents/AboutSection";
import ContactSection from "@/components/HomePageComponents/ContactSection";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100"
    >
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </motion.div>
  );
};

export default HomePage;
