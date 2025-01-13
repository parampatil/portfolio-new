import { HeroParallax } from "@/components/ui/hero-parallax"
import CSSCoursera from "@/assets/images/Certificates/CSS Coursera.jpg";
import HTMLCoursera from "@/assets/images/Certificates/HTML Coursera.jpg";
import JSCoursera from "@/assets/images/Certificates/JavaScript Coursera.jpg";
import AIClassroom from "@/assets/images/Certificates/Microsoft AI Classroom.jpg";
import Guvi from "@/assets/images/Certificates/Guvi.png";
import Partymap from "@/assets/images/Certificates/PartyMap.jpg";

interface Certificate {
    issuer: string;
    title: string;
    thumbnail?: string;
    link?: string;
  }
  
const certificates: Certificate[] = [
    { issuer: "Coursera", title: "HTML 5 Introduction", thumbnail: HTMLCoursera },
    { issuer: "Coursera", title: "CSS3 Introduction", thumbnail: CSSCoursera },
    { issuer: "Coursera", title: "Interactivity with JavaScript", thumbnail: JSCoursera },
    { issuer: "Microsoft", title: "AI Classroom Series", thumbnail: AIClassroom },
    { issuer: "Guvi", title: "Build a Face Recognition Application using Python", thumbnail: Guvi },
    { issuer: "PartyMap Academy", title: "Electronic Music Production", thumbnail: Partymap },
  ];
const Certificates = () => {
  return (
    <section id="certificates" className="bg-white dark:bg-neutral-950 w-full">
        <HeroParallax
            certificates={certificates}
        />
    </section>

  )
}

export default Certificates