import { Project } from "@/components/ProjectsPageComponents/ProjectTypes";

import Dofort from "@/assets/images/Projects/Dofort.png";
import RRO from "@/assets/images/Projects/RRO.jpg";
import MapReduce from "@/assets/images/Projects/Map Reduce.jpeg";
import FUSE from "@/assets/images/Projects/FUSE.png";
import SEProject from "@/assets/images/Projects/SEProject.jpeg";
import COVID from "@/assets/images/Projects/COVID.png";
import ADT from "@/assets/images/Projects/ADT.jpeg";
import World360 from "@/assets/images/Projects/360 World.png";
import AdminDashboard from "@/assets/images/Projects/Admin Dashboard.png";

import Clock from "@/assets/images/Projects/UI Components/Clock.jpeg";
import Multiplication from "@/assets/images/Projects/UI Components/Multiplication.jpeg";
import Buttons from "@/assets/images/Projects/UI Components/Buttons.jpeg";
import CharacterCounter from "@/assets/images/Projects/UI Components/CharacterCounter.jpeg";
import Navbar from "@/assets/images/Projects/UI Components/Navbar.jpeg";
import RandomColourGenerator from "@/assets/images/Projects/UI Components/RandomColourGenerator.jpeg";
import RippleEffect from "@/assets/images/Projects/UI Components/RippleEffect.jpeg";
import PopupVideo from "@/assets/images/Projects/UI Components/PopupVideo.jpeg";
import BlurredBackgroundPopup from "@/assets/images/Projects/UI Components/BlurredBackgroundPopup.jpeg";
import BackgroundImageScroll from "@/assets/images/Projects/UI Components/BackgroundImageScroll.jpeg";
import DrumKit from "@/assets/images/Projects/UI Components/DrumKit.jpeg";
import RandomPhotos from "@/assets/images/Projects/UI Components/RandomPhotos.jpeg";
import ImageSlider from "@/assets/images/Projects/UI Components/ImageSlider.jpeg";
import ToggleSwitch from "@/assets/images/Projects/UI Components/ToggleSwitch.jpeg";
import TypingEffects from "@/assets/images/Projects/UI Components/TypingEffects.jpeg";
import TabsSection from "@/assets/images/Projects/UI Components/TabsSection.jpeg";


