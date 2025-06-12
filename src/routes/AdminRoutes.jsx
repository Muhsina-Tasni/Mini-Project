// import { useSelector } from "react-redux"
// import { Navigate } from "react-router"

// const AdminRoutes =({children})=>{
//     const {isAuthenticated,user} = useSelector(state=>state.slice)

// if (user.role !== 'user'){
//     return <Navigate to='/admin'/>
// }

// return children
// }
// export default AdminRoutes


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






