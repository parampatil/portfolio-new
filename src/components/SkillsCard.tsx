import { OrbitingCircles } from "@/components/ui/orbiting-circles";

import CplusLogo from "@/assets/images/Skills Icons/Cplus Logo.png";
import CsharpLogo from "@/assets/images/Skills Icons/Csharp Logo.png";
import JavaScriptLogo from "@/assets/images/Skills Icons/JavaScript Logo.png";
import TypeScriptLogo from "@/assets/images/Skills Icons/Typescript Logo.svg";
import PythonLogo from "@/assets/images/Skills Icons/Python Logo.png";

import ReactLogo from "@/assets/images/Skills Icons/React Logo.png";
import NextJSLogo from "@/assets/images/Skills Icons/NextJs.svg";
import GCPLogo from "@/assets/images/Skills Icons/GCP Logo.png";
import GitLogo from "@/assets/images/Skills Icons/Git Logo.png";
import SQLLogo from "@/assets/images/Skills Icons/SQL Logo.png";

const SkillsCard = () => {
  const skillsInner = [
    { name: "C++", icon: CplusLogo },
    { name: "C#", icon: CsharpLogo },
    { name: "JavaScript", icon: JavaScriptLogo },
    { name: "TypeScript", icon: TypeScriptLogo },
    { name: "Python", icon: PythonLogo },
  ];

  const skillsOuter = [
    { name: "React", icon: ReactLogo },
    { name: "Next.js", icon: NextJSLogo },
    { name: "Google Cloud", icon: GCPLogo },
    { name: "Git", icon: GitLogo },
    { name: "SQL", icon: SQLLogo },
  ];

  return (
    <div className="relative flex size-full min-h-[400px] flex-col items-center justify-center">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Skills
      </span>

      {/* Outer Orbit */}
      <OrbitingCircles iconSize={40} radius={180}>
        {skillsOuter.map((skill) => (
          <div key={skill.name} className="relative">
            <img src={skill.icon} alt={skill.name} />
            <p className="absolute left-1/2 -translate-x-1/2 text-center text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {skill.name}
            </p>
          </div>
        ))}
      </OrbitingCircles>
      {/* Inner Orbit */}
      <OrbitingCircles
        iconSize={40}
        radius={100}
        speed={1.5}
        delay={20}
        reverse
      >
        {skillsInner.map((skill) => (
          <div key={skill.name} className="relative">
            <img src={skill.icon} alt={skill.name} />
            <p className="absolute left-1/2 -translate-x-1/2 text-center text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {skill.name}
            </p>
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
};

export default SkillsCard;
