import PageTransition from "@/components/PageTransitions/PageTransition";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BLOGS } from "@/data/blogs";

// ── LAN images ────────────────────────────────────────────
import LanHeroImg from "@/assets/Images/Blogs/Lan Blog/Lan Blog - Header.png";
import LanImg1 from "@/assets/Images/Blogs/Lan Blog/Lan Blog - 1.png";
import LanImg2 from "@/assets/Images/Blogs/Lan Blog/Lan Blog - 2.png";
import LanImg3 from "@/assets/Images/Blogs/Lan Blog/Lan Blog - 3.jpg";
import LanImg4 from "@/assets/Images/Blogs/Lan Blog/Lan Blog - 4.png";
import LanImg5 from "@/assets/Images/Blogs/Lan Blog/Lan Blog - 5.jpg";
import LanImg6 from "@/assets/Images/Blogs/Lan Blog/Lan Blog - 6.jpg";
import LanImg7 from "@/assets/Images/Blogs/Lan Blog/Lan Blog - 7.jpg";

// ── Media Server images ────────────────────────────────────
import MediaHeroImg from "@/assets/Images/Blogs/Media Server/media-server.png";
import MediaImg1 from "@/assets/Images/Blogs/Media Server/media-server 1.png";
import MediaImg4 from "@/assets/Images/Blogs/Media Server/media-server 4.jpg";
import MediaImg5 from "@/assets/Images/Blogs/Media Server/media-server 5.png";
import MediaImg7 from "@/assets/Images/Blogs/Media Server/media-server 7.jpg";

// ── NAS images ────────────────────────────────────────────
import NASHeroImg from "@/assets/Images/Blogs/NAS Blog/NAS blog 1.png";
import NASImg2 from "@/assets/Images/Blogs/NAS Blog/NAS blog 2.jpg";
import NASImg3 from "@/assets/Images/Blogs/NAS Blog/NAS blog 3.jpg";
import NASImg4 from "@/assets/Images/Blogs/NAS Blog/NAS blog 4.jpg";
import NASImg5 from "@/assets/Images/Blogs/NAS Blog/NAS blog 5.png";

// ── RAID images ───────────────────────────────────────────
import RAIDHeroImg from "@/assets/Images/Blogs/Raid Blog/RAID.jpg";
import RAIDImg1 from "@/assets/Images/Blogs/Raid Blog/RAID blog 1.png";
import RAIDImg2 from "@/assets/Images/Blogs/Raid Blog/RAID blog 2.png";
import RAIDImg3 from "@/assets/Images/Blogs/Raid Blog/RAID blog 3.png";
import RAIDImg4 from "@/assets/Images/Blogs/Raid Blog/RAID blog 4.png";
import RAIDImg5 from "@/assets/Images/Blogs/Raid Blog/RAID blog 5.png";
import RAIDImg6 from "@/assets/Images/Blogs/Raid Blog/RAID blog 6.png";

// ── Types ─────────────────────────────────────────────────
type InfoBox = { label: string; value: string };
type Section = { h: string; p: string; img?: string; infoBox?: InfoBox[] };
type BlogContent = {
  title: string;
  subtitle: string;
  hero: string;
  intro: string;
  badges: string[];
  date: string;
  readTime: string;
  sections: Section[];
};

