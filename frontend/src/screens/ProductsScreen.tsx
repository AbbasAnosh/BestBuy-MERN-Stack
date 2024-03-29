import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { IoChevronForward } from "react-icons/io5";
import axios from "axios";

interface ProductProps {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

const ProductsScreen = () => {
  const { id: ProductId } = useParams<{ id: string }>();
  const [Product, setProduct] = useState<ProductProps | null>(null);
  useEffect(() => {
    const fetchedProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/products/${ProductId}`
      );

      setProduct(data);
    };
    fetchedProduct();
  }, [ProductId]);

  return (
    <div className="bg-[#EEE1D1]">
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="mb-10 flex items-center space-x-2 font-semibold">
          <Link to="/" className="hover:text-[#E56A40]">
            Home
          </Link>
          <IoChevronForward className="text-[#E56A40]" />
          <p>Product Page</p>
        </div>
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            {/* <div className="sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4">
              <img
                src="https://readymadeui.com/images/product1.webp"
                alt="Product1"
                className="w-full cursor-pointer outline"
              />
              <img
                src="https://readymadeui.com/images/product6.webp"
                alt="Product2"
                className="w-full cursor-pointer"
              />
              <img
                src="https://readymadeui.com/images/product7.webp"
                alt="Product3"
                className="w-full cursor-pointer"
              />
              <img
                src="https://readymadeui.com/images/product3.webp"
                alt="Product4"
                className="w-full cursor-pointer"
              />
            </div> */}
            <img
              src={Product?.image}
              alt="Product"
              className="w-4/5 rounded object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#0B514B]">
              {Product?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-semibold text-[#E56A40]">Price: </p>
              <p className="text-[#514C49] text-xl font-bold">
                ${Product?.price}
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              <Rating value={Product?.rating} reviews={Product?.numReviews} />
            </div>
            <div className="mt-8">
              <div className="flex items-center space-x-10">
                <h3 className="text-lg font-bold  text-[#0B514B]">Status: </h3>
                <p className="text-md font-semibold bg-[#E56A40] text-[#EEE1D1] p-3 rounded-lg">
                  {Product?.countInStock! > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>
              <button
                type="button"
                disabled={Product?.countInStock === 0}
                className="w-full mt-4 px-4 py-3 bg-[#0B514B] hover:bg-[#E56A40] text-[#EEE1D1]
                cursor-pointer font-bold rounded"
              >
                Add to cart
              </button>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-[#0B514B]">
                About the item
              </h3>
              <div className="space-y-3 mt-4 text-sm text-[#514C49]">
                {Product?.description}
              </div>
            </div>
            {/* <div className="mt-8 max-w-md">
              <h3 className="text-lg font-bold text-[#0B514B]">Reviews(10)</h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">5.0</p>
                  <svg
                    className="w-5 fill-gray-800 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-300 rounded w-full h-2 ml-3">
                    <div className="w-2/3 h-full rounded bg-gray-800"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">4.0</p>
                  <svg
                    className="w-5 fill-gray-800 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-300 rounded w-full h-2 ml-3">
                    <div className="w-1/3 h-full rounded bg-gray-800"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">3.0</p>
                  <svg
                    className="w-5 fill-gray-800 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-300 rounded w-full h-2 ml-3">
                    <div className="w-1/6 h-full rounded bg-gray-800"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">2.0</p>
                  <svg
                    className="w-5 fill-gray-800 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-300 rounded w-full h-2 ml-3">
                    <div className="w-1/12 h-full rounded bg-gray-800"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">1.0</p>
                  <svg
                    className="w-5 fill-gray-800 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <div className="bg-gray-300 rounded w-full h-2 ml-3">
                    <div className="w-[6%] h-full rounded bg-gray-800"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                </div>
              </div>
              <button
                type="button"
                className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded"
              >
                Read all reviews
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
