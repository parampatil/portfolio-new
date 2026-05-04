import MediaServerImg from "@/assets/Images/Blogs/Media Server/media-server.png";
import LanImg from "@/assets/Images/Blogs/Lan Blog/Lan-blog.jpg";
import NASImg from "@/assets/Images/Blogs/NAS Blog/NAS.jpg";
import RAIDImg from "@/assets/Images/Blogs/Raid Blog/RAID.jpg";

export interface BlogMeta {
  title: string;
  desc: string;
  img: string;
  slug: string;
  summary: string;
  badges: string[];
  date: string;
  readTime: string;
}

export const BLOGS: BlogMeta[] = [
  {
    title: "Ethernet Cables (LAN)",
    desc: "Things you didn't know about ethernet cable",
    img: LanImg,
    slug: "lan",
    summary:
      "A practical guide to Ethernet cabling, categories, and useful DIY tricks for home networks.",
    badges: ["Networking", "Cabling", "DIY"],
    date: "2021",
    readTime: "6 min read",
  },
  {
    title: "Media Server",
    desc: "Everyone has a media server — make it useful",
    img: MediaServerImg,
    slug: "media-server",
    summary:
      "Set up and optimize your home media server: DLNA setup, device access, and tips to get started.",
    badges: ["Plex", "DLNA", "Streaming"],
    date: "2021",
    readTime: "5 min read",
  },
  {
    title: "NAS",
    desc: "Network Attached Storage — your private cloud",
    img: NASImg,
    slug: "nas",
    summary:
      "NAS basics: what it is, how it works, and 5 practical use cases for reliable home storage.",
    badges: ["Storage", "Backups", "NAS"],
    date: "2021",
    readTime: "5 min read",
  },
  {
    title: "RAID",
    desc: "RAID levels explained in simple terms",
    img: RAIDImg,
    slug: "raid",
    summary:
      "RAID levels 0, 1, 5, 6, and 10 explained — trade-offs and when to choose each.",
    badges: ["RAID", "Storage", "Hardware"],
    date: "2021",
    readTime: "7 min read",
  },
];
