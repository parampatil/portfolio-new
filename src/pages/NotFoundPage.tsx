import { motion } from "motion/react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
    >
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
        className="text-2xl mt-4 text-center"
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
          <button className="px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
            Take Me Home
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFoundPage;
