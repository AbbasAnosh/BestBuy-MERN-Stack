import OverviewIcon from "/icons/overview.svg";
import ShoppingBagIcon from "/icons/shopping-bag.svg";
import GraphIcon from "/icons/graph.svg";
import User from "/icons/user.svg";
import { useGetProductsQuery } from "../slices/productsApiSlice";

import { useEffect, useState } from "react";
import ProductTable from "../components/ProductTable";
import OrderTable from "../components/OrderTable";
import { useGetOrdersQuery } from "../slices/ordersApiSlice";
import UserTable from "../components/UserTable";
import { useGetUsersQuery } from "../slices/usersApiSlice";
import ProductForm from "./Admin/AddProduct";
import ProductEditPage from "./Admin/ProductEditPage";

const sidebar = [
  { name: "Products", icon: ShoppingBagIcon },
  { name: "Orders", icon: OverviewIcon },
  { name: "Users", icon: User },
  { name: "Analytics", icon: GraphIcon },
];

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: products, refetch } = useGetProductsQuery({
    pageNumber: currentPage,
  });

  const { data: orders } = useGetOrdersQuery({});
  const { data: users, refetch: userRefech } = useGetUsersQuery({});
  const [activeComponent, setActiveComponent] = useState("Products");

  const handlePageClick = (data) => {
    const newPageNumber = data.selected + 1;
    setCurrentPage(newPageNumber);
  };

  useEffect(() => {
    refetch();
  }, [currentPage]);

  const components = {
    Products: (
      <ProductTable
        data={products}
        refetch={refetch}
        handlePageClick={handlePageClick}
        setActiveComponent={setActiveComponent}
      />
    ),
    Orders: <OrderTable data={orders} />,
    Users: <UserTable data={users} refetch={userRefech} />,
    AddProduct: <ProductForm />,
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen font-sans text-gray-900 bg-gray-50">
      <aside className=" py-3 lg:py-6 lg:px-10 lg:w-64 lg:border-r lg:border-gray-200">
        <h1 className="text-xl px-2 font-semibold">BestBuy</h1>
        <ul className="flex flex-row gap-3  lg:flex-col gap-y-6 pt-8 lg:pt-20">
          {sidebar.map((item, index) => (
            <div>
              <li key={index}>
                <button
                  className="flex gap-x-2 lg:gap-x-4 items-center -ml-2 md:ml-0 py-2 text-gray-500 hover:text-indigo-600 group"
                  onClick={() => setActiveComponent(item.name)}
                >
                  <span className="w-1.5 h-8 lg:bg-indigo-600 rounded-r-full left-0 lg:absolute lg:scale-y-0 lg:-translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />

                  <img
                    src={item.icon}
                    className="hidden md:block w-6 h-6 fill-current"
                    alt={item.name}
                    style={{ transition: "fill 0.3s", fill: "indigo" }}
                  />
                  <span className="bg-[#064F48] p-1 lg:bg-transparent text-white lg:text-black rounded-md">
                    {item.name}
                  </span>
                </button>
              </li>
              {index === 5 && <li className="py-4"></li>}{" "}
            </div>
          ))}
        </ul>
      </aside>
      <main className="flex-1 pb-8">{components[activeComponent]}</main>
    </div>
  );
};

export default Dashboard;
