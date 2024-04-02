// import { useEffect, useState } from "react";
// import axios from "axios";

import Loader from "../components/Loader";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { ProductProps } from "../types/ProductType";

const HomeScreen = () => {
  const { data, isLoading, error } = useGetProductsQuery({});
  const iserror: any = error;
  console.log(data, "dfalsfksalfj;asdfj");

  // const [products, setProducts] = useState<ProductProps[]>([]);
  // // const fetchedProducts = async () => {
  // //   try {
  // //     const response = await fetch("http://localhost:8000/api/products");
  // //     const data = await response.json();
  // //     setProducts(data);
  // //   } catch (error) {
  // //     console.log(error);
  // //   }
  // // };
  // // useEffect(() => {
  // //   fetchedProducts();
  // // }, []);

  // useEffect(() => {
  //   const fetchedProducts = async () => {
  //     const { data } = await axios.get("http://localhost:8000/api/products");
  //     setProducts(data);
  //   };
  //   fetchedProducts();
  // }, []);
  return (
    <div>
      {isLoading ? (
        <>
          <h3>isLoading</h3>
        </>
      ) : error ? (
        <div>{iserror?.data?.message}</div>
      ) : (
        <>
          <div className="font-[sans-serif] bg-[#EEE1D1]">
            <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data &&
                  data?.map((product: ProductProps) => (
                    <Product {...product} key={product._id} />
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
