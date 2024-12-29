import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/state/authStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = useAuthStore();

    return user ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
