import SkillsCard from "@/components/SkillsCard";

const SkillsSection = () => {
  return (
    <section id="skills" className="group bg-white rounded container md:m-8 flex flex-col items-center justify-center p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <SkillsCard />
    </section>
  );
};

export default SkillsSection;
