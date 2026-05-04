import PageTransition from "@/components/PageTransitions/PageTransition";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import BlogCard from "@/components/HomePageComponents/BlogCard";
import { SparklesCore } from "@/components/ui/sparkles";
import { BLOGS } from "@/data/blogs";

const BlogsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <PageTransition className="relative min-h-screen overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
        {/* Radial orange glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,107,53,0.35),transparent)]" />

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Sparkles layer */}
        <div className="pointer-events-none absolute inset-0 h-full w-full">
          <SparklesCore
            background="transparent"
            minSize={0.3}
            maxSize={1.1}
            particleDensity={70}
            className="h-full w-full"
            particleColor="#FF6B35"
          />
        </div>

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block rounded-full border border-aurora-orange/40 bg-aurora-orange/10 px-5 py-1.5 text-sm font-medium tracking-wide text-aurora-orange"
          >
            Writing &amp; Guides
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[clamp(5rem,18vw,12rem)] font-black leading-none tracking-tighter"
          >
            <span className="bg-gradient-to-b from-white via-white/80 to-aurora-orange bg-clip-text text-transparent">
              BLOGS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-5 max-w-lg text-base text-zinc-400 md:text-lg"
          >
            Deep-dives, guides and practical notes on technology, networking and
            infrastructure.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-14 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
              className="h-6 w-px bg-gradient-to-b from-aurora-orange to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Articles grid ── */}
      <section
        ref={ref}
        className="relative z-10 mx-auto max-w-6xl px-4 py-20 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            All <span className="text-aurora-orange">Articles</span>
          </h2>
          <p className="mt-2 text-gray-500 dark:text-zinc-400">
            {BLOGS.length} articles · Networking &amp; Infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BLOGS.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.6 }}
            >
              <BlogCard blog={b} />
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogsPage;
