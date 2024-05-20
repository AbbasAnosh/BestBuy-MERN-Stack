import NextArrowSample from "./NextArrow";
import PrevArrowSample from "./PrevArrow";
import Product from "./products/Product";
import Heading from "./products/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetNewArrivalQuery } from "../../slices/productsApiSlice";
import { NewProductProps } from "../../types/ProductType";

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
        {newArrivals?.map((product: NewProductProps) => (
          <div key={product._id} className="px-2">
            <Product {...product} key={product._id} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
