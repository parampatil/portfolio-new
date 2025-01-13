import PageTransition from "@/components/PageTransitions/PageTransition";
import HeroSection from "@/components/AboutPageComponents/HeroSection"
import TimelineSection from "@/components/AboutPageComponents/TimelineSection"
import SkillsSection from "@/components/AboutPageComponents/SkillsSection"
import Achievements from "@/components/AboutPageComponents/Achievements";
import Certificates from "@/components/AboutPageComponents/Certificates";

const AboutPage = () => {
  return (
    <PageTransition className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 w-full overflow-x-hidden scroll-smooth">
      <HeroSection />
      <TimelineSection />
      <SkillsSection />
      <Certificates />
      <Achievements />
    </PageTransition>
  )
}

export default AboutPage