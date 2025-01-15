// pages/ProjectsPage.tsx
import HeroSection from '@/components/ProjectsPageComponents/HeroSection';
import ProjectsGrid  from '@/components/ProjectsPageComponents/ProjectsGrid';
import { projectsData } from '@/components/ProjectsPageComponents/ProjectData';


const ProjectsPage = () => {
 

  return (
    <div className="min-h-screen dark:bg-neutral-950">
    <HeroSection />
    <ProjectsGrid projects={projectsData} />
  </div>
  );
};

export default ProjectsPage;
