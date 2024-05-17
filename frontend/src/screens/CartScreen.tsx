import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoChevronForward } from "react-icons/io5";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { motion } from "framer-motion";
import Breadcrumbs from "../components/shopComponent/BreadCrumps";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: any) => state.cart);

  const addToCartHandler = (product: any, qty: any) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFomCartHandler = (id: any) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  return (
    <div className="bg-[#EEE1D1]">
      <div className="p-4 lg:max-w-7xl max-w-xl mx-auto pb-20 ">
        <div className="mb-10 flex items-center space-x-2 font-semibold">
          <Breadcrumbs title="Cart Screen" prevLocation="" />
        </div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
          >
            <div>
              <img
                className="w-80 rounded-lg p-4 mx-auto"
                src="/empty-cart.svg"
                alt="emptyCart"
              />
            </div>
            <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
              <h1 className="text-[#064F48] text-xl font-bold uppercase">
                Your Cart is empty
              </h1>
              <p className="text-sm text-center px-10 -mt-2">
                {
                  "It’s waiting to be filled! Add some items to your cart, like books, gadgets, or movies, and make it complete."
                }
              </p>
              <Link to="/shop">
                <button className="rounded-md cursor-pointer bg-[#064F48] hover:bg-[#E56645] px-8 py-2 font-semibold text-lg text-gray-200 hover:text-white duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 gap-12 ">
              <div className="lg:col-span-2 divide-y-2 divide-[#E56A40] shadow-lg p-4 bg-[#064D46] rounded-md">
                {cartItems.map((item: any) => (
                  <div
                    className="flex max-sm:flex-col gap-8 py-6"
                    key={item._id}
                  >
                    <div className="h-52 w-52 shrink-0 rounded-md">
                      <img
                        src={item.image}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-xl font-extrabold text-[#D3D1C2] mb-8 text-nowrap">
                        {item.name}
                      </h3>

                      <div className="flex items-center justify-between ">
                        <h4 className="w-1/3 text-lg font-bold text-[#D3D1C2] text-nowrap ">
                          ${item.price}
                        </h4>
                        <div className="w-1/3">
                          <form className="border-0">
                            <select
                              value={item.qty}
                              id="qty"
                              onChange={(e) =>
                                addToCartHandler(item, Number(e.target.value))
                              }
                              className="bg-[#E56A40] border-0 focus:border-0 focus:ring-0 outline-none text-[#D3D1C2] text-semibold
                              block w-16 p-2.5 rounded-md custom-select"
                            >
                              {[...Array(item.countInStock).keys()].map((p) => (
                                <option key={p + 1} value={p + 1}>
                                  {p + 1}
                                </option>
                              ))}
                            </select>
                          </form>
                        </div>
                        <div className="bg-[#D3D1C2] rounded-lg">
                          <button
                            onClick={() => removeFomCartHandler(item._id)}
                            type="button"
                            className="font-semibold text-[#E56A40] p-2 text-sm flex items-center gap-2 shrink-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 fill-current inline"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                data-original="#000000"
                              ></path>
                              <path
                                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                data-original="#000000"
                              ></path>
                            </svg>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="shadow-lg p-6 bg-[#E56A40] max-h-[17rem] rounded-lg">
                <h3 className="text-xl font-extrabold text-[#EEE1D1] border-b border-[#EEE1D1] pb-4">
                  Order Summary
                </h3>
                <ul className="text-[#333] divide-y mt-6">
                  <li className="flex text-[#EEE1D1] flex-wrap gap-4 text-md py-4">
                    Subtotal (
                    {cartItems.reduce(
                      (acc: any, item: any) => acc + item.qty,
                      0
                    )}
                    ) items
                    <span className="ml-auto font-bold">
                      $
                      {cartItems
                        .reduce(
                          (acc: any, item: any) => acc + item.qty * item.price,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </li>
                </ul>
                <button
                  onClick={checkoutHandler}
                  type="button"
                  disabled={cartItems.length == 0}
                  className="mt-6 font-semibold px-6 py-2.5 w-full bg-[#064F48] hover:bg-[#EEE1D1]
                   text-white hover:text-[#064F48] rounded"
                >
                  Check out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
