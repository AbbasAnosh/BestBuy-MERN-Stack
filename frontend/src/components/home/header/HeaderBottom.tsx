import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import { useGetSearchProductsQuery } from "../../../slices/productsApiSlice";
import { CartState, ProductProps } from "../../../types/ProductType";
import { useSelector } from "react-redux";
import { useGetWishListQuery } from "../../../slices/wishListApiSlice";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../../slices/usersApiSlice";
import { logout } from "../../../slices/authSlice";

const HeaderBottom = () => {
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const { data: products } = useGetSearchProductsQuery(searchQuery);
  const { cartItems } = useSelector((state: { cart: CartState }) => state.cart);
  const { userInfo } = useSelector((state: any) => state.auth);
  const [close, setClose] = useState(false);
  const { data: wishlistData } = useGetWishListQuery({});
  const wishlistItems = wishlistData?.wishlistItems;

  const dispatch = useDispatch();
  const [logoutApiCall] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const Products = products.products;
  s;
  useEffect(() => {
    if (searchQuery.length > 0 && Products.length > 0) {
      const filtered = Products.filter((product: ProductProps) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [Products, searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("");
  };

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onClick={() => setShow(!show)}
            className="flex h-14 cursor-pointer items-center gap-2"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5 z-50 text-[#064F48]" />
            <p className="text-[14px] font-normal z-50 ">Shop by Category</p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-[108px] lg:top-[96px] z-40 lg:left-26 bg-[#064F48]  text-[#767676] h-[50vh] p-4 pb-6"
              >
                <Link to={"category/imprimante"}>
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Computers & Accessories
                  </li>
                </Link>

                <Link to={"category/ancre"}>
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Smartphones & Tablets
                  </li>
                </Link>
                <Link to={"category/Ruban"}>
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    TV, Video & Audio
                  </li>
                </Link>
                <Link to={"category/Bac"}>
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Cameras, Photo & Video
                  </li>
                </Link>
                <Link to={"category/Bac"}>
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Headphones
                  </li>
                </Link>
                <Link to={"category/Bac"}>
                  <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Wearable Electronics
                  </li>
                </Link>
              </motion.ul>
            )}
          </div>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-[#064F48] bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none ring-0 border-0 focus:border-0 focus:ring-0 placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Search your products here"
            />
            <FaSearch className="w-5 h-5" />
            {searchQuery && (
              <div className="absolute w-full h-96 cursor-pointer bg-white p-3 space-y-2 divide-y divide-black top-16 left-0 z-50 overflow-y-scroll">
                {filteredProducts.map((product) => (
                  <div
                    key={product._id}
                    onClick={() => {
                      navigate(`/product/${product._id}`);
                      setSearchQuery("");
                      setClose(true);
                    }}
                    className="flex items-center gap-3 ..."
                  >
                    <img
                      className="w-24 rounded-sm"
                      src={product.image}
                      alt="product"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-lg">{product.name}</p>
                      <p className="text-xs">
                        {product.description.length > 100
                          ? `${product.description.slice(0, 100)}...`
                          : product.description}
                      </p>
                      <p className="text-sm">
                        Price:{" "}
                        <span className="text-primeColor font-semibold">
                          ${product.price}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            {userInfo ? (
              <>
                <div
                  onClick={() => setShowUser(!showUser)}
                  className="flex items-center"
                >
                  <span className="text-lg font-semibold mt-1 text-[#064F48]">
                    {getInitials(userInfo.name)}
                  </span>
                  <FaCaretDown className="text-[#064F48]" />
                </div>
                {showUser && (
                  <motion.ul
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-12 lg:top-16 lg:-right-4 z-40 w-64 bg-[#064F48] text-[#767676] h-[50vh] p-4 pb-6"
                  >
                    <div>
                      <li
                        onClick={handleLogout}
                        className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                      >
                        Logout
                      </li>
                    </div>

                    <Link to="/profile">
                      <li className="text-white px-4 py-1 border-b-[1px] border-b-slate-200 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Profile
                      </li>
                    </Link>
                  </motion.ul>
                )}
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex justify-center items-center cursor-pointer"
                >
                  <FaUser />
                  <FaCaretDown />
                </Link>
              </>
            )}
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-[#064F48]" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-red-600 text-white">
                    {cartItems.reduce(
                      (acc: number, item: any) => acc + item.qty,
                      0
                    )}
                  </span>
                )}
              </div>
            </Link>
            <Link to="/wishlist">
              <div className="relative">
                <BsSuitHeartFill className="text-[#064F48]" />
                {wishlistItems && wishlistItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-red-600 text-white">
                    {wishlistItems.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
