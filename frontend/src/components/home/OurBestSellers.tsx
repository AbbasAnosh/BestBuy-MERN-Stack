import Slider from "react-slick";
import Product from "./products/Product";
import Heading from "./products/Heading";
import { useGetFeaturedProductsQuery } from "../../slices/productsApiSlice";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const OurBestSellers = () => {
  const { data: featuredProducts } = useGetFeaturedProductsQuery({});
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
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
    <div className="w-full py-12">
      <Heading heading="Featured Products" />
      <Slider {...settings}>
        {featuredProducts?.map((product) => (
          <div key={product.id} className="px-2">
            <Product
              id={product._id}
              img={product.image}
              productName={product.name}
              price={product.price}
              isFeatured={product.isFeatured}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurBestSellers;
