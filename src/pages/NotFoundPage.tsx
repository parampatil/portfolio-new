import PageTransition from "@/components/PageTransitions/PageTransition";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <PageTransition className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      {/* Animated 404 Text */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-9xl font-extrabold drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-4 text-center text-2xl"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      {/* Animation for a bouncing emoji */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-6 text-6xl"
      >
        🚀
      </motion.div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        className="mt-8"
      >
        <Link to="/">
          <button className="rounded-lg bg-white px-6 py-3 font-bold text-blue-500 shadow-lg transition duration-300 hover:bg-gray-100">
            Take Me Home
          </button>
        </Link>
      </motion.div>
    </PageTransition>
  );
};

export default NotFoundPage;
