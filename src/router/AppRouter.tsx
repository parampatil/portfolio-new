import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToAnchor from "./ScrollToAnchor";

import { AnimatePresence } from "motion/react";
import Navbar from "@/components/NavbarComponents/Navbar";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ContactPage from "@/pages/ContactPage";
import AdminPage from "@/pages/AdminPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import NotFoundPage from "@/pages/NotFoundPage";
import BlogPage from "@/pages/BlogPage";
import BlogsPage from "@/pages/BlogsPage";
import ProtectedRoute from "@/middleware/ProtectedRoute";
import Footer from "@/components/Footer";

const AppRouter = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToAnchor />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default AppRouter;
