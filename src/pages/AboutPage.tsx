import PageTransition from "@/components/PageTransitions/PageTransition";
import HeroSection from "@/components/AboutPageComponents/HeroSection"
import TimelineSection from "@/components/AboutPageComponents/TimelineSection"
import SkillsSection from "@/components/AboutPageComponents/SkillsSection"

const AboutPage = () => {
  return (
    <PageTransition className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-900">
      <HeroSection />
      <TimelineSection />
      <SkillsSection />
    </PageTransition>
  )
}

export default AboutPage