import { FaHome, FaChevronRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import Filter from "../components/Filter";

const ProductPage = () => {
  return (
    <div className="h-[100vh] bg-[#EEE1D1]">
      <div className="max-w-7xl pl-20 pr-20 ">
        <div className="py-4 flex items-center gap-1">
          <Link to="/" className="text-base">
            <FaHome />
          </Link>
          <span className="text-sm text-gray-400">
            <FaChevronRight />
          </span>
          <p className="text-gray-600 font-medium">Shop</p>
        </div>
        <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
          <div className="col-span-1 bg-white px-4 shadow rounded overflow-hidden">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
