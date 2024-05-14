import React from "react";
import Slider from "react-slick";

import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Product from "./products/Product";
import Heading from "./products/Heading";
import { useGetFeaturedProductsQuery } from "../../slices/productsApiSlice";

const OurBestSellers = () => {
  const { data: featuredProducts } = useGetFeaturedProductsQuery({});
  console.log(featuredProducts);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

// const data = [
//   {
//     id: 1,
//     image:
//       "https://elyssi.redpixelthemes.com/assets/img/unlicensed/shoes-4.png",
//     name: "Siberian Boots",
//     price: "$67",
//   },
//   {
//     id: 2,
//     image:
//       "https://elyssi.redpixelthemes.com/assets/img/unlicensed/watch-3.png",
//     name: "Siberian Boots",
//     price: "$67",
//   },
//   {
//     id: 3,
//     image:
//       "https://elyssi.redpixelthemes.com/assets/img/unlicensed/backpack-2.png",
//     name: "Siberian Boots",
//     price: "$67",
//   },
//   {
//     id: 4,
//     image:
//       "https://elyssi.redpixelthemes.com/assets/img/unlicensed/purse-1.png",
//     name: "Siberian Boots",
//     price: "$67",
//   },
//   {
//     id: 5,
//     image:
//       "https://elyssi.redpixelthemes.com/assets/img/unlicensed/sunglass-3.png",
//     name: "Siberian Boots",
//     price: "$67",
//   },
//   {
//     id: 6,
//     image:
//       "https://elyssi.redpixelthemes.com/assets/img/unlicensed/watch-1.png",
//     name: "Siberian Boots",
//     price: "$67",
//   },
//   {
//     id: 7,
//     image:
//       "https://elyssi.redpixelthemes.com/assets/img/unlicensed/backpack-2.png",
//     name: "Siberian Boots",
//     price: "$67",
//   },
//   {
//     id: 8,
//     image:
//       "https://elyssi.redpixelthemes.com/assets/img/unlicensed/shoes-1.png",
//     name: "Siberian Boots",
//     price: "$67",
//   },
// ];
