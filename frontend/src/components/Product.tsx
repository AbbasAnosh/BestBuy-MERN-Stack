import { Link } from "react-router-dom";
import Rating from "./Rating";
import { ProductProps } from "../types/ProductType";

const Product = (product: ProductProps) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="bg-[#FDCA44] shadow-md overflow-hidden rounded cursor-pointer hover:-translate-y-2 transition-all relative">
        <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            ></path>
          </svg>
        </div>
        <div className="w-11/12 h-[220px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
          <img
            src={product.image}
            alt="Product 1"
            className="h-full w-full rounded-xl object-contain"
          />
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-lg font-bold text-[#075049] product_title">
            {product.name}
          </h3>
          <h4 className="text-lg text-[#E56A40] font-bold mt-2">
            ${product.price}
          </h4>
          <p className="text-gray-500 text-sm mt-2">
            {product.description.length > 105
              ? `${product.description.substring(0, 105)}...`
              : product.description}
          </p>
          <Rating value={product.rating} reviews={product.numReviews} />
        </div>
      </div>
    </Link>
  );
};

export default Product;