// ── Blog content data ─────────────────────────────────────
const BLOG_CONTENT: Record<string, BlogContent> = {
  lan: {
    title: "Ethernet Cables",
    subtitle: "Things You Didn't Know About Ethernet Cable",
    hero: LanHeroImg,
    intro:
      "You must have seen an Ethernet cable — the most common type of network cable used on a wired network whether at home or in any business establishment. This cable connects wired devices together to the local network for file sharing and Internet access.",
    badges: ["Networking", "Cabling", "DIY"],
    date: "2021",
    readTime: "6 min read",
    sections: [
      {
        h: "Introduction",
        p: "Nowadays we generally use WiFi at home, but Ethernet cables still exist in many houses to provide users with higher-speed, more reliable internet. Understanding how they work opens the door to clever DIY setups you might not have considered.",
      },
      {
        h: "Structure of an Ethernet Cable",
        p: "An Ethernet cable has 8 wires. Out of which only 4 wires are used for a normal connection. The other 4 wires are used if you have a gigabit network (1000 Mb/s). The wire is then connected to RJ45 jacks on both ends. As long as the color arrangement on one end matches the other end, the cable will work.",
        img: LanImg1,
      },
      {
        h: "Types of Ethernet Cable",
        p: "A variety of different cables are available for Ethernet. These network cables are described by their different categories — Cat 5, Cat 6, Cat 6a, etc. These terms refer to how insulated the wires are from interference and how fast they can transmit data.\n\nRemember: when connecting two devices of different types together, use a straight-through cable. When connecting two devices of the same type together, use a crossover cable.",
      },
      {
        h: "Interesting DIYs",
        p: "Now that you know what an Ethernet cable is, here are some clever ways to implement and improvise your Ethernet cable setup at home.",
        img: LanImg5,
      },
      {
        h: "1. Straight Through or Crossover Cable",
        p: "If you want a cable to connect your computer and printer together, you need a crossover cable. If you have several computers and one printer, you need to buy a switch. All computers connect to the switch with a straight-through cable, and your printer also connects to the switch with a straight-through cable.",
        img: LanImg2,
      },
      {
        h: "2. Two Ethernet Connections Through One Cable",
        p: "In the structure of the Ethernet cable, only 4 wires are required for a normal connection (not for gigabit, which uses all 8). The remaining 4 wires can be used for another Ethernet connection — rather than running a second cable through your walls.",
        img: LanImg3,
      },
      {
        h: "3. Power Over Ethernet (POE)",
        p: "POE refers to Power Over Ethernet. You've no doubt seen messy cables sitting behind your WiFi router. With POE, you can deliver power through the same Ethernet cable that carries data, eliminating the need for a separate power adapter. This is widely used for IP cameras, wireless access points, and VoIP phones.",
        img: LanImg4,
      },
      {
        h: "4. USB Extension Through Walls",
        p: "A USB cable needs exactly 4 wires to transfer data. Since you have 4 unused wires in your Ethernet cable, you can repurpose them as a long USB extension cable running through walls — perfect for connecting a media player to your couch. As long as you connect the wires in the same color arrangement on both ends, your USB cable will work.",
        img: LanImg6,
      },
      {
        h: "5. Ethernet Through Telephone Cable",
        p: "Many houses have a telephone outlet in each room with cables running through the walls to a central junction box. Since we no longer use landlines, we can repurpose these cables. Simply connect RJ45 sockets instead of RJ11 sockets at the wall outlets and set up a router or Ethernet switch at the junction box.\n\nVice versa is also possible — telephone cable can be run through an Ethernet cable using its 4 unused wires.",
        img: LanImg7,
      },
    ],
  },

  "media-server": {
    title: "Media Server",
    subtitle: "Everyone Has a Media Server — Make It Useful",
    hero: MediaHeroImg,
    intro:
      "Streaming content from the Internet is fantastic, but that doesn't mean there aren't still major advantages to keeping your own copies of your media. A home media server gives you full control, speed, and content security.",
    badges: ["Plex", "DLNA", "Streaming"],
    date: "2021",
    readTime: "5 min read",
    sections: [
      {
        h: "What Is a Media Server?",
        p: "A media server is a device that stores and shares media. It is responsible for the hardware as well as the software aspects of successfully storing, retrieving, and sharing media files and data. A server, PC, NAS, or any other device with storage capability can be used as a media server.",
      },
      {
        h: "Why Use a Media Server?",
        p: "Having a server that you own as a central hub for your media prevents you from being at the mercy of a slow internet connection — and avoids streaming services removing content without warning.\n\nSince a local network can frequently move data at speeds much faster than your average internet connection, you won't have to compromise on visual quality or worry about buffering, even with 4K videos. This setup also helps you avoid storing individual copies of everything on each device.",
        img: MediaImg4,
      },
      {
        h: "How to Set Up a Home Media Server",
        p: "You don't need a full-blown PC to house your data. A more elegant solution is a home NAS (Network Attached Storage) device — a bare-bones PC-like device dedicated solely to delivering files as fast as possible. A typical NAS includes its own lightweight OS and easily accessible drive bays. Some compact desktop units support nearly a hundred terabytes of raw storage.\n\nAlternatively, software like Plex or Jellyfin turns any Windows, Mac, or Linux PC into a media server.",
      },
      {
        h: "Step-by-Step: Windows Media Streaming",
        p: "If your PC is running Windows, you're already set. Follow these steps to enable media sharing:\n\n1. Open the Windows Media Player application.\n2. From the Player Library view, click Stream and choose \"Turn on media streaming\".\n3. Click the Turn On Media Streaming button.\n4. A list of network devices capable of accessing your media appears. Remove any you don't want.\n5. Click OK — your media is now shared on the local network.",
        img: MediaImg1,
      },
      {
        h: "Accessing Shared Media: Mobile Phone",
        p: "To access shared media on your phone, install a DLNA (Digital Living Network Alliance) compatible app. Search for DLNA in the Play Store or App Store.\n\nThe following are some of the best apps supporting DLNA:\n• VLC\n• Plex\n• LocalCast\n• Kodi",
        img: MediaImg5,
      },
      {
        h: "Accessing Shared Media: Smart TV & Boxes",
        p: "Most smart TVs support DLNA. Your TV must be connected to the same home WiFi network as your media server. Refer to your TV's guide to enable media access.\n\nMany boxes you plug into your TV — including Roku, PlayStation 4, Xbox One, and Apple TV — also offer DLNA streaming support.",
        img: MediaImg7,
      },
    ],
  },

  nas: {
    title: "NAS",
    subtitle: "Network Attached Storage — Your Private Cloud",
    hero: NASHeroImg,
    intro:
      "Have you ever wanted to keep your files not on your computer, not on the internet, but on a server local to your WiFi? This is when NAS comes into the picture — a dedicated device connected to your local network with abundant storage, running 24/7.",
    badges: ["Storage", "Backups", "NAS"],
    date: "2021",
    readTime: "5 min read",
    sections: [
      {
        h: "What Is NAS?",
        p: '"A NAS device is a storage device connected to a network that allows storage and retrieval of data from a central location for authorized network users and varied clients. NAS devices are flexible and scale-out, meaning that as you need additional storage, you can add to what you have. NAS is like having a private cloud in the office. It\'s faster, less expensive, and provides all the benefits of a public cloud on-site, giving you complete control."\n\n— Seagate',
      },
      {
        h: "How NAS Works — Hardware",
        p: "Pre-configured storage software is installed on dedicated hardware. Known as a NAS box, NAS unit, or NAS server, this hardware is essentially a server containing storage disks or drives, processors, and RAM. It's purpose-built for storing and sharing files efficiently.",
      },
      {
        h: "How NAS Works — Software",
        p: "The main differences between NAS and general-purpose server storage lie in the software. NAS software is deployed on a lightweight OS embedded in the hardware. While general-purpose servers handle thousands of different requests per second, a NAS box handles only two types: data storage and file sharing. This makes it extremely fast and reliable for its purpose.",
      },
      {
        h: "Use 1: Automatic Data Backups",
        p: "Using a NAS you can set up automatic backups that mirror any changes made locally on your computer. As soon as a change is made to a document or folder, this change can be reflected immediately on the NAS. For even more reassurance, pair with a NAS RAID setup.",
        img: NASImg2,
      },
      {
        h: "Use 2: Easier Collaboration",
        p: "A NAS can help cut down on unnecessary file duplication by allowing all users to access documents in one central location — even enabling group editing in a similar way to Google Docs or Office 365.",
        img: NASImg3,
      },
      {
        h: "Use 3: Your Own Private Cloud",
        p: "Most NAS devices have software options that allow you to configure remote access so that you can get to your documents and files wherever you are in the world. In other words, your own private cloud storage — fully under your control.",
        img: NASImg4,
      },
      {
        h: "Use 4: Reassuring Data Protection",
        p: "Rather than isolating data on each individual computer, a NAS server lets you store data on a secure network-attached drive that is not affected by local hardware failures. Your data remains safe even if individual workstations fail.",
        img: NASImg5,
      },
      {
        h: "Use 5: Build Your Own Media Server",
        p: "While you can't use Dropbox as a media server, you'll have no problem doing that with a NAS drive. Set up Plex or Jellyfin on your NAS to access photos, music, and videos anywhere on your smart TV, smartphone, or PC connected to the home network.",
      },
    ],
  },

  raid: {
    title: "RAID",
    subtitle:
      "Redundant Array of Independent Disks — Explained in Simple Terms",
    hero: RAIDHeroImg,
    intro:
      'If you\'ve ever looked into purchasing a NAS device or server, you\'ve no doubt come across the term "RAID". RAID stands for Redundant Array of Inexpensive (or sometimes "Independent") Disks. A RAID system consists of two or more drives working in parallel.',
    badges: ["RAID", "Storage", "Hardware"],
    date: "2021",
    readTime: "7 min read",
    sections: [
      {
        h: "What Is RAID?",
        p: "With RAID enabled on a storage system, you can connect two or more drives so they act as one large fast volume — or set them up to automatically duplicate (mirror) your data for real-time backup. RAID is used to organize and control drives. RAID functionality can be implemented using software or a hardware controller.\n\nThis article covers: RAID 0, RAID 1, RAID 5, RAID 6, and RAID 10.",
      },
      {
        h: "Choosing the Right RAID Level",
        p: "The RAID level you choose depends on whether you're using RAID for performance, fault tolerance, or both. Software RAID supports fewer levels than hardware-based RAID. With hardware RAID, the type of controller also dictates the kinds of disks you can use: SAS, SATA, or SSD.",
      },
      {
        h: "RAID 0 — Performance (Striping)",
        p: "RAID 0 mode provides disk striping across all drives. Data is split across any number of disks, allowing higher data throughput. An individual file is read from multiple disks simultaneously, giving access to the speed and capacity of all of them. RAID 0 does not provide data redundancy — if one disk fails, all data is lost.",
        img: RAIDImg1,
        infoBox: [
          { label: "Minimum disks", value: "2" },
          { label: "Pros", value: "Increased read & write performance" },
          {
            label: "Cons",
            value: "No redundancy — total data loss if one disk fails",
          },
          {
            label: "Best for",
            value: "Live streaming, IPTV, VOD edge servers",
          },
        ],
      },
      {
        h: "RAID 1 — Data Protection (Mirroring)",
        p: "Set the system to RAID 1 (mirrored mode) and the capacity is divided in half. Half the capacity stores your data and half stores a duplicate copy. If one drive fails, your data is protected because it's mirrored on the second drive.",
        img: RAIDImg2,
        infoBox: [
          { label: "Minimum disks", value: "2" },
          {
            label: "Pros",
            value: "Fault tolerance, easy recovery, increased read performance",
          },
          {
            label: "Cons",
            value: "50% usable capacity — double the drives needed",
          },
          {
            label: "Best for",
            value: "Application servers where data redundancy is critical",
          },
        ],
      },
      {
        h: "RAID 5 — Data Protection & Speed",
        p: "RAID 5 gives the best of both worlds: fast performance by striping data across all drives, and data protection by dedicating a portion of each drive to fault tolerance. If a disk gets an error or starts to fail, data is recreated from the distributed data and parity block automatically.",
        img: RAIDImg3,
        infoBox: [
          { label: "Minimum disks", value: "3" },
          { label: "Pros", value: "Fault tolerance and increased performance" },
          {
            label: "Cons",
            value: "Lower write performance due to parity overhead",
          },
          {
            label: "Best for",
            value: "File storage servers and application servers",
          },
        ],
      },
      {
        h: "RAID 6 — Striping with Double Parity",
        p: "RAID 6 is similar to RAID 5, but stores an extra parity block. This means two drives can fail at the same time without breaking the array — effectively doubling your fault tolerance compared to RAID 5.",
        img: RAIDImg4,
        infoBox: [
          { label: "Minimum disks", value: "4" },
          {
            label: "Pros",
            value: "Higher redundancy than RAID 5, increased read performance",
          },
          {
            label: "Cons",
            value: "Lower write performance than RAID 5 due to double parity",
          },
          {
            label: "Best for",
            value: "Large file servers and application servers",
          },
        ],
      },
      {
        h: "RAID 10 — High Reliability & Performance",
        p: "RAID 10 combines mirroring (RAID 1) with striping (RAID 0). It delivers both redundancy and high performance, making it suitable for environments where both performance and security are required. However, it requires twice as many disks as other RAID levels.",
        img: RAIDImg6,
        infoBox: [
          { label: "Minimum disks", value: "4" },
          { label: "Pros", value: "Very high performance and fault tolerance" },
          {
            label: "Cons",
            value: "50% usable capacity, high cost, limited scalability",
          },
          {
            label: "Best for",
            value:
              "Highly utilized database servers with heavy write operations",
          },
        ],
      },
      {
        h: "Other RAID Levels",
        p: "There are other RAID levels — 2, 3, 4, 7, 0+1 — but they are really variants of the main configurations already mentioned, used for specific edge cases. For most home and small business users, RAID 0, 1, 5, or 10 will cover all needs.",
        img: RAIDImg5,
      },
    ],
  },
};

