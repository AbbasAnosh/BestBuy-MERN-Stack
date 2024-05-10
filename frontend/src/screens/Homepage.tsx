import React from "react";
import Slider from "../components/Slider";
import Services from "../components/Services";
import Trends from "../components/Trends";
import TrendingProduct from "../components/TrendingProduct";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { ProductProps } from "../types/ProductType";
import SliderTrend from "../components/SliderTrend";

const Homepage = () => {
  const { data, isLoading, error } = useGetProductsQuery({});
  const iserror: any = error;
  return (
    <div>
      <Slider />
      <Services />
      {/* <Trends /> */}
      <div>
        {isLoading ? (
          <>
            <h3>isLoading</h3>
          </>
        ) : error ? (
          <div>{iserror?.data?.message}</div>
        ) : (
          <>
            <div className=" bg-[#EEE1D1] py-20">
              <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                <div className="flex flex-col items-center space-y-10">
                  <h1 className="text-3xl font-bold text-[#064F48]">
                    Trending Product
                  </h1>
                  <p className="text-xl font-semibolds max-w-3xl pb-16 text-center">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {data &&
                    data?.map((product: ProductProps) => (
                      <TrendingProduct {...product} key={product._id} />
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <SliderTrend />
    </div>
  );
};

export default Homepage;
