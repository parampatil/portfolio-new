// ProjectsGrid.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "./ProjectCard";
import { Project, ProjectCategory } from "./ProjectTypes";

const categories: ProjectCategory[] = ["Top", "Recent", "UI Components"];

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("Recent");

  const getFilteredProjects = () => {
    switch (selectedCategory) {
      case "Top":
        return projects.filter((p) => p.isTopProject);
      case "Recent":
        return [...projects]
          .filter((p) => p.category === "Recent")
          .sort((a, b) => b.date.getTime() - a.date.getTime());
      case "UI Components":
        return projects.filter((p) => p.category === "UI Components");
      default:
        return projects;
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="scroll-mt-16 px-4 py-20 md:px-8">
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            layout
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-500 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-aurora-orange via-aurora-red to-aurora-glow text-white shadow-lg shadow-aurora-orange/50"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsGrid;
