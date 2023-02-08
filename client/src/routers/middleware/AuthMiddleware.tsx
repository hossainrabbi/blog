import { Navigate, Outlet, useLocation } from "react-router-dom";

type AuthMiddlewareType = {
  roles: string[];
};

export default function AuthMiddleware({ roles }: AuthMiddlewareType) {
  const auth = {
    role: "ADMIN",
  };
  const location = useLocation();

  const roleCheck = roles.includes(auth.role);

  return roleCheck ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ location }} replace />
  );
}
