import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToAnchor from "./ScrollToAnchor";
import { AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import AdminPage from "@/pages/AdminPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProtectedRoute from "@/middleware/ProtectedRoute";
import Footer from "@/components/Footer";

const AppRouter = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToAnchor />
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
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
