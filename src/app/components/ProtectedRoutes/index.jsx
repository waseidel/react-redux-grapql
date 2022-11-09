import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ isAllowed, redirectTo = "/landing" }) => {
  return isAllowed ? <Outlet /> : <Navigate to={redirectTo} />;
};