export const projectsData: Project[] = [
  {
    id: "1",
    title: "DoFort Website",
    description: "A Business Website for DoFort Company...",
    longDescription:
      "This is a business website for DoFort company. It;s sole purpose is to showcase the company's services and portfolio...",
    technologies: ["Next.js", "Tailwind CSS", "ShadCn", "Vercel"],
    image: Dofort,
    github: "",
    link: "https://www.dofortindia.com/",
    category: "Recent",
    date: new Date("2025-01-18"),
    isTopProject: true,
  },
  {
    id: "2",
    title: "Railroads Online!",
    description: "A tool to predict a successful train haulage...",
    longDescription:
      "A tool to predict a successful train haulage based on the train's weight, speed, and the track's condition...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: RRO,
    github: "https://github.com/parampatil/Railroads-Online",
    link: "https://parampatil.github.io/Railroads-Online/",
    category: "Recent",
    date: new Date("2023-03-15"),
    isTopProject: true,
  },
  {
    id: "3",
    title: "Map Reduce with Cloud Functions",
    description: "A simple implementation of the MapReduce concept...",
    longDescription:
      "A Demo project to showcase the MapReduce concept using Google Clous Storage and Google Cloud Functions along with React...",
    technologies: [
      "Google Cloud Storage",
      "Google Cloud Functions",
      "React",
      "Bootstrap",
      "Python",
    ],
    image: MapReduce,
    github: "https://github.com/parampatil/ECC4",
    link: "https://parampatil.github.io/ECC4/",
    category: "Recent",
    date: new Date("2023-12-15"),
    isTopProject: true,
  },
  {
    id: "4",
    title: " File Systems Using Google Cloud Storage",
    description: "A simple implementation of a Cloud Storage Client...",
    longDescription:
      "A simple implementation of a Cloud Storage Client using Google Cloud Storage and FUSE library...",
    technologies: ["Google Cloud Storage", "FUSE", "Python", "Linux"],
    image: FUSE,
    link: "https://github.com/parampatil/FUSE/blob/main/FUSE%20Report.pdf",
    category: "Recent",
    date: new Date("2023-11-15"),
    isTopProject: true,
  },
  {
    id: "5",
    title: "Patient and Insurance Management System",
    description: "A full-stack application for patient-doctor interactions ...",
    longDescription:
      "A full-stack application for patient-doctor interactions and insurance management...",
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "AWS",
      "Firebase",
      "Redux",
      "Bootstrap",
    ],
    image: SEProject,
    github: "https://github.iu.edu/IU-Spring2023/SE-Group17",
    link: "https://pages.github.iu.edu/IU-Spring2023/healthsure-frontend",
    category: "Recent",
    date: new Date("2023-06-15"),
    isTopProject: true,
  },
  {
    id: "6",
    title: "Automated COVID-19 Vaccine Slot Booking Software",
    description:
      "A software to automate the COVID-19 vaccine slot booking process...",
    longDescription:
      "A software to automate the COVID-19 vaccine slot booking process using Python GUI...",
    technologies: ["Python", "Tkinter", "Selenium", "ChromeDriver"],
    image: COVID,
    github: "https://github.com/parampatil/CoWIN-Vaccine-Slot-Booking",
    link: "",
    category: "Recent",
    date: new Date("2021-06-15"),
    isTopProject: true,
  },
  {
    id: "7",
    title: "Housing Data Insights",
    description: "A project to analyze and visualize housing data...",
    longDescription:
      "A project to analyze and visualize housing data using Python libraries...",
    technologies: ["React", "MySQL", "Flask", "Python", "Pandas"],
    image: ADT,
    github: "https://github.iu.edu/Applied-Database-Technologies/frontend",
    link: "https://pages.github.iu.edu/Applied-Database-Technologies/frontend/",
    category: "Recent",
    date: new Date("2023-06-15"),
    isTopProject: true,
  },
  {
    id: "8",
    title: "Digital Clock",
    description: "A simple digital clock using HTML, CSS, and JavaScript...",
    longDescription:
      "A simple digital clock using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: Clock,
    github: "https://github.com/parampatil/Digital-Clock",
    link: "https://parampatil.github.io/Digital-Clock/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "9",
    title: "Multiplication App",
    description:
      "A simple multiplication app using HTML, CSS, and JavaScript...",
    longDescription:
      "A simple multiplication app using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: Multiplication,
    github: "https://github.com/parampatil/multiplication-app",
    link: "https://parampatil.github.io/multiplication-app/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "10",
    title: "Buttons",
    description: "A collection of buttons using HTML and CSS...",
    longDescription: "A collection of buttons using HTML and CSS...",
    technologies: ["HTML", "CSS"],
    image: Buttons,
    github: "https://github.com/parampatil/buttons",
    link: "https://parampatil.github.io/buttons/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "11",
    title: "Character Counter",
    description:
      "A simple character counter using HTML, CSS, and JavaScript...",
    longDescription:
      "A simple character counter using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: CharacterCounter,
    github: "https://github.com/parampatil/character-counter",
    link: "https://parampatil.github.io/character-counter/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "12",
    title: "Navbar",
    description: "A simple navbar using HTML and CSS...",
    longDescription: "A simple navbar using HTML and CSS...",
    technologies: ["HTML", "CSS"],
    image: Navbar,
    github: "https://github.com/parampatil/navbar",
    link: "https://parampatil.github.io/navbar/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "13",
    title: "Random Colour Generator",
    description: "A random colour generator using HTML, CSS, and JavaScript...",
    longDescription:
      "A random colour generator using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: RandomColourGenerator,
    github: "https://github.com/parampatil/random-colour-generator",
    link: "https://parampatil.github.io/random-colour-generator/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "14",
    title: "Ripple Effect",
    description: "A ripple effect using HTML and CSS...",
    longDescription: "A ripple effect using HTML and CSS...",
    technologies: ["HTML", "CSS"],
    image: RippleEffect,
    github: "https://github.com/parampatil/ripple-effect",
    link: "https://parampatil.github.io/ripple-effect/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "15",
    title: "Popup Video",
    description: "A popup video using HTML, CSS, and JavaScript...",
    longDescription: "A popup video using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: PopupVideo,
    github: "https://github.com/parampatil/ripple-effect",
    link: "https://parampatil.github.io/ripple-effect/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "16",
    title: "Blurred Background Popup",
    description: "A blurred background popup using HTML, CSS, and JavaScript...",
    longDescription: "A blurred background popup using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: BlurredBackgroundPopup,
    github: "https://github.com/parampatil/ripple-effect",
    link: "https://parampatil.github.io/ripple-effect/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "17",
    title: "Background Image Scroll",
    description: "A background image scroll using HTML and CSS...",
    longDescription: "A background image scroll using HTML and CSS...",
    technologies: ["HTML", "CSS"],
    image: BackgroundImageScroll,
    github: "https://github.com/parampatil/ripple-effect",
    link: "https://parampatil.github.io/background-image-scroll/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "18",
    title: "Drum Kit",
    description: "A drum kit using HTML, CSS, and JavaScript...",
    longDescription: "A drum kit using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: DrumKit,
    github: "https://github.com/parampatil/ripple-effect",
    link: "https://parampatil.github.io/drum-kit/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "19",
    title: "Random Photos",
    description: "A random photos using HTML, CSS, and JavaScript...",
    longDescription: "A random photos using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: RandomPhotos,
    github: "https://github.com/parampatil/ripple-effect",
    link: "https://parampatil.github.io/random-photos/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "20",
    title: "Image Slider",
    description: "An image slider using HTML, CSS, and JavaScript...",
    longDescription: "An image slider using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: ImageSlider,
    github: "https://github.com/parampatil/ripple-effect",
    link: "https://parampatil.github.io/image-slider/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "21",
    title: "Toggle Switch",
    description: "A toggle switch using HTML and CSS...",
    longDescription: "A toggle switch using HTML and CSS...",
    technologies: ["HTML", "CSS"],
    image: ToggleSwitch,
    github: "https://github.com/parampatil/ripple-effect",
    link: "https://parampatil.github.io/toggle-switch/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "22",
    title: "Typing Effects",
    description: "A typing effects using HTML, CSS, and JavaScript...",
    longDescription: "A typing effects using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: TypingEffects,
    github: "https://github.com/parampatil/ripple-effect",
    link: "https://parampatil.github.io/typing-effects/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "23",
    title: "Tabs Section",
    description: "A tabs section using HTML, CSS, and JavaScript...",
    longDescription: "A tabs section using HTML, CSS, and JavaScript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: TabsSection,
    github: "https://github.com/parampatil/ripple-effect",
    link: "https://parampatil.github.io/tabs-section/",
    category: "UI Components",
    date: new Date("2020-06-15"),
    isTopProject: false,
  },
  {
    id: "24",
    title: "360 World Business Website",
    description:
      "Modern business website for 360 World Inc, built for performance, rapid iteration, and seamless user experience.",
    longDescription:
      "Designed and developed the official business website for 360 World Inc using Next.js and Tailwind CSS. Delivered initial prototypes in just a few days and iterated rapidly to launch a performant, scalable, and visually engaging site. Integrated modern UI/UX, responsive layouts, and robust deployment on Google Cloud Platform with Docker and Kubernetes.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Google Cloud Platform",
      "Docker",
      "Kubernetes",
      "shadcn/ui",
      "Framer Motion",
    ],
    image: World360,
    link: "https://www.360world.com/",
    category: "Recent",
    date: new Date("2025-03-01"),
    isTopProject: true,
  },
  {
    id: "25",
    title: "360 World Admin Dashboard",
    description:
      "Secure admin dashboard for 360 World Inc, enabling teams to monitor stats, configure products, and manage features.",
    longDescription:
      "Built a secure internal admin dashboard for 360 World Inc, empowering teams to monitor sales and usage, configure products, control features, and support customers. Implemented VPN, Google OAuth, and role-based access. Led full-stack development and deployment using Next.js, Go, and gRPC on GCP with Docker and Kubernetes. Delivered modern, configurable solutions with rapid prototyping and best-in-class UI using Tailwind CSS and Framer Motion.",
    technologies: [
      "Next.js",
      "Go",
      "gRPC",
      "Google Cloud Platform",
      "Docker",
      "Kubernetes",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Google OAuth",
      "VPN",
    ],
    image: AdminDashboard,
    link: "", // Add demo link if available
    category: "Recent",
    date: new Date("2025-04-01"),
    isTopProject: true,
  },
];
