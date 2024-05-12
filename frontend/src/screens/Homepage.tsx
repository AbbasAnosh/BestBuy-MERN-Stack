import Services from "../components/Services";
import Trends from "../components/Trends";
import TrendingProduct from "../components/TrendingProduct";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { ProductProps } from "../types/ProductType";
import SliderTrend from "../components/SliderTrend";

import Offer from "../components/Offer";
import Banner from "../components/home/Banner";
import NewArrivals from "../components/home/NewArrival";
import Heading from "../components/home/products/Heading";
import OurBestSellers from "../components/home/OurBestSellers";
import YearProduct from "../components/home/YearProduct";
import ParentSlider from "../components/Slider";

const Homepage = () => {
  const { data, isLoading, error } = useGetProductsQuery({});
  const iserror: any = error;
  return (
    <div>
      <ParentSlider />
      {/* <Banner /> */}
      <Services />
      {/* <Trends /> */}
      <div className="max-w-7xl mx-auto px-4">
        <NewArrivals />
        <OurBestSellers />

        <YearProduct />
      </div>
      <div>
        {isLoading ? (
          <>
            <h3>isLoading</h3>
          </>
        ) : error ? (
          <div>{iserror?.data?.message}</div>
        ) : (
          <>
            <div className=" py-12">
              <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                <Heading heading="Top Products" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {data &&
                    data?.map((product: ProductProps) => (
                      <div>
                        <TrendingProduct {...product} key={product._id} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {/* <Offer /> */}
    </div>
  );
};

export default Homepage;
