import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const Header = () => {
  const { cartItems } = useSelector((state: any) => state.cart);
  const { userInfo } = useSelector((state: any) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option: any) => {
    setIsOpen(false);
    if (option.label === "Logout") {
      handleLogout();
    }
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
  const options = [
    {
      label: "View profile",
      href: "/profile",
      icon: <FaUser />,
    },
    {
      label: "Logout",
      href: "/logout",
      icon: <AiOutlineLogout />,
    },
  ];
  return (
    <header className="bg-[#064F48] py-4 sm:px-10 px-6 font-[sans-serif] min-h-[70px]">
      <div className="flex flex-wrap items-center lg:gap-y-2 gap-y-4 gap-x-4">
        <Link to="/">
          <h1 className="font-3xl font-bold text-[#D3D1C2]">
            Best<span className="text-[#E56A40]">Buy</span>
          </h1>
        </Link>
        <div></div>
        <div className="flex items-center ml-auto lg:order-1">
          <div className="flex items-center space-x-4">
            {userInfo ? (
              <>
                <div className="relative w-max mx-auto">
                  <button
                    type="button"
                    onClick={handleToggle}
                    className="px-6 py-2 flex items-center bg-[#EEE1D1] rounded-full text-[#064F48] text-sm font-semibold border-2 border-[#E56A40] outline-none hover:bg-[#FFFFFF]"
                  >
                    <p className="text-nowrap text-[#064F48]">
                      {userInfo.name}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-[#064F48] inline ml-4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clip-rule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <ul className="absolute shadow-lg bg-[#D3D1C2] py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto">
                      {options.map((option: any) => (
                        <li
                          key={option.label}
                          onClick={() => {
                            if (activeItem === option) {
                              setActiveItem(null);
                            } else {
                              setActiveItem(option);
                            }

                            handleOptionClick(option);
                          }}
                          className={`py-2.5 px-6 flex items-center hover:bg-[#E56A40] text-[#064F48] text-sm cursor-pointer ${
                            activeItem === option ? "active-item" : ""
                          }`}
                        >
                          {option.icon}
                          <button className="ml-2">{option.label}</button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    fill="#D3D1C2"
                    height="30px"
                    viewBox="0 0 24 24"
                    className="mr-4 cursor-pointer hover:fill-[#E56A40] inline"
                  >
                    <circle cx="10" cy="7" r="6" data-original="#000000" />
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    />
                  </svg>
                </Link>
              </>
            )}

            <span className="relative mr-8">
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  className="cursor-pointer hover:fill-[#E56A40] inline-block"
                  fill="#D3D1C2"
                >
                  <path
                    d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                    data-original="#000000"
                    paintOrder="fill markers stroke"
                  ></path>
                </svg>
              </Link>
              {cartItems.length > 0 && (
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  {cartItems.reduce(
                    (acc: number, item: any) => acc + item.qty,
                    0
                  )}
                </span>
              )}
            </span>

            <input
              type="text"
              placeholder="Search something..."
              className="bg-[#D3D1C2] focus:bg-white placeholder:text-gray-600 w-full px-6 h-10 text-gray-600 rounded outline-none text-sm"
            ></input>
          </div>
          {/* <button id="toggle" className="lg:hidden ml-7">
            <svg
              className="w-7 h-7"
              fill="#fff"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
