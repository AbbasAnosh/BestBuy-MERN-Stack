import { Link } from "react-router-dom";
import { ProductProps } from "../types/ProductType";
import Rating from "./Rating";

const TrendingProduct = (product: ProductProps) => {
  return (
    <Link to={`/product/${product._id}`} className="block ">
      <div className="bg-gray-100 p-2 group overflow-hidden cursor-pointer relative z-40 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
        <div className="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-2 transition-all duration-300">
          <div className="text-center">
            <p className="text-slate-500">{product.category}</p>
            <h3 className="text-lg font-bold text-[#075049]">
              {" "}
              {product.name.length > 25
                ? `${product.name.substring(0, 20)}...`
                : product.name}
            </h3>
            <h4 className="text-lg text-[#E56A40] font-bold mt-2">
              ${product.price}
            </h4>
            <Rating value={product.rating} review={product.numReviews} />
          </div>
          {/* <p className="text-gray-500 text-sm mt-2">
            {product.description.length > 80
              ? `${product.description.substring(0, 80)}...`
              : product.description}
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default TrendingProduct;
