import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuthStore } from "@/state/authStore";
import { signOut } from "firebase/auth";
import { auth } from "@/features/auth/firebase";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  dropdown: { name: string; path: string }[];
}

interface MobileSidebarProps {
  navItems: NavItem[];
  user: boolean;
  handleSignOut: () => void;
}

const MobileSidebar = ({
  navItems,
  user,
  handleSignOut,
}: MobileSidebarProps) => {
  return (
    <Sheet modal={false}>
      <SheetTrigger>
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-transparent bg-gradient-to-r from-black/95 to-gray-800/90 text-white"
      >
        <div className="p-4">
          {navItems.map((item) => (
            <MobileNavItem key={item.name} item={item} />
          ))}
          {user && (
            <>
              <NavLink
                to="/admin"
                className="block py-2 transition hover:text-gray-300"
              >
                Admin
              </NavLink>
              <button
                onClick={handleSignOut}
                className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium transition hover:bg-red-600"
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

const MobileNavItem = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between py-2">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `transition ${isActive ? "text-yellow-300" : "hover:text-gray-300"}`
          }
        >
          {item.name}
        </NavLink>
        <CollapsibleTrigger>
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="CollapsibleContent ml-2 rounded-lg bg-white/10 pl-2">
        {item.dropdown.map((subItem) => (
          <NavLink
            key={subItem.name}
            to={subItem.path}
            className="block py-1 transition hover:text-gray-300"
          >
            {subItem.name}
          </NavLink>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

const Navbar = () => {
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      name: "Home",
      path: "/",
      dropdown: [
        { name: "About", path: "/#about-me" },
        { name: "Projects", path: "/#projects" },
        { name: "Contact Me", path: "/#contact" },
      ],
    },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Introduction", path: "/about#introduction" },
        { name: "Skills", path: "/about#skills" },
        { name: "Education", path: "/about#education" },
        { name: "Experience", path: "/about#experience" },
        { name: "Achievements", path: "/about#achievements" },
      ],
    },
    {
      name: "Projects",
      path: "/projects",
      dropdown: [
        { name: "Research papers", path: "/projects#research-papers" },
        { name: "Projects", path: "/projects#projects" },
      ],
    },
    {
      name: "Blogs",
      path: "/blogs",
      dropdown: [{ name: "Cards of Blogs", path: "/blogs#cards" }],
    },
    {
      name: "Hobby",
      path: "/hobby",
      dropdown: [
        { name: "YouTube", path: "/hobby#youtube" },
        { name: "Photography", path: "/hobby#photography" },
      ],
    },
    {
      name: "Contact Me",
      path: "/contact",
      dropdown: [
        { name: "Form", path: "/contact#form" },
        { name: "Social Media", path: "/contact#social-media" },
      ],
    },
  ];

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear the user from Zustand store
      navigate("/login"); // Redirect to login page after sign out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed left-0 top-0 z-50 w-full bg-gradient-to-b from-blue-600/50 to-blue-600/0 px-4 text-white shadow-md backdrop-blur-lg"
    >
      <div className="container mx-auto flex items-stretch justify-between">
        <motion.div
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer py-3 font-berkshire text-2xl"
          onClick={() => navigate("/")}
        >
            Param Patil
        </motion.div>
        <div className="flex items-stretch">
          {isMobile ? (
            <MobileSidebar
              navItems={navItems}
              user={!!user}
              handleSignOut={handleSignOut}
            />
          ) : (
            navItems.map((item) => (
              <HoverCard key={item.name} openDelay={0} closeDelay={100}>
                <HoverCardTrigger className="group relative flex cursor-pointer mix-blend-difference transition-all duration-300 hover:bg-white/10">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex flex-1 items-center justify-center px-3 transition-colors duration-300 ${
                        isActive ? "text-red-500" : "group-hover:text-red-500"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.div
                            layoutId="underline"
                            className="absolute inset-0 border-b-2 border-red-500"
                          />
                        )}
                        {item.name}
                      </>
                    )}
                  </NavLink>
                </HoverCardTrigger>
                <HoverCardContent className="bg-white/90">
                  <div className="p-2">
                    {item.dropdown.map((subItem) => (
                      <div key={subItem.name} className="py-1">
                        <NavLink
                          to={subItem.path}
                          className="transition-colors duration-300 hover:text-gray-300"
                        >
                          {subItem.name}
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))
          )}
          {user && !isMobile && (
            <>
              <div className="group relative flex cursor-pointer mix-blend-difference transition-all duration-300 hover:bg-white/10">
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `flex flex-1 items-center justify-center px-3 transition-colors duration-300 ${
                      isActive ? "text-red-500" : "group-hover:text-red-500"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute inset-0 border-b-2 border-red-500"
                        />
                      )}
                      Admin
                    </>
                  )}
                </NavLink>
              </div>
              <div className="flex cursor-pointer items-center px-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSignOut}
                  className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-red-600"
                >
                  Sign Out
                </motion.button>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
