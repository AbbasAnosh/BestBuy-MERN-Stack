import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const AdminPrivateRoute = () => {
  const { userInfo } = useSelector((state: any) => state.auth);
  return userInfo && userInfo.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AdminPrivateRoute;
