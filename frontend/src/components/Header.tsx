import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
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
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
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
