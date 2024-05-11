import Slider from "../components/Slider";
import Services from "../components/Services";
import Trends from "../components/Trends";
import TrendingProduct from "../components/TrendingProduct";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { ProductProps } from "../types/ProductType";
import SliderTrend from "../components/SliderTrend";

import Offer from "../components/Offer";

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
            <div className=" py-20">
              <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                <h1 className="text-3xl text-center mb-10 font-bold text-[#064F48]">
                  Top Products
                </h1>

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
      <Offer />
      <div className="py-16">
        {/* <div className="flex justify-between max-w-[1450px] mx-auto items-center">
          <div className="space-y-2">
            <h1 className="text-3xl text-[#064F48] font-semibold">
              {"BesyBuy's trends"}
            </h1>
            <p className="text-xl">Be styling, no matter the season!</p>
          </div>
          <Link
            to="/"
            className="text-start text-xl hover:underline underline-[#064F48] font-medium"
          >
            Show more
          </Link>
        </div> */}
        <SliderTrend />
      </div>
    </div>
  );
};

export default Homepage;
