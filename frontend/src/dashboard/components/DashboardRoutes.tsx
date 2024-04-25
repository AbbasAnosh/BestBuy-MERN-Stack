import { Routes, Route } from "react-router-dom";
import DashboardHome from "../pages/Home";
import UsersManagement from "../pages/Users";
import DashboardProducts from "../pages/Products";
import DashboardLayout from "./DashboardLayout";
import User from "../pages/User";
import Product from "../pages/Product";

const DashboardRoutes = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<DashboardHome />} />
        <Route path="/users" element={<UsersManagement />} />
        <Route path="/products" element={<DashboardProducts />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardRoutes;
