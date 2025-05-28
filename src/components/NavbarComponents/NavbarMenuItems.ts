export const navItems = [
    {
      name: "Home",
      path: "/",
      dropdown: [
        { name: "About", path: "/#about-me" },
        { name: "Projects", path: "/#projects" },
      ],
    },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Timeline", path: "/about#timeline" },
        { name: "Skills", path: "/about#skills" },
        { name: "Achievements", path: "/about#achievements" },
      ],
    },
    {
      name: "Projects",
      path: "/projects",
      dropdown: [
        // { name: "Research papers", path: "/projects#research-papers" },
        { name: "Projects", path: "/projects#projects" },
      ],
    },
    // {
    //   name: "Blogs",
    //   path: "/blogs",
    //   dropdown: [{ name: "Cards of Blogs", path: "/blogs#cards" }],
    // },
    // {
    //   name: "Hobby",
    //   path: "/hobby",
    //   dropdown: [
    //     { name: "YouTube", path: "/hobby#youtube" },
    //     { name: "Photography", path: "/hobby#photography" },
    //   ],
    // },
    {
      name: "Contact Me",
      path: "/contact",
      dropdown: [
        { name: "Social Media", path: "/contact" },
        { name: "Schedule Appointment", path: "/contact#appointment" },
      ],
    },
  ];