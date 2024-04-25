import React from "react";
import DashboardNavbar from "../components/Navbar";
import DashboardFooter from "../components/Footer";
import Menu from "./Menu";

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="bg-main-bg text-main-color">
      <DashboardNavbar />
      <div className="flex">
        <div className="w-[250px] py-[5px] px-[20px] border-r-[2px] border-soft-bg">
          <Menu />
        </div>
        <div className="px-[5px] py-[20px] w-[100%]">{children}</div>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