// ── Section card ──────────────────────────────────────────
const SectionCard = ({
  section,
  index,
}: {
  section: Section;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.04, duration: 0.55 }}
      className="mb-8 overflow-hidden rounded-2xl bg-white/80 shadow-sm backdrop-blur-sm dark:bg-zinc-900/80"
    >
      <div className="p-6 md:p-8">
        <h2 className="mb-4 text-xl font-bold text-aurora-orange md:text-2xl">
          {section.h}
        </h2>
        {section.p.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="mb-3 whitespace-pre-line leading-relaxed text-gray-700 dark:text-zinc-300"
          >
            {para}
          </p>
        ))}

        {section.infoBox && (
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {section.infoBox.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-aurora-orange/20 bg-orange-50 p-3 dark:bg-aurora-orange/10"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-aurora-orange">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-gray-700 dark:text-zinc-300">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {section.img && (
        <div className="border-t border-gray-100 dark:border-zinc-800">
          <img
            src={section.img}
            alt={section.h}
            className="h-auto w-full object-contain"
            loading="lazy"
          />
        </div>
      )}
    </motion.article>
  );
};

// ── Main page ─────────────────────────────────────────────
const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = slug ? BLOG_CONTENT[slug] : undefined;
  const relatedBlogs = BLOGS.filter((b) => b.slug !== slug).slice(0, 3);

  if (!blog) {
    return (
      <PageTransition className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-aurora-orange">
            Blog not found
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            We couldn't find that article.
          </p>
          <Link
            to="/blogs"
            className="mt-6 inline-block rounded-lg bg-aurora-orange px-6 py-2.5 font-semibold text-white"
          >
            Back to Blogs
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="min-h-screen">
      {/* ── Hero ── */}
      <div className="relative h-[70vh] min-h-[520px] overflow-hidden">
        {/* Hero image with Ken Burns zoom-out */}
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          src={blog.hero}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        {/* Orange accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-aurora-orange/60 via-aurora-orange/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-5xl px-4 pb-12 md:px-8">
            {/* Back link */}
            <motion.button
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate("/blogs")}
              className="mb-6 flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blogs
            </motion.button>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-4 flex flex-wrap gap-2"
            >
              {blog.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-aurora-orange/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-3 text-4xl font-black text-white md:text-5xl lg:text-6xl"
            >
              {blog.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-5 max-w-2xl text-base text-white/75 md:text-lg"
            >
              {blog.subtitle}
            </motion.p>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex items-center gap-4 text-sm text-white/50"
            >
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {blog.date}
              </span>
              <span className="text-white/25">·</span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {blog.readTime}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <div className="bg-gray-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-4 py-14 md:px-8">
          {/* Introduction highlight */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 rounded-2xl border border-aurora-orange/25 bg-gradient-to-r from-aurora-orange/10 via-orange-500/5 to-transparent p-6 md:p-8"
          >
            <p className="text-base font-medium leading-relaxed text-gray-800 md:text-lg dark:text-zinc-200">
              {blog.intro}
            </p>
          </motion.div>

          {/* Content sections */}
          {blog.sections.map((section, i) => (
            <SectionCard key={section.h} section={section} index={i} />
          ))}
        </div>
      </div>

      {/* ── Related articles ── */}
      <div className="bg-white px-4 py-16 md:px-8 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            More <span className="text-aurora-orange">Articles</span>
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedBlogs.map((b) => (
              <motion.div
                key={b.slug}
                whileHover={{ scale: 1.02 }}
                onClick={() => navigate(`/blogs/${b.slug}`)}
                className="flex cursor-pointer items-center gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-orange-50 dark:bg-zinc-800 dark:hover:bg-zinc-800/60"
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="h-16 w-24 flex-shrink-0 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {b.title}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-zinc-400">
                    {b.readTime}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPage;
