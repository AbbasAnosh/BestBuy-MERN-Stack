import { ProductProps } from "../../types/ProductType";
import Rating from "../Rating";

const Product = (product: ProductProps) => {
  return (
    <div className="block ">
      <div className="bg-[#FDCA44]  shadow-lg overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative group">
        <div className="relative mx-auto h-[230px] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <button className="absolute inset-0 m-auto w-32 h-10 bg-[#075049] text-white font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Add to card
          </button>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-md font-bold text-[#075049]">
            {" "}
            {product.name.length > 25
              ? `${product.name.substring(0, 20)}...`
              : product.name}
          </h3>
          <h4 className="text-md text-[#E56A40] font-bold mt-2">
            ${product.price}
          </h4>
          <p className="text-gray-500 text-sm mt-2">
            {product.description.length > 105
              ? `${product.description.substring(0, 105)}...`
              : product.description}
          </p>
          <Rating value={product.rating} review={product.numReviews} />
        </div>
      </div>
    </div>
  );
};

export default Product;
