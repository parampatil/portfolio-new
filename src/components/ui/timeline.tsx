"use client";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, useInView, motion } from "framer-motion";

interface TimelineEntry {
  title: string;
  category: "education" | "career" | "all"; // Define categories
  content: React.ReactNode;
}

export const Timeline = ({
  title,
  description,
  data,
}: {
  title: string;
  description: string;
  data: TimelineEntry[];
}) => {
  const [filter, setFilter] = useState<"education" | "career" | "all">("all");
  const filteredData = data.filter(
    (item) => filter === "all" || item.category === filter
  );

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerInView = useInView(containerRef);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, filter]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10 dark:bg-neutral-950"
      ref={containerRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={
            containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 max-w-6xl text-5xl text-black md:text-6xl dark:text-white"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={
            containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-md text-sm text-neutral-700 md:text-base dark:text-neutral-300"
        >
          {description}
        </motion.p>
        <div className="mt-8 flex space-x-4">
          {["all", "education", "career"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as "education" | "career" | "all")}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                filter === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black dark:bg-neutral-800 dark:text-white"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {filteredData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const itemInView = useInView(itemRef);

  return (
    <div
      key={index}
      className="flex justify-start pt-10 md:gap-10 md:pt-40"
      ref={itemRef}
    >
      <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
        <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3 dark:bg-black">
          <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
        </div>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
          className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl dark:text-neutral-500"
        >
          {item.title}
        </motion.h3>
      </div>

      <div className="relative w-full pl-20 pr-4 md:pl-4">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
          className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden dark:text-neutral-500"
        >
          {item.title}
        </motion.h3>
        <div>{item.content}</div>
      </div>
    </div>
  );
};
