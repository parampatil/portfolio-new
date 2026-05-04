// ProjectsGrid.tsx
import { motion, AnimatePresence, useInView } from "motion/react";
import { useRef } from "react";
import ProjectCard from "@/components/ProjectsPageComponents/ProjectCard";
import { projectsData } from "@/components/ProjectsPageComponents/ProjectData";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative z-10 w-full px-4 py-16 md:px-8 container"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="mb-8 flex w-full items-center justify-between"
      >
        <div>
          <h2 className="text-4xl font-bold text-aurora-orange">Projects</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-300">Check out my latest work.</p>
        </div>
        <Link
          to="/projects"
          className="flex items-center gap-1.5 text-sm font-semibold text-aurora-orange transition-opacity hover:opacity-70"
        >
          View All
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </motion.div>
      <motion.div
        layout
        className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatePresence>
          {projectsData
            .filter((p) => p.isTopProject)
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .slice(0, 3)
            .map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
      <Link to="/projects" className="mt-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 font-medium text-white shadow-lg transition-shadow hover:shadow-xl dark:from-aurora-orange dark:to-aurora-red"
        >
          View All Projects
        </motion.div>
      </Link>
    </section>
  );
};

export default ProjectsSection;
