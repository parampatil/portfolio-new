import PageTransition from "@/components/PageTransitions/PageTransition";
import Hero from "@/components/HomePageComponents/Hero";
import ProjectsSection from "@/components/HomePageComponents/ProjectsSection";
import AboutSection from "@/components/HomePageComponents/AboutSection";
import BlogsSection from "@/components/HomePageComponents/BlogsSection";

const HomePage = () => {
  return (
    <PageTransition className="flex min-h-screen w-full flex-col items-center justify-center scroll-smooth">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <BlogsSection />
      {/* <ContactSection /> */}
    </PageTransition>
  );
};

export default HomePage;
