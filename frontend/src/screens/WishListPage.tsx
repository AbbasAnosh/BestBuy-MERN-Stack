import moment from "moment";
import {
  useGetWishListQuery,
  useRemoveProductFromWishListMutation,
} from "../slices/wishListApiSlice";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { addToCart } from "../slices/cartSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Breadcrumbs from "../components/shopComponent/BreadCrumps";
import { useEffect, useState } from "react";

const WishListPage = () => {
  const { data: wishlistData, refetch } = useGetWishListQuery({});
  const wishlistItems = wishlistData?.wishlistItems;

  const [removeProductFromWishList] = useRemoveProductFromWishListMutation();

  const deleteHandler = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await removeProductFromWishList(id).unwrap();
        toast.success("Product deleted successfully");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = (product) => {
    const productToAdd = {
      ...product,
      qty: product.qty || 1,
    };

    dispatch(addToCart(productToAdd));
    navigate("/cart");
  };

  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.from || "Shop");
  }, [location]);

  return (
    <div className="max-w-7xl mx-auto ">
      <Breadcrumbs title="wishlist" prevLocation={prevLocation} />
      {!wishlistItems || wishlistItems.length === 0 ? (
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
              Your wishlist is empty
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
          <div className="py-4">
            <div className="flex items-center justify-between py-7 px-10">
              <div>
                <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
                  WishList Products
                </h1>
              </div>
            </div>
            <table className="w-full border-b border-gray-200">
              <thead>
                <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                  <td className="pl-10">
                    <div className="flex items-center gap-x-4">
                      <span>Product Name</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">Pricing</td>
                  <td className="py-4 px-4 text-center">Brand</td>
                  <td className="py-4 px-4 text-center">Rating</td>
                  <td className="py-4 pr-10 pl-4 text-center">
                    <img
                      src="../../public/icons/filter.svg"
                      className="w-6 h-6 fill-current"
                      alt=""
                    />
                  </td>
                </tr>
              </thead>
              <tbody>
                {wishlistItems?.map((product) => {
                  const { image, name, price, category, brand, rating } =
                    product.product;
                  return (
                    <>
                      <tr
                        className="hover:bg-gray-100 transition-colors group"
                        key={product._id}
                      >
                        <td className="flex gap-x-4 items-center py-4 pl-10">
                          <img
                            src={image}
                            alt=""
                            className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                          />
                          <div>
                            <a
                              href="#"
                              className="text-lg font-semibold text-gray-700"
                            >
                              {name}
                            </a>
                            <div className="font-medium text-gray-400">
                              {category}
                            </div>
                          </div>
                        </td>
                        <td className="font-medium text-center">${price}</td>
                        <td className="font-medium text-center">{brand}</td>
                        <td className="text-center">
                          <span className="font-medium">{rating}</span>
                          <span className="text-gray-400">/5</span>
                        </td>

                        <td>
                          <span className="inline-block w-20 group-hover:hidden">
                            {moment(product.addedAt).format("MMMM Do YYYY")}
                          </span>
                          <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                            <div
                              onClick={() => addToCartHandler(product.product)}
                              className="p-2 text-black hover:rounded-md hover:bg-gray-200"
                            >
                              <FaShoppingCart />
                            </div>
                            <button
                              onClick={() => deleteHandler(product._id)}
                              className="p-2 hover:rounded-md hover:bg-gray-200"
                            >
                              <img
                                src="/icons/trash.svg"
                                className="w-6 h-6 fill-current"
                                alt=""
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default WishListPage;
