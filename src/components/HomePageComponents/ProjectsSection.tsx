// ProjectsGrid.tsx
import { motion, AnimatePresence } from 'motion/react';
import ProjectCard from '@/components/ProjectsPageComponents/ProjectCard';
import { projectsData } from '@/components/ProjectsPageComponents/ProjectData';
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 w-full bg-white dark:bg-gray-800">
      <AnimatedShinyText className="mb-8 text-center text-4xl font-bold">
        Recent Projects
        </AnimatedShinyText>
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
            {projectsData
            .filter(p => p.isTopProject)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 3)
            .map((project) => (
              <ProjectCard 
              key={project.id} 
              project={project}
              />
            ))}
        </AnimatePresence>
      </motion.div>
      <Link
        to="/projects"
        className="flex justify-center mt-8"

      >
        <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
          className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white"
        >
          View All Projects
        </motion.div>
      </Link>
    </section>
  );
};

export default ProjectsSection;