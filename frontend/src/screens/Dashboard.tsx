import OverviewIcon from "/icons/overview.svg";
import ShoppingBagIcon from "/icons/shopping-bag.svg";
import GraphIcon from "/icons/graph.svg";
import User from "/icons/user.svg";
import { useGetProductsQuery } from "../slices/productsApiSlice";

import { useState } from "react";
import ProductTable from "../components/ProductTable";
import OrderTable from "../components/OrderTable";
import { useGetOrdersQuery } from "../slices/ordersApiSlice";
import UserTable from "../components/UserTable";
import { useGetUsersQuery } from "../slices/usersApiSlice";

const sidebar = [
  { name: "Products", icon: ShoppingBagIcon },
  { name: "Orders", icon: OverviewIcon },
  { name: "Users", icon: User },
  { name: "Analytics", icon: GraphIcon },
];

const Dashboard = () => {
  const { data: products, refetch } = useGetProductsQuery({});
  const { data: orders } = useGetOrdersQuery({});
  const { data: users, refetch: userRefech } = useGetUsersQuery({});
  const [activeComponent, setActiveComponent] = useState("Products");

  const components = {
    Products: <ProductTable data={products} refetch={refetch} />,
    Orders: <OrderTable data={orders} />,
    Users: <UserTable data={users} refetch={userRefech} />,
  };
  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
      <aside className="py-6 px-10 w-64 border-r border-gray-200">
        <h1 className="text-xl font-semibold">BestBuy</h1>
        <ul className="flex flex-col gap-y-6 pt-20">
          {sidebar.map((item, index) => (
            <>
              <li key={index}>
                <a
                  href="#"
                  className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
                  onClick={() => setActiveComponent(item.name)}
                >
                  <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                  <img
                    src={item.icon}
                    className="w-6 h-6 fill-current"
                    alt={item.name}
                    style={{ transition: "fill 0.3s", fill: "indigo" }}
                  />
                  <span>{item.name}</span>
                </a>
              </li>
              {index === 5 && <li className="py-4"></li>}{" "}
            </>
          ))}
        </ul>
      </aside>
      <main className="flex-1 pb-8">
        {components[activeComponent]}

        {/* <div className="flex gap-x-2 justify-center pt-8">
          <button className="flex justify-center items-center w-8 h-8">
            <img
              src="../../public/icons/chevron-left.svg"
              className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600"
              alt=""
            />
          </button>
          {Array.from({ length: 6 }, (_, i) => (
            <button
              key={i}
              className={`flex items-center justify-center w-8 h-8 font-medium rounded-full ${
                i === 0
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-indigo-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button className="flex justify-center items-center w-8 h-8">
            <img
              src="../../public/icons/chevron-right.svg"
              className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600"
              alt=""
            />
          </button>
        </div> */}
      </main>
    </div>
  );
};

export default Dashboard;
