import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";
import { BsSuitHeartFill } from "react-icons/bs";
import Flex from "../designLayout/Flex";

const HeaderBottom = () => {
  //   const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  //   const navigate = useNavigate();
  const ref = useRef();
  //   useEffect(() => {
  //     document.body.addEventListener("click", (e) => {
  //       if (ref.current.contains(e.target)) {
  //         setShow(true);
  //       } else {
  //         setShow(false);
  //       }
  //     });
  //   }, [show, ref]);

  //   const [searchQuery, setSearchQuery] = useState("");
  //   const [filteredProducts, setFilteredProducts] = useState([]);
  //   const [showSearchBar, setShowSearchBar] = useState(false);

  //   const handleSearch = (e) => {
  //     setSearchQuery(e.target.value);
  //   };

  //   useEffect(() => {
  //     const filtered = paginationItems.filter((item) =>
  //       item.productName.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setFilteredProducts(filtered);
  //   }, [searchQuery]);

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5 z-[500]" />
            <p className="text-[14px] font-normal z-[500]">Shop by Category</p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-[96px] z-[1000] left-0 bg-primeColor bg-[#064F48] w-[16vw] text-[#767676] h-[50vh] p-4 pb-6"
              >
                <Link to={"category/imprimante"}>
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Imprimante
                  </li>
                </Link>

                <Link to={"category/ancre"}>
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    ancre
                  </li>
                </Link>
                <Link to={"category/Ruban"}>
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    ruban
                  </li>
                </Link>
                <Link to={"category/Bac"}>
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Bac de dechet
                  </li>
                </Link>
              </motion.ul>
            )}
          </div>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none ring-0 border-0 focus:border-0 focus:ring-0 placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              //   onChange={handleSearch}
              //   value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {/* {searchQuery && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchQuery &&
                  filteredProducts.map((item) => (
                    <div
                      onClick={() =>
                        navigate(
                          `/product/${item.productName
                            .toLowerCase()
                            .split(" ")
                            .join("")}`,
                          {
                            state: {
                              item: item,
                            },
                          }
                        ) &
                        setShowSearchBar(true) &
                        setSearchQuery("")
                      }
                      key={item._id}
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src={item.img} alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.productName}
                        </p>
                        <p className="text-xs">
                          {item.des.length > 100
                            ? `${item.des.slice(0, 100)}...`
                            : item.des}
                        </p>
                        <p className="text-sm">
                          Price:{" "}
                          <span className="text-primeColor font-semibold">
                            ${item.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )} */}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-14 -right-4 z-50 bg-primeColor w-64 bg-[#064F48] text-[#767676] h-[50vh] p-4 pb-6"
              >
                <Link to="/signin">
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Sign Up
                  </li>
                </Link>
                <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Profile
                </li>
                <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Others
                </li>
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart />
                {/* <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                  {products.length > 0 ? products.length : 0}
                </span> */}
              </div>
            </Link>
            <BsSuitHeartFill />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
