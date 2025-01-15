// ProjectsGrid.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProjectCard from './ProjectCard';
import { Project, ProjectCategory } from './ProjectTypes';

const categories: ProjectCategory[] = ['Top', 'Recent', 'UI Components'];

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('Recent');

  const getFilteredProjects = () => {
    switch (selectedCategory) {
      case 'Top':
        return projects.filter(p => p.isTopProject);
      case 'Recent':
        return [...projects].sort((a, b) => b.date.getTime() - a.date.getTime());
      case 'UI Components':
        return projects.filter(p => p.category === 'UI Components');
      default:
        return projects;
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="project-cards" className="py-20 px-4 md:px-8">
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all
              ${selectedCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProjectsGrid;