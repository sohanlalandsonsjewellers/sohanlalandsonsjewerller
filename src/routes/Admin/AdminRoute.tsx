import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

export default function AdminRoute({ children }: any) {
  const { token, user, loading } = useAuth();

  // 1. Loading chal rahi hai toh wait karo, redirect mat karo
  if (loading) {
    return null;
  }

  // 2. Token nahi hai -> Login page par bhej do
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 3. Admin nahi hai -> Homepage par bhej do
  if (!user || user.adminRole !== true) {
    return <Navigate to="/" replace />;
  }

  return children;
}