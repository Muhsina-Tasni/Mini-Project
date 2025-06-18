//  route for the admin
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const AdminRoutes = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.slice);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/user" />;
  }

  return children;
};

export default AdminRoutes;






