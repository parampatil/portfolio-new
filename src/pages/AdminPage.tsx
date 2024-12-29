import { motion } from "motion/react";
import { useAuthStore } from "@/state/authStore";

const AdminPage = () => {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      >
        <h1 className="text-2xl font-bold text-red-500">Access Denied</h1>
        <p className="mt-4 text-lg text-gray-600">
          You must be logged in to view this page.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <p className="mt-4 text-lg text-gray-600">
        Welcome, {user.displayName || "Admin"}! This is your dashboard.
      </p>
    </motion.div>
  );
};

export default AdminPage;
