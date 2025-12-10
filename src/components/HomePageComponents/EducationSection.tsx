import { motion } from "motion/react";
import { MagicCard } from "@/components/ui/magic-card";
import IULogo from "@/assets/images/Education Icons/IU Logo.png";
import SPPULogo from "@/assets/images/Education Icons/SPPU Logo.png";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Indiana University Bloomington",
    duration: "Aug 2022 - May 2024",
    grade: "GPA: 3.7/4.0",
    logo: IULogo,
    courses: [
      "Applied Algorithm",
      "Software Engineering",
    //   "Advanced Database Concepts",
      "Applied Machine Learning",
      "Cloud Computing",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    duration: "Aug 2018 - May 2022",
    grade: "GPA: 9.56/10",
    logo: SPPULogo,
    courses: [
      "Advanced Data Structures",
      "Software Engineering",
      "Machine Learning",
      "Computer Networks",
    ],
  },
];

const EducationSection = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
      },
    }}
    className="col-span-6 md:col-span-3 lg:col-span-2 h-full"
  >
    <MagicCard className="p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <h3 className="mb-4 text-xl font-semibold text-blue-400">Education</h3>
      <div className="flex flex-col gap-6">
        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex items-start gap-4"
          >
            <img
              src={edu.logo}
              alt={edu.institution}
              className="h-12 w-12 rounded-lg object-contain shadow-md"
            />
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-base text-neutral-900 dark:text-white">
                  {edu.degree}
                </span>
                <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400 text-right">
                  {edu.duration}
                </span>
              </div>
              <div className="text-sm text-neutral-700 dark:text-neutral-300">
                {edu.institution}
              </div>
              <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                {edu.grade}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {edu.courses.map((course) => (
                  <span
                    key={course}
                    className="rounded-full bg-blue-100 text-blue-700 px-2 py-1 text-xs dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </MagicCard>
  </motion.div>
);

export default EducationSection;
