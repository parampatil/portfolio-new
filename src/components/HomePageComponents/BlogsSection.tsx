import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { BLOGS } from "@/data/blogs";

const BlogsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="blogs"
      className="container relative z-10 w-full px-4 py-16 md:px-8"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="mb-8 flex w-full items-center justify-between"
      >
        <div>
          <h2 className="text-4xl font-bold text-aurora-orange">Blogs</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-300">
            Latest write-ups and guides.
          </p>
        </div>
        <Link
          to="/blogs"
          className="flex items-center gap-1.5 text-sm font-semibold text-aurora-orange transition-opacity hover:opacity-70"
        >
          View All
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </motion.div>

      <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOGS.slice(0, 3).map((b, idx) => (
          <motion.div
            key={b.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: idx * 0.08, duration: 0.6 }}
          >
            <BlogCard blog={b} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BlogsSection;
