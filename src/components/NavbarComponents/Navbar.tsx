import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuthStore } from "@/state/authStore";
import { signOut } from "firebase/auth";
import { auth } from "@/features/auth/firebase";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import MobileSidebar from "./MobileSidebar";
import { navItems } from "./NavbarMenuItems";
import AnimatedShinyText from "../ui/animated-shiny-text";

const navbarContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};

const navbarItemsContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.5,
    },
  },
};

const navbarItemVariant = {
  hidden: {
    opacity: 0,
    y: 10,
    x: 10,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  transition: {
    type: "spring",
    damping: 10,
    stiffness: 100,
  },
};

const Navbar = () => {
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [backgroundEnabled, setBackgroundEnabled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight) {
      setBackgroundEnabled(true);
    } else {
      setBackgroundEnabled(false);
    }
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <nav
      className={`fixed left-0 top-0 z-50 w-full px-4 transition-all duration-500 hover:bg-white/50 hover:shadow-md hover:backdrop-blur-sm dark:hover:bg-black/50 ${backgroundEnabled ? "bg-white/50 shadow-lg backdrop-blur-md dark:bg-black/50" : ""}`}
    >
      <motion.div
        variants={navbarContainerVariant}
        initial="hidden"
        animate="show"
        className="container mx-auto flex items-stretch justify-between"
      >
        <motion.div
          variants={navbarItemVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer py-3 font-berkshire text-2xl"
          onClick={() => navigate("/")}
        >
          <AnimatedShinyText className="text-gray-900 dark:text-white">
            Param
          </AnimatedShinyText>
        </motion.div>
        <motion.div variants={navbarItemVariant} className="flex items-stretch">
          <motion.div
            variants={navbarItemsContainerVariant}
            initial="hidden"
            animate="show"
            className="flex items-stretch"
          >
            {isMobile ? (
              <MobileSidebar
                navItems={navItems}
                user={!!user}
                handleSignOut={handleSignOut}
              />
            ) : (
              // These might need to have motion animation to add stagger delay to them
              navItems.map((item) => (
                <motion.div
                  variants={navbarItemVariant}
                  className="flex items-stretch"
                >
                  <HoverCard key={item.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger className="group relative flex cursor-pointer transition-all duration-300 hover:bg-white/10">
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `flex flex-1 items-center justify-center px-3 font-semibold transition-all duration-300 group-hover:translate-y-1 ${
                            isActive
                              ? "bg-gradient-to-r from-aurora-orange via-aurora-red to-aurora-glow bg-clip-text text-transparent"
                              : "text-gray-700 group-hover:text-aurora-orange dark:text-gray-200 dark:group-hover:text-aurora-orange"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {isActive && (
                              <motion.div
                                layoutId="underline"
                                className="absolute inset-0 h-0 border-t-2 border-aurora-red"
                                style={{
                                  boxShadow:
                                    "0 0 2em 0.4em rgba(255, 107, 53, 0.5)",
                                }}
                              />
                            )}
                            {item.name}
                          </>
                        )}
                      </NavLink>
                    </HoverCardTrigger>
                    <HoverCardContent className="border-none bg-white/50 dark:bg-black/50">
                      <div className="p-2">
                        {item.dropdown.map((subItem) => (
                          <div key={subItem.name} className="py-1">
                            <NavLink
                              to={subItem.path}
                              className="font-medium text-gray-700 transition-colors duration-300 hover:text-aurora-orange dark:text-gray-200 dark:hover:text-aurora-orange"
                            >
                              {subItem.name}
                            </NavLink>
                          </div>
                        ))}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </motion.div>
              ))
            )}

            {user && !isMobile && (
              <>
                <motion.div
                  variants={navbarItemsContainerVariant}
                  initial="hidden"
                  animate="show"
                  className="group relative flex cursor-pointer transition-all duration-300 hover:bg-white/10"
                >
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      `flex flex-1 items-center justify-center px-3 font-semibold transition-all duration-300 group-hover:translate-y-1 ${
                        isActive
                          ? "bg-gradient-to-r from-aurora-orange via-aurora-red to-aurora-glow bg-clip-text text-transparent"
                          : "text-gray-700 group-hover:text-aurora-orange dark:text-gray-200 dark:group-hover:text-aurora-orange"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.div
                            layoutId="underline"
                            className="absolute inset-0 border-t-2 border-aurora-red"
                          />
                        )}
                        Admin
                      </>
                    )}
                  </NavLink>
                </motion.div>
                <motion.div
                  variants={navbarItemsContainerVariant}
                  initial="hidden"
                  animate="show"
                  className="flex cursor-pointer items-center px-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSignOut}
                    className="rounded-lg bg-gradient-to-r from-aurora-orange via-aurora-red to-aurora-glow px-4 py-2 text-sm font-medium text-white shadow-lg shadow-aurora-orange/30 transition-all duration-300 hover:shadow-aurora-orange/50"
                  >
                    Sign Out
                  </motion.button>
                </motion.div>
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
