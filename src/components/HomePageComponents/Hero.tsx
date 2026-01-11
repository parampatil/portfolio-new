import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// Import WebGL background components
import Aurora from "@/components/Aurora";
import GhostCursor from "@/components/GhostCursor";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <GhostCursor
        color="#FF6B35"
        zIndex={0}
        bloomRadius={0.01}
        brightness={0.5}
        trailLength={15}
        edgeIntensity={1}
        maxDevicePixelRatio={0.2}
      />

      <section
        className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden"
        ref={ref}
      >
        {/* Aurora Background */}
        <div className="absolute inset-0 left-0 right-0 z-0 h-full w-full">
          <Aurora
            colorStops={["#FF6B35", "#F7931E", "#FF5722"]}
            amplitude={1}
            blend={0.6}
            speed={0.5}
          />
        </div>

        {/* Main Content Container */}
        <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 sm:py-20">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gray-600 dark:to-gray-600" />
              <p className="text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">
                Welcome
              </p>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-gray-600 dark:to-gray-600" />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-white">
                <span className="block font-light text-gray-600 dark:text-gray-400">
                  Hi, I'm
                </span>
                <span className="relative mt-2 block">
                  <span className="bg-gradient-to-r from-aurora-orange via-aurora-red to-aurora-glow bg-clip-text text-transparent">
                    Param Patil
                  </span>
                  {/* Glow effect */}
                  <span
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-aurora-orange/30 via-aurora-red/30 to-aurora-glow/30 blur-2xl"
                    style={{ transform: "translateY(10px)" }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Role/Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-aurora-orange/30 bg-gray-900/50 px-4 py-2 backdrop-blur-sm sm:px-6 sm:py-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora-orange opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora-red" />
                </span>
                <span className="text-xs font-medium text-gray-300 sm:text-sm">
                  Software Development Engineer
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl px-4 text-base leading-relaxed text-gray-700 sm:px-0 sm:text-lg md:text-xl dark:text-gray-400"
            >
              A passionate developer who excels at{" "}
              <span className="font-semibold text-orange-600 dark:text-aurora-orange">
                React-ing
              </span>{" "}
              to challenges,{" "}
              <span className="font-semibold text-red-600 dark:text-aurora-red">
                debugging
              </span>{" "}
              complex problems, and building{" "}
              <span className="font-semibold text-orange-500 dark:text-aurora-glow">
                Next-level
              </span>{" "}
              solutions
            </motion.p>

            {/* CTA Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pb-16 pt-2 sm:pb-4 sm:pt-4"
            >
              <div className="inline-flex flex-col items-center gap-2 rounded-full border border-aurora-orange/20 bg-gradient-to-r from-aurora-orange/10 via-aurora-red/10 to-aurora-glow/10 px-4 py-2 backdrop-blur-sm sm:flex-row sm:gap-3 sm:px-6 sm:py-3">
                <span className="text-xs font-semibold text-aurora-red sm:text-sm">
                  🎯 2026 Goal
                </span>
                <span className="hidden h-4 w-px bg-gray-700 sm:block" />
                <span className="text-xs text-gray-400 sm:text-sm">
                  Seeking Full-Time Opportunities
                </span>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-0"
            >
              <Link
                to="/#about-me"
                className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-gray-600 dark:text-gray-500">
                  Scroll
                </span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-gray-400 p-1 transition-colors group-hover:border-orange-500 dark:border-gray-700 dark:group-hover:border-aurora-orange"
                >
                  <motion.div className="h-1.5 w-1.5 rounded-full bg-gray-600 transition-colors group-hover:bg-red-600 dark:bg-gray-500 dark:group-hover:bg-aurora-red" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative grid overlay */}
        {/* <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" /> */}
      </section>
    </>
  );
};

export default Hero;
