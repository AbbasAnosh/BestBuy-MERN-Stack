import UpdateProfile from "../components/UpdateProfile";
import OrderForm from "../components/OrderForm";
import { useState } from "react";
import { useGetMyOrdersQuery } from "../slices/ordersApiSlice";

type ComponentType = "UpdateProfile" | "OrderForm";

const ProfilePage = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentType>("UpdateProfile");

  const { data: orders, isLoading, error } = useGetMyOrdersQuery({});

  return (
    <div className="min-h-screen flex flex-col lg:flex-row mx-auto bg-gray-100">
      <div className="lg:w-1/4 p-5 bg-white mt-5 rounded-tr-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-10">Profile</h1>
        <div className="space-y-4">
          <button
            className={`w-full text-left px-4 py-3 rounded-md text-white font-medium ${
              selectedComponent === "UpdateProfile"
                ? "bg-[#E56744]"
                : " bg-[#064F48]"
            }`}
            onClick={() => setSelectedComponent("UpdateProfile")}
          >
            Update Account
          </button>
          <button
            className={`w-full text-left px-4 py-3 rounded-md text-white font-medium ${
              selectedComponent === "OrderForm"
                ? "bg-[#E56744]"
                : "bg-[#064F48] "
            }`}
            onClick={() => setSelectedComponent("OrderForm")}
          >
            Order Lists
          </button>
        </div>
      </div>
      <div className="lg:w-3/4 p-5">
        <div className="bg-white p-5 rounded-lg">
          {selectedComponent === "UpdateProfile" && <UpdateProfile />}
          {selectedComponent === "OrderForm" && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-5">
                Order Lists
              </h2>
              <OrderForm orders={orders} isLoading={isLoading} error={error} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
