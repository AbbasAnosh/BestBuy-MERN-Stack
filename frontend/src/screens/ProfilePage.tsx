import UpdateProfile from "../components/UpdateProfile";
import OrderForm from "../components/OrderForm";
import { useState } from "react";

type ComponentType = "UpdateProfile" | "OrderForm";

const ProfilePage = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentType>("UpdateProfile");

  return (
    <div className="min-h-screen bg-[#EEE1D1] mx-auto">
      <div className="w-full lg:max-w-7xl p-4 mx-auto space-y-16 pt-16 pb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-[#064F48]">Profile</h1>
        </div>
        <div className=" flex flex-col md:flex-row gap-4">
          <div className="lg:w-1/4 bg-white max-h-44 rounded-md">
            <h1
              className="cursor-pointer py-3 px-4 bg-[#064F48] rounded-md text-white  mb-2"
              onClick={() => setSelectedComponent("UpdateProfile")}
            >
              Update account
            </h1>
            <h1
              className="cursor-pointer bg-[#064F48] text-white py-3 px-4 rounded-md "
              onClick={() => setSelectedComponent("OrderForm")}
            >
              Order Lists
            </h1>
          </div>
          <div className="lg:w-3/4">
            <div>
              {selectedComponent === "UpdateProfile" && (
                <h1 className="mb-10 text-xl font-extrabold text-[#064F48]">
                  Update Account
                </h1>
              )}
              {selectedComponent === "UpdateProfile" && <UpdateProfile />}
            </div>
            <div>
              {selectedComponent === "OrderForm" && (
                <h1 className="mb-10 text-xl font-extrabold text-[#064F48]">
                  Order Lists
                </h1>
              )}
              {selectedComponent === "OrderForm" && <OrderForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
