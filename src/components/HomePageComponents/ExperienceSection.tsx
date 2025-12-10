import { motion } from "motion/react";
import {MagicCard} from "@/components/ui/magic-card";
import IULogo from "@/assets/images/Education Icons/IU Logo.png";
import World360Logo from "@/assets/images/Career Icons/360 Logo.ico";

const experience = [
  {
    title: "Software Developer",
    company: "360 World Inc, Fremont, CA",
    duration: "Feb 2025 - Present",
    logo: World360Logo,
    description:
      "Built secure dashboards and sites with Next.js, Go, and GCP, adding VPN, OAuth, and rapid, modern UI with Docker and Tailwind CSS.",
    technologies: [
      "Next.js",
      "Go",
      "gRPC",
      "GCP",
      "Docker",
      "Kubernetes",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Software Developer",
    company: "Indiana University",
    duration: "Jan 2024 - Present",
    logo: IULogo,
    description:
      "Led a team to build a machine learning model testing website and developed image transformation software processing 80,000+ images.",
    technologies: [
      "Next.js",
      "Flask",
      "PostgreSQL",
      "Tailwind CSS",
      "Python",
      "NumPy",
    ],
  },
];

const ExperienceSection = () => (
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
      <h3 className="mb-4 text-xl font-semibold text-pink-400">Experience</h3>
      <div className="flex flex-col gap-6">
        {experience.map((exp) => (
          <motion.div
            key={exp.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex items-start gap-4"
          >
            <img
              src={exp.logo}
              alt={exp.company}
              className="h-12 w-12 rounded-lg object-contain shadow-md"
            />
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-base text-neutral-900 dark:text-white">
                  {exp.title}
                </span>
                <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400 text-right">
                  {exp.duration}
                </span>
              </div>
              <div className="text-sm text-neutral-700 dark:text-neutral-300">
                {exp.company}
              </div>
              <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                {exp.description}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-pink-100 text-pink-700 px-2 py-1 text-xs dark:bg-pink-900/30 dark:text-pink-300"
                  >
                    {tech}
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

export default ExperienceSection;
