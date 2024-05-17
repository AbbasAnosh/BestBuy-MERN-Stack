import { BsArrowsFullscreen } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../../Rating";

import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "../../../slices/cartSlice";
import { NewProductProps } from "../../../types/ProductType";

const NewProduct = (product: NewProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full relative group border-[1px] border-black hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group">
      <div className="w-full h-72 flex items-center justify-center bg-white overflow-hidden">
        <div className="relative">
          <Link to={`/product/${product?._id}`}>
            <img
              src={product.image}
              alt="product image"
              width={700}
              height={700}
              className="w-72 h-64 object-contain"
            />
          </Link>
          <div className="abosute bottom-0 flex items-center gap-5 justify-center translate-y-[110%] group-hover:-translate-y-2 transition-transform duration-300">
            <button
              onClick={() => {
                const productToAdd = {
                  ...product,
                  qty: product.qty || 1,
                };
                dispatch(addToCart(productToAdd));
                toast.success("... added to cart");
              }}
              className="bg-[#064F48] text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-[#E56A40] hover:text-white duration-200"
            >
              <span>
                <AiOutlineShopping />
              </span>
              Add to bag
            </button>
            <Link
              to={`/product/${product._id}`}
              className="bg-[#064F48] text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-[#E56A40] hover:text-white duration-200"
            >
              <span>
                <BsArrowsFullscreen />
              </span>
              Quick view
            </Link>
          </div>
          {/* {product?.isnew && (
            <div className="absolute top-2 right-2 z-50">
              <p className="bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md">
                New
              </p>
            </div>
          )} */}
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-bold">
            {product.name.length > 15
              ? `${product.name.substring(0, 15)}...`
              : product.name}
          </h2>
          <div className="flex items-center gap-2">
            <p className="">${product.price}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-[#767676] text-sm">
            a product by{" "}
            <span className="font-semibold text-primeColor">
              {product?.brand}
            </span>
          </p>
        </div>

        <Rating value={product.rating} review={product.numReviews} />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "white",
            color: "black",
          },
        }}
      />
    </div>
  );
};

export default NewProduct;
