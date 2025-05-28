import { useRef } from "react";
import { motion, useInView } from "motion/react";

import SkillsCard from "../SkillsCard";

const SkillsSection = () => {
  const cardRef = useRef(null);
  const skillsRef = useRef(null);
  const cardInView = useInView(cardRef);
  const skillsInView = useInView(skillsRef);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C#", "JavaScript", "TypeScript"],
    },
    {
      title: "Web Technologies & Frameworks",
      skills: [
        "React",
        "Angular",
        "Next.js",
        "Django",
        "Node",
        "Flask",
        "HTML/CSS",
        "REST APIs",
        "Redux",
        "Tailwind CSS",
      ],
    },
    {
      title: "Database & Cloud Technologies",
      skills: [
        "RDBMS",
        "MySQL",
        "Google Cloud Platform (GCP)",
        "AWS",
        "Firebase",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git",
        "Trello",
        "Postman",
        "Shell",
        "Unity",
        "Figma",
        "WordPress",
        "Docker",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto container px-4 md:px-8 lg:px-10 py-8 scroll-mt-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: cardInView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-white rounded-lg p-8 shadow-lg"
        ref={cardRef}
      >
        {/* Placeholder for any additional content or SkillsCard */}
        <SkillsCard />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-white rounded-lg p-8 shadow-lg"
        ref={skillsRef}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="mb-6"
          >
            <h3 className="text-xl font-bold mb-2">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm shadow-sm hover:bg-gray-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
