import React from "react";

interface ExperienceItemProps {
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  jobTitle,
  company,
  duration,
  description,
  technologies,
}) => {
  return (
    <div className="experience-item bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-md border dark:border-neutral-800">
      <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">
        {jobTitle}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
        {company} | {duration}
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">{description}</p>
      <div>
        <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
          Technologies:
        </h4>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-800 rounded-md"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
