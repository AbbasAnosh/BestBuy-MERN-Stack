import Services from "../components/Services";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import { NewProductProps } from "../types/ProductType";

import NewArrivals from "../components/home/NewArrival";
import Heading from "../components/home/products/Heading";
import YearProduct from "../components/home/YearProduct";
import NewProduct from "../components/home/products/NewProdcut";
import { useEffect, useState } from "react";
import CartIcon from "../components/home/products/CartIcon";
import BannerSlider from "../components/home/products/BannerSlider";
import FeaturedProdcuts from "../components/home/FeaturedProducts";

const Homepage = () => {
  const [showCartIcon, setShowCartIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowCartIcon(true);
      } else {
        setShowCartIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data, isLoading, error } = useGetTopProductsQuery({});

  const iserror: any = error;
  return (
    <>
      {showCartIcon && (
        <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50">
          <CartIcon />
        </div>
      )}
      <div>
        <BannerSlider />
        <Services />
        <div className="max-w-7xl mx-auto px-4">
          <NewArrivals />
          <FeaturedProdcuts />
          <div className="pt-20">
            <YearProduct />
          </div>
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
                      data?.map((product: NewProductProps) => (
                        <div>
                          <NewProduct {...product} key={product._id} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
