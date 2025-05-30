"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import {
  BarChart,
  File,
  Globe,
  HeartHandshake,
  Rss,
  Shield,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const tiles = [
  {
    icon: <HeartHandshake className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Globe className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <File className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Shield className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Rss className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <BarChart className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-70 blur-[20px]"></div>
    ),
  },
];

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function Card(card: { icon: JSX.Element; bg: JSX.Element }) {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      {card.icon}
      {card.bg}
    </motion.div>
  );
}

export function Integrations() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);
  const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([]);
  const [randomTiles3, setRandomTiles3] = useState<typeof tiles>([]);
  const [randomTiles4, setRandomTiles4] = useState<typeof tiles>([]);
  const [randomTiles5, setRandomTiles5] = useState<typeof tiles>([]);
  const [randomTiles6, setRandomTiles6] = useState<typeof tiles>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]));
      setRandomTiles2(shuffleArray([...tiles]));
      setRandomTiles3(shuffleArray([...tiles]));
      setRandomTiles4(shuffleArray([...tiles]));
      setRandomTiles5(shuffleArray([...tiles]));
      setRandomTiles6(shuffleArray([...tiles]));
    }
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
          {randomTiles1.map((review, idx) => (
            <Card key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:30s]" repeat={5}>
          {randomTiles2.map((review, idx) => (
            <Card key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
          {randomTiles3.map((review, idx) => (
            <Card key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:30s]" repeat={5}>
          {randomTiles4.map((review, idx) => (
            <Card key={idx} {...review} />
          ))}
        </Marquee>
        <div className="md:hidden">
          <Marquee
            reverse
            className="-delay-[100ms] [--duration:20s]"
            repeat={5}
          >
            {randomTiles5.map((review, idx) => (
              <Card key={idx} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="hidden lg:block">
          <Marquee reverse className="[--duration:20s]" repeat={5}>
            {randomTiles6.map((review, idx) => (
              <Card key={idx} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="hidden xl:block">
          <Marquee reverse className="[--duration:30s]" repeat={5}>
            {randomTiles6.map((review, idx) => (
              <Card key={idx} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="absolute">
          <div className="bg-backtround dark:bg-background absolute inset-0 -z-10 rounded-full opacity-40 blur-xl" />
        </div>
        <div className="to-backtround dark:to-background absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70%" />
      </div>
    </div>
  );
}
