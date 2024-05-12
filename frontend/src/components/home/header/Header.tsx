import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import Flex from "../designLayout/Flex";
import logo from "/BestBuy.svg";
import Image from "../designLayout/Image";

const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
];

const NewHeader = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-[#064F48] z-50 sticky top-0 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="1264.000000pt"
                height="788.000000pt"
                viewBox="0 0 1264.000000 788.000000"
                preserveAspectRatio="xMidYMid meet"
                className="w-96 object-cover font-[600]"
              >
                <g
                  transform="translate(0.000000,788.000000) scale(0.100000,-0.100000)"
                  fill="#FFFFFF"
                  stroke="none"
                  strokeWidth={900}
                >
                  <path
                    d="M4045 4708 c-43 -25 -84 -81 -91 -124 -6 -44 2 -114 14 -124 4 -3 12
-14 18 -24 6 -11 19 -24 30 -30 10 -6 21 -13 24 -16 11 -12 90 -30 133 -30 37
0 47 4 52 20 3 11 5 92 4 180 l-3 160 -81 0 c-44 0 -89 -6 -100 -12z"
                  />
                  <path
                    d="M4270 4645 c0 -81 13 -101 51 -77 10 7 28 12 39 12 11 0 29 -5 39
-12 38 -24 51 -4 51 77 l0 75 -90 0 -90 0 0 -75z"
                  />
                  <path
                    d="M4465 4550 c4 -6 72 -10 172 -10 188 0 222 -7 271 -58 28 -30 32 -41
32 -88 0 -30 -4 -54 -10 -54 -5 0 -10 -6 -10 -13 0 -14 -35 -47 -50 -47 -6 0
-10 -4 -10 -10 0 -7 -204 -11 -587 -12 l-588 -2 585 -6 c344 -3 593 -1 605 4
11 5 32 23 47 40 24 27 28 39 28 96 0 82 -21 119 -84 148 -42 20 -62 22 -226
22 -118 0 -179 -3 -175 -10z"
                  />
                  <path
                    d="M4275 4518 c-3 -8 -5 -46 -3 -84 l3 -69 67 -3 c99 -4 108 4 108 88
l0 70 -69 0 c-38 0 -76 3 -85 6 -9 4 -18 0 -21 -8z"
                  />
                  <path
                    d="M3563 4243 c-40 -5 -103 -65 -103 -99 0 -13 -4 -24 -10 -24 -5 0 -10
-16 -10 -35 0 -19 5 -35 11 -35 5 0 7 -5 4 -11 -4 -5 5 -27 18 -48 42 -64 79
-71 364 -71 l244 0 -18 -27 c-26 -39 -43 -80 -43 -106 0 -36 -20 -47 -82 -47
l-58 0 0 -243 c0 -235 1 -245 21 -263 20 -18 40 -19 304 -19 l283 0 21 24 c20
23 21 35 21 263 l0 238 -68 0 c-77 0 -92 9 -92 56 0 18 -4 43 -9 56 -12 33
-66 88 -85 88 -9 0 -16 5 -16 11 0 7 -22 9 -67 4 -38 -4 -185 -9 -328 -11
-286 -6 -320 -1 -367 48 -24 26 -26 35 -23 92 3 71 13 96 50 120 23 15 86 17
663 19 l637 2 -610 5 c-335 3 -594 8 -575 11 l35 6 -40 0 c-22 0 -54 -2 -72
-4z m-96 -175 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m821 -204
c26 -26 34 -43 35 -76 l2 -43 -116 -3 c-132 -3 -145 3 -134 61 8 40 55 93 88
100 47 10 92 -4 125 -39z"
                  />
                  <path
                    d="M5300 4200 l0 -40 125 0 c72 0 135 -5 149 -11 32 -15 51 -67 36 -100
-18 -40 -54 -49 -187 -49 l-123 0 0 -40 0 -40 136 0 c168 0 208 -17 208 -87 0
-43 -31 -70 -89 -77 -56 -7 -173 -16 -217 -16 -37 0 -38 -1 -38 -36 l0 -37
163 5 c170 5 189 9 236 56 20 21 26 37 29 89 4 60 3 64 -29 96 -19 18 -43 39
-54 45 -19 10 -19 12 13 39 35 30 51 86 38 136 -7 31 -59 87 -79 87 -9 0 -19
5 -22 10 -4 6 -65 10 -151 10 l-144 0 0 -40z"
                  />
                  <path d="M5920 4200 l0 -40 210 0 210 0 0 40 0 40 -210 0 -210 0 0 -40z" />
                  <path
                    d="M6745 4230 c-3 -5 -16 -10 -27 -10 -23 0 -73 -35 -113 -78 -35 -37
-61 -98 -67 -154 l-6 -48 49 0 c48 0 49 1 49 30 0 69 56 145 128 176 22 9 69
14 128 14 l94 0 0 40 0 40 -114 0 c-66 0 -117 -4 -121 -10z"
                  />
                  <path d="M7160 4200 l0 -40 230 0 230 0 0 40 0 40 -230 0 -230 0 0 -40z" />
                  <path
                    d="M7810 4200 l0 -40 135 0 c74 0 135 -4 135 -9 0 -5 9 -11 20 -14 31
-8 28 -86 -5 -115 -22 -19 -38 -22 -152 -24 l-128 -3 -3 -37 -3 -38 145 0 c91
0 146 -4 146 -10 0 -5 6 -10 14 -10 19 0 46 -38 46 -65 0 -11 -12 -33 -26 -50
l-25 -29 -147 -6 -147 -5 0 -35 0 -35 132 -5 c72 -3 129 -2 126 3 -2 4 11 7
30 7 19 0 48 7 65 16 57 28 79 77 73 164 -1 25 -40 80 -57 80 -5 0 -18 7 -28
15 -18 14 -18 15 10 42 30 29 54 73 54 99 0 8 -9 34 -21 58 -33 71 -76 86
-249 86 l-140 0 0 -40z"
                  />
                  <path
                    d="M8412 4023 c2 -162 6 -217 16 -221 6 -2 12 -11 12 -20 0 -38 123
-124 152 -105 16 9 8 64 -13 81 -50 41 -56 48 -67 69 -8 14 -12 88 -12 217 l0
196 -46 0 -46 0 4 -217z"
                  />
                  <path
                    d="M8800 4070 c0 -198 -9 -237 -62 -286 -32 -28 -38 -40 -38 -74 0 -39
1 -40 28 -34 41 11 88 45 109 79 38 63 43 96 43 293 l0 192 -40 0 -40 0 0
-170z"
                  />
                  <path
                    d="M9000 4234 c0 -4 9 -15 21 -25 11 -9 20 -21 20 -26 0 -4 7 -17 17
-29 9 -11 18 -27 20 -35 2 -8 8 -15 13 -17 5 -2 9 -9 9 -16 0 -7 8 -21 18 -32
9 -10 23 -31 31 -46 8 -16 18 -28 23 -28 4 0 8 -6 8 -13 0 -7 9 -23 20 -34 17
-19 20 -38 22 -145 l3 -123 48 -3 47 -3 0 120 0 120 -60 93 c-33 51 -64 98
-70 105 -5 7 -10 15 -10 18 0 3 -18 33 -40 66 -41 59 -41 59 -90 59 -28 0 -50
-3 -50 -6z"
                  />
                  <path
                    d="M9437 4222 c-10 -10 -17 -24 -17 -30 0 -7 -4 -12 -8 -12 -5 0 -15
-12 -23 -27 -8 -16 -24 -38 -37 -51 -12 -13 -20 -27 -17 -32 3 -4 0 -10 -7
-12 -13 -5 33 -58 50 -58 8 0 162 223 162 235 0 3 -20 5 -43 5 -30 0 -49 -6
-60 -18z"
                  />
                  <path
                    d="M7352 4042 c-9 -6 -12 -51 -10 -188 l3 -179 43 -3 42 -3 -2 188 -3
188 -30 3 c-16 1 -36 -2 -43 -6z"
                  />
                  <path d="M5920 3960 l0 -40 190 0 190 0 0 40 0 40 -190 0 -190 0 0 -40z" />
                  <path
                    d="M6885 3914 c-15 -103 -80 -148 -235 -164 -52 -5 -98 -10 -102 -10 -5
0 -8 -16 -8 -36 l0 -36 123 4 c113 3 127 6 171 32 90 52 146 135 146 214 l0
42 -44 0 -44 0 -7 -46z"
                  />
                  <path
                    d="M6068 3743 l-148 -4 0 -34 0 -35 210 0 210 0 0 40 0 40 -62 -2 c-35
-1 -129 -4 -210 -5z"
                  />
                </g>
              </svg>
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-white hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#E56A40] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    {/* <img
                      className="w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    /> */}
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default NewHeader;
