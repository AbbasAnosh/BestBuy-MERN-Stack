import NextArrowSample from "./NextArrow";
import PrevArrowSample from "./PrevArrow";
import Product from "./products/Product";
import Heading from "./products/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetNewArrivalQuery } from "../../slices/productsApiSlice";

const NewArrivals = () => {
  const { data: newArrivals } = useGetNewArrivalQuery({});

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrowSample onClick={() => {}} />,
    prevArrow: <PrevArrowSample onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full py-12 relative">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {newArrivals?.map((product) => (
          <div key={product.id} className="px-2">
            <Product
              id={product._id}
              img={product.image}
              productName={product.name}
              price={product.price}
              rating={product.rating}
              review={product.numReviews}
              isNewArrival={product.isNewArrival}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
