import PageTransition from "@/components/PageTransitions/PageTransition";
import Hero from "@/components/HomePageComponents/Hero";
import ProjectsSection from "@/components/HomePageComponents/ProjectsSection";
import AboutSection from "@/components/HomePageComponents/AboutSection";
import ContactSection from "@/components/HomePageComponents/ContactSection";

const HomePage = () => {
  return (
    <PageTransition className="flex min-h-screen w-full flex-col items-center justify-center scroll-smooth bg-gray-100">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </PageTransition>
  );
};

export default HomePage;
