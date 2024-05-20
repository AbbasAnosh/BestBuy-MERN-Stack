import { AiOutlineShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../../Rating";
import { HiOutlineViewGrid } from "react-icons/hi";

import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "../../../slices/cartSlice";
import { NewProductProps } from "../../../types/ProductType";

const NewProduct = (product: NewProductProps) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full relative group border-[1px] border-[#064F48] hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group">
      <div className="w-full h-72 flex items-center justify-center bg-white overflow-hidden">
        <div className="relative w-full h-full">
          <Link to={`/product/${product?._id}`}>
            <img
              src={product.image}
              alt="product image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Link>
          <div
            className="absolute bottom-0 w-full flex items-center gap-5
      justify-center translate-y-[110%] group-hover:-translate-y-4 transition-transform duration-300"
          >
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
              Add to cart
            </button>
            <Link
              to={`/product/${product._id}`}
              className="bg-[#064F48] text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-[#E56A40] hover:text-white duration-200"
            >
              <span>
                <HiOutlineViewGrid />
              </span>
              Quick view
            </Link>
          </div>
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
