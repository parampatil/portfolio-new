// components/HeroSection.tsx
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface HeroTextProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedText: React.FC<HeroTextProps> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const FloatingBlob = ({
  color,
  className,
}: {
  color: string;
  className: string;
}) => {
  return (
    <motion.div
      className={`${className} blur-3xl`}
      initial={{ x: "0", y: "0"}}  
      animate={{
        x: [0, 1, 0, 0],
        y: [0, 0, 1, 0],
        scale: [1, 1.2, 1.1, 1],
        rotate: [0, 90, 180, 270],
        borderRadius: ["25%", "100%", "30%", "25%"],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        times: [0, 0.333, 0.667, 1],
        repeat: Infinity,
      }}
      style={{
        backgroundColor: color,
        width: "15rem",
        height: "15rem",

      }}
    />
  );
};

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="relative flex h-screen items-center"
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(66, 66, 66, 0.3) 0%, transparent 80%)",
          scale,
        }}
      />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 pt-32">
        <motion.div className="mx-auto max-w-4xl" style={{ y }}>
          <AnimatedText delay={0.2}>
            <h1 className="mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent md:text-7xl">
              Crafting Digital Experiences
            </h1>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <p className="mb-8 text-xl text-gray-700 dark:text-gray-400">
              Transforming ideas into elegant solutions through code and
              creativity
            </p>
          </AnimatedText>

          <AnimatedText delay={0.6}>
            <div className="flex gap-4">
              <Link to="/projects/#projects">
                <motion.div
                  className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div
                  className="rounded-full border border-gray-600 px-8 py-3 font-medium dark:text-white"
                  whileHover={{ scale: 1.05, borderColor: "#4F46E5" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.div>
              </Link>
            </div>
          </AnimatedText>
        </motion.div>

        {/* Floating Elements */}
        <FloatingBlob
          color="rgba(59, 130, 246, 0.5)"
          className="absolute right-10 top-40"
        />
        <FloatingBlob
          color="rgba(168, 85, 247, 0.5)"
          className="absolute bottom-40 left-10"
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;
