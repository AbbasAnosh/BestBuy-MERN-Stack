import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const { userInfo } = useSelector((state: any) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
