import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { BlogMeta } from "@/data/blogs";

const BlogCard = ({ blog }: { blog: BlogMeta }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-lg backdrop-blur-sm dark:bg-zinc-900"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate(`/blogs/${blog.slug}`)}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={blog.img}
          alt={blog.title}
          className={`h-full w-full object-cover transition-transform duration-500 ${
            hover ? "scale-110" : "scale-100"
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Read time badge */}
        <div className="absolute right-3 top-3">
          <span className="rounded-md bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {blog.readTime}
          </span>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-base font-bold text-white">{blog.title}</h3>
          <p className="mt-0.5 line-clamp-1 text-xs text-amber-100/80">{blog.desc}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="line-clamp-3 text-sm text-gray-600 dark:text-zinc-300">{blog.summary}</p>

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-1.5">
            {blog.badges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-600 dark:bg-aurora-orange/20 dark:text-aurora-orange"
              >
                {b}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 8 }}
            transition={{ duration: 0.2 }}
            className="mt-3 flex items-center gap-1 text-sm font-semibold text-aurora-orange"
          >
            <span>Read Article</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(45deg, rgba(255,107,53,0.22) 0%, rgba(247,147,30,0.18) 50%, rgba(255,87,34,0.12) 100%)",
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
};

export default BlogCard;
