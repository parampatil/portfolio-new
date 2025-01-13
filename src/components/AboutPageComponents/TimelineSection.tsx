import { Timeline } from "@/components/ui/timeline";
import CareerItem from "@/components/AboutPageComponents/CareerItem";
import EducationItem from "@/components/AboutPageComponents/EducationItem";
import BornCard from "@/components/AboutPageComponents/BornCard";

// Icons
import IULogo from "@/assets/images/Education Icons/IU Logo.png";
import IUDiningLogo from "@/assets/images/Career Icons/IUDining Logo.jpg";
import SPPULogo from "@/assets/images/Education Icons/SPPU Logo.png";
import MaharashtraBoardLogo from "@/assets/images/Education Icons/MaharashtraBoard Logo.png";
import SSRVMLogo from "@/assets/images/Education Icons/SSRVM Logo.png";
import CoinageLogo from "@/assets/images/Career Icons/Coinage Logo.png";

interface TimelineEntry {
  title: string;
  category: "education" | "career" | "all"; // Define categories
  content: React.ReactNode;
}

const data: TimelineEntry[] = [
  {
    title: "2024 May",
    category: "education",
    content: (
      <EducationItem
        degree="Master's in Computer Science"
        institution="Indiana University - Bloomington"
        duration="Aug 2022 - May 2024"
        grade="3.7/4.0"
        courses={[
          "Applied Algorithm",
          "Computer Networks",
          "Elements of Artificial Intelligence",
          "Software Engineering",
          "Advanced Database Concepts",
          "Applied Machine Learning",
          "Applied Database Technologies",
          "Engineering Cloud Computing",
        ]}
        logoUrl={IULogo}
      />
    ),
  },
  {
    title: "2024 January",
    category: "career",
    content: (
      <CareerItem
        title="Software Engineer"
        company="Indiana University - Bloomington"
        duration="Jan 2024 - Present"
        description="Led a team to build a machine learning model testing website using Next.js, Flask, and Tailwind CSS, integrating RESTful APIs for seamless data flow. Developed image transformation software with Python and NumPy, efficiently processing 80,000 images using parallel processing."
        technologies={[
          "Next.js",
          "Flask",
          "PostgreSQL",
          "Vercel",
          "Tailwind CSS",
          "PyQt6",
          "Python",
          "NumPy",
        ]}
        logoUrl={IULogo}
      />
    ),
  },
  {
    title: "2022 August",
    category: "career",
    content: (
      <CareerItem
        title="Inventory Manager"
        company="IU Dining"
        duration="Aug 2022 - May 2024"
        description="As an Inventory Assistant at IU Dining, I was responsible for counting and reporting stock levels, optimizing the inventory counting process, and reorganizing storage for efficient retrieval. I implemented binning systems in the storage room and gathered feedback to continuously improve inventory management practices."
        technologies={[
          "Microsoft Excel",
          "Inventory Software",
          "Teamwork",
          "Communication",
          "Bin Systems",
        ]}
        logoUrl={IUDiningLogo}
      />
    ),
  },
  {
    title: "2022 May",
    category: "education",
    content: (
      <EducationItem
        degree="Bachelor's in Computer Engineering"
        institution="Savitribai Phule Pune University"
        duration="Aug 2018 - May 2022"
        grade="9.56/10"
        courses={[
          "Advanced Data Structures",
          "Database Management Systems",
          "Software Engineering Project Management",
          "Computer Networks",
          "Machine Learning",
        ]}
        logoUrl={SPPULogo}
      />
    ),
  },
  {
    title: "2022 February",
    category: "career",
    content: (
      <CareerItem
        title="Web Developer Intern"
        company=" Coinage Exim Pvt. Ltd."
        duration="Jul 2021 - Feb 2022"
        description="Developed and maintained web applications, improving user experience by 30%."
        technologies={["WordPress", "PHP", "CSS", "Trello", "Hostgator"]}
        logoUrl={CoinageLogo}
      />
    ),
  },
  {
    title: "2018 May",
    category: "education",
    content: (
      <EducationItem
        degree="Senior Secondary Education"
        institution="Laxmanrao Apte Junior College"
        duration="Aug 2018 - May 2022"
        courses={["Physics", "Chemistry", "Mathematics"]}
        logoUrl={MaharashtraBoardLogo}
      />
    ),
  },
  {
    title: "2016 May",
    category: "education",
    content: (
      <EducationItem
        degree="Secondary Education"
        institution="Sri Sri Ravi Shankar Vidya Mandir"
        duration="Aug 2016 - May 2018"
        courses={[
          "Science",
          "Mathematics",
          "Social Science",
          "English",
        ]}
        logoUrl={SSRVMLogo}
      />
    ),
  },
  {
    title: "2000 July",
    category: "all",
    content: (
      <BornCard
        birthDate={"05 July 2000"}
        dayOfWeek={"Tuesday"}
        funFacts={[
          "My name, Param, was inspired by the PARAM supercomputers, a major milestone in India's tech history.",
          "The Y2K bug created widespread panic as people feared computers would fail at the start of the new millennium.",
        ]}
      />
    ),
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="w-full">
      <Timeline
        title="The Journey So Far"
        description="Every journey has a story, and this is mine. Dive into the timeline below to see the key moments that have shaped my path and aspirations."
        data={data}
      />
    </section>
  );
};

export default TimelineSection;
