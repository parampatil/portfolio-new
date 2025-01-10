import { motion } from 'framer-motion';
import ShineBorder from "@/components/ui/shine-border";

const projects = [
  { title: 'Project One', description: 'Description for project one.' },
  { title: 'Project Two', description: 'Description for project two.' },
  { title: 'Project Three', description: 'Description for project three.' },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-16 px-4 w-full bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Top Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShineBorder
                className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 to-slate-950 md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                borderWidth={3}
                borderRadius={12}
              >
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  {project.title}
                </span>
                <span className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">
                  {project.description}
                </span>
              </ShineBorder>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/projects" className="text-blue-500 hover:underline">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;