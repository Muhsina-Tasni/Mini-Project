//route for user

import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const UserRoutes = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.slice);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "user") {
    return <Navigate to="/admin" />;
  }

  return children;
};

export default UserRoutes;


