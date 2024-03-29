import { useEffect, useState } from "react";

import Product from "../components/Product";
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

const HomeScreen = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  // const fetchedProducts = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/api/products");
  //     const data = await response.json();
  //     setProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchedProducts();
  // }, []);

  useEffect(() => {
    const fetchedProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/api/products");
      setProducts(data);
    };
    fetchedProducts();
  }, []);
  return (
    <div className="font-[sans-serif] bg-[#EEE1D1]">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products &&
            products?.map((product) => (
              <Product product={product} key={product._id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
