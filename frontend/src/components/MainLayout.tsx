import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout: React.FC = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      <Outlet />
      {!isDashboard && <Footer />}
    </>
  );
};

export default MainLayout;
