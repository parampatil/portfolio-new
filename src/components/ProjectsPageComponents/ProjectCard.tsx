// components/ProjectCard.tsx
import { motion, AnimatePresence, useInView } from "motion/react";
import { Project } from "./ProjectTypes";
import { useState, useRef, useId, useEffect } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const closedCardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(closedCardRef);

  useOutsideClick(cardRef, () => setIsExpanded(false));

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    const onPopState = (event: PopStateEvent) => {
      if (isExpanded) {
        event.preventDefault();
        setIsExpanded(false);
      }
    };

    window.addEventListener("popstate", onPopState);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isExpanded]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        layoutId={`card-${project.id}-${id}`}
        className="group relative overflow-hidden rounded-2xl bg-zinc-900 backdrop-blur-sm dark:bg-zinc-800"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        ref={closedCardRef}
      >
        {/* Project Image */}
        <motion.div
          layoutId={`image-container-${project.id}-${id}`}
          className="relative aspect-[16/9] cursor-pointer overflow-hidden"
          onClick={() => setIsExpanded(true)}
        >
          <motion.img
            layoutId={`image-${project.id}-${id}`}
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

          {/* Tech Stack Preview */}
          <motion.div
            layoutId={`tech-preview-${project.id}-${id}`}
            className="absolute right-4 top-4 flex flex-wrap justify-end gap-2"
          >
            {project.technologies.slice(0, 3).map((tech) => (
              <motion.span
                whileHover={{ scale: 1.1 }}
                key={tech}
                className="rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm"
              >
                +{project.technologies.length - 3}
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          layoutId={`content-${project.id}-${id}`}
          className="space-y-4 p-6"
        >
          <motion.div>
            <motion.h3
              layoutId={`title-${project.id}-${id}`}
              className="mb-2 text-xl font-bold text-white"
            >
              {project.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${project.id}-${id}`}
              className="line-clamp-2 text-sm text-zinc-400"
            >
              {project.description}
            </motion.p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
                whileHover={{ x: 4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <span>View Demo</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-300"
                whileHover={{ x: 4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <span>Source</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(45deg, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.2) 100%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/20"
              onClick={() => setIsExpanded(false)}
            />
            <div className="fixed inset-0 z-[100] grid place-items-center">
              <motion.div
                layoutId={`card-${project.id}-${id}`}
                ref={cardRef}
                className="w-full max-w-[500px] overflow-hidden rounded-2xl bg-zinc-800"
              >
                <motion.div layoutId={`image-container-${project.id}-${id}`}>
                  <motion.img
                    layoutId={`image-${project.id}-${id}`}
                    src={project.image}
                    alt={project.title}
                    className="h-80 w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  layoutId={`content-${project.id}-${id}`}
                  className="p-8"
                >
                  <motion.h3
                    layoutId={`title-${project.id}-${id}`}
                    className="mb-4 text-2xl font-bold text-white"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${project.id}-${id}`}
                    className="mb-6 text-gray-300"
                  >
                    {project.longDescription || project.description}
                  </motion.p>

                  <motion.div layout className="space-y-6">
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-white">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-1 gap-4">
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>View Live Demo</span>
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-700 py-3 text-center font-medium text-white transition-colors hover:bg-zinc-600"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>View Source</span>
                            <svg
                              className="h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              />
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
