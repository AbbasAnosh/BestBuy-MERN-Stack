import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { cartItems } = useSelector((state: any) => state.cart);
  const { userInfo } = useSelector((state: any) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [logoutApiCall]: any = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-[#064F48]">
      <header className="flex shadow-lg py-4 px-4 sm:px-10 max-w-7xl mx-auto   min-h-[70px] tracking-wide relative z-50 items-center justify-between">
        <div className="hidden md:flex items-center ">
          <ul className="cursor-pointer flex gap-4 text-white">
            <li className="relative font-semibold px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
              Product
            </li>
            <li className="relative px-1 font-semibold after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
              About
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center ">
          <Link to="/">
            <h1 className="font-3xl font-bold text-[#D3D1C2]">
              Best<span className="text-[#E56A40]">Buy</span>
            </h1>
          </Link>
        </div>

        <div className="flex md:hidden">
          <Link to="/">
            <h1 className="font-3xl font-bold text-[#D3D1C2]">
              Best<span className="text-[#E56A40]">Buy</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center md:hidden ">
          <ul className="cursor-pointer flex gap-2 text-white">
            <li className="relative text-sm font-medium px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
              Product
            </li>
            <li className="relative text-sm font-medium px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
              About
            </li>
            <li className="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
              <Link
                to="/cart"
                className="flex flex-col justify-center items-center cursor-pointer relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 489 489"
                  fill="#ffffff"
                  className="font-[600]"
                >
                  <path
                    d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"
                    data-original="#000000"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute left-3 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    {cartItems.reduce(
                      (acc: number, item: any) => acc + item.qty,
                      0
                    )}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex space-x-4">
            {userInfo ? (
              <li className="relative px-1 after:absolute after:bg-pink-500 after:w-full after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
                <div
                  className="flex flex-col justify-center items-center cursor-pointer"
                  onClick={handleToggle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 512 512"
                    fill="#ffffff"
                  >
                    <path
                      d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                      data-original="#000000"
                    />
                  </svg>
                  <span className="text-xs font-semibold mt-1 text-white">
                    {userInfo.name}
                  </span>
                </div>
                {isOpen && (
                  <div className="bg-white z-20 shadow-lg py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] max-sm:-right-32 absolute right-0 top-14">
                    <h6 className="font-semibold text-sm">Welcome</h6>
                    <p className="text-sm text-gray-500 mt-1">
                      To access account and manage orders
                    </p>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="bg-transparent border border-gray-300 hover:border-[#064F48] px-4 py-2 mt-4 text-sm text-[#064F48] font-semibold"
                    >
                      LOGOUT
                    </button>
                    <hr className="border-b-0 my-4" />
                    <ul className="space-y-1.5">
                      <li>
                        <Link
                          to="/profile"
                          className="text-sm text-gray-500 hover:text-[#064F48]"
                        >
                          Profile
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          to="/order"
                          className="text-sm text-gray-500 hover:text-pink-500"
                        >
                          Order
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex flex-col justify-center items-center cursor-pointer"
                  onClick={handleToggle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 512 512"
                    fill="#ffffff"
                  >
                    <path
                      d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                      data-original="#000000"
                    />
                  </svg>
                  <span className="text-xs font-semibold mt-1 text-white">
                    Profile
                  </span>
                </Link>
              </>
            )}
            <li className="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 64 64"
                  fill="#ffffff"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="text-xs font-semibold mt-1 text-white">
                  Wishlist
                </span>
              </div>
            </li>
            <li className="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
              <Link
                to="/cart"
                className="flex flex-col justify-center items-center cursor-pointer relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 489 489"
                  fill="#ffffff"
                >
                  <path
                    d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"
                    data-original="#000000"
                  />
                </svg>
                <span className="text-xs font-semibold mt-1 text-white">
                  Bag
                </span>
                {cartItems.length > 0 && (
                  <span className="absolute left-3 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    {cartItems.reduce(
                      (acc: number, item: any) => acc + item.qty,
                      0
                    )}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <ul className="flex md:hidden space-x-4">
            <li className="hidden md:relative px-1 after:absolute after:bg-pink-500 after:w-full after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
              <div
                className="flex flex-col justify-center items-center cursor-pointer"
                onClick={handleToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 512 512"
                  fill="#ffffff"
                >
                  <path
                    d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                    data-original="#000000"
                  />
                </svg>
                <span className="text-xs font-semibold mt-1 text-white">
                  Profile
                </span>
              </div>
              {isOpen && (
                <div className="bg-white z-20 shadow-lg py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] max-sm:-right-32 absolute right-0 top-14">
                  <h6 className="font-semibold text-sm">Welcome</h6>
                  <p className="text-sm text-gray-500 mt-1">
                    To access account and manage orders
                  </p>
                  <button
                    type="button"
                    className="bg-transparent border border-gray-300 hover:border-pink-500 px-4 py-2 mt-4 text-sm text-pink-500 font-semibold"
                  >
                    LOGIN / SIGNUP
                  </button>
                  <hr className="border-b-0 my-4" />
                  <ul className="space-y-1.5">
                    <li>
                      <Link
                        to=""
                        className="text-sm text-gray-500 hover:text-pink-500"
                      >
                        Order
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="hidden md:relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
              <div className="flex flex-col justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 64 64"
                  fill="#ffffff"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="text-xs font-semibold mt-1 text-white">
                  Wishlist
                </span>
              </div>
            </li>
            <li className="hidden md:relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
              <Link
                to="/cart"
                className="flex flex-col justify-center items-center cursor-pointer relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 489 489"
                  fill="#ffffff"
                >
                  <path
                    d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"
                    data-original="#000000"
                  />
                </svg>
                <span className="text-xs font-semibold mt-1 text-white">
                  Bag
                </span>
                {cartItems.length > 0 && (
                  <span className="absolute left-3 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    {cartItems.reduce(
                      (acc: number, item: any) => acc + item.qty,
                      0
                    )}
                  </span>
                )}
              </Link>
            </li>
            <li className="relative]">
              <button id="toggleOpen" className="" onClick={handleMobile}>
                {!mobile ? (
                  <GiHamburgerMenu className="text-xl text-white" />
                ) : (
                  <IoMdClose className="text-2xl text-white" />
                )}
              </button>
              {mobile && (
                <div className="bg-white h-[80vh] z-20 shadow-lg py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] absolute right-0 top-[70px]">
                  <ul className="space-y-1.5">
                    {userInfo ? (
                      <ul>
                        <li>
                          <button
                            onClick={handleLogout}
                            type="button"
                            className="bg-transparent border border-[#064F48] hover:border-[#064F48] px-4 py-2 mt-4 text-sm text-[#064F48] font-semibold"
                          >
                            LOGOUT
                          </button>
                        </li>
                        <hr className="border-b-1 border-[#064F48] my-4" />
                        <li onClick={() => setDropdownOpen(!dropdownOpen)}>
                          <Link
                            to="/profile"
                            className="text-sm text-gray-500 hover:text-[#064F48]"
                          >
                            {userInfo.name}
                          </Link>
                          {/* {dropdownOpen && (
                        <div>
                          <h1>hello</h1>
                          <h1>hello</h1>
                          <h1>hello</h1>
                          <h1>hello</h1>
                        </div>
                      )} */}
                        </li>
                      </ul>
                    ) : (
                      <li>
                        <button
                          type="button"
                          className="bg-transparent border border-gray-300 hover:border-[#064F48] px-4 py-2 mt-4 text-sm text-[#064F48] font-semibold"
                        >
                          LOGIN / SIGNUP
                        </button>
                      </li>
                    )}
                    <hr className="border-b-0 my-4" />
                    <li>
                      <Link
                        to=""
                        className="text-sm text-gray-500 hover:text-[#064F48]"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
