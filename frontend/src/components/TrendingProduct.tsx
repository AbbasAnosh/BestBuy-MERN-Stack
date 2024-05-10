import { Link } from "react-router-dom";
import { ProductProps } from "../types/ProductType";
import Rating from "./Rating";

const TrendingProduct = (product: ProductProps) => {
  return (
    <Link to={`/product/${product._id}`} className="block ">
      <div className="bg-[#FDCA44]  shadow-lg overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative group">
        <div className="relative mx-auto h-[230px] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <button className="absolute inset-0 m-auto w-32 h-10 bg-[#075049] text-white font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Add to card
          </button>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-lg font-bold text-[#075049]">
            {" "}
            {product.name.length > 25
              ? `${product.name.substring(0, 20)}...`
              : product.name}
          </h3>
          <h4 className="text-lg text-[#E56A40] font-bold mt-2">
            ${product.price}
          </h4>
          <p className="text-gray-500 text-sm mt-2">
            {product.description.length > 105
              ? `${product.description.substring(0, 105)}...`
              : product.description}
          </p>
          <Rating value={product.rating} reviews={product.numReviews} />
        </div>
      </div>
    </Link>
  );
};

export default TrendingProduct;

// import React, { useEffect, useState } from "react";

// const SliderTrend = () => {
//   const data = [
//     {
//       id: 1,
//       image:
//         "https://elyssi.redpixelthemes.com/assets/img/unlicensed/shoes-4.png",
//       name: "Siberian Boots",
//       price: "$67",
//     },
//     {
//       id: 2,
//       image:
//         "https://elyssi.redpixelthemes.com/assets/img/unlicensed/watch-3.png",
//       name: "Siberian Boots",
//       price: "$67",
//     },
//     {
//       id: 3,
//       image:
//         "https://elyssi.redpixelthemes.com/assets/img/unlicensed/backpack-2.png",
//       name: "Siberian Boots",
//       price: "$67",
//     },
//     {
//       id: 4,
//       image:
//         "https://elyssi.redpixelthemes.com/assets/img/unlicensed/purse-1.png",
//       name: "Siberian Boots",
//       price: "$67",
//     },
//     {
//       id: 5,
//       image:
//         "https://elyssi.redpixelthemes.com/assets/img/unlicensed/sunglass-3.png",
//       name: "Siberian Boots",
//       price: "$67",
//     },
//     {
//       id: 6,
//       image:
//         "https://elyssi.redpixelthemes.com/assets/img/unlicensed/watch-1.png",
//       name: "Siberian Boots",
//       price: "$67",
//     },
//     {
//       id: 7,
//       image:
//         "https://elyssi.redpixelthemes.com/assets/img/unlicensed/backpack-2.png",
//       name: "Siberian Boots",
//       price: "$67",
//     },
//     {
//       id: 8,
//       image:
//         "https://elyssi.redpixelthemes.com/assets/img/unlicensed/shoes-1.png",
//       name: "Siberian Boots",
//       price: "$67",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const length = data.length;
//   const slidesToShow = 4;
//   const slidesToScroll = 1;
//   const autoplayInterval = 5000; // 5 seconds

//   const nextSlide = () => {
//     setCurrentSlide(
//       (currentSlide + slidesToScroll) % (length - slidesToShow + 1)
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (currentSlide - slidesToScroll + length - slidesToShow + 1) %
//         (length - slidesToShow + 1)
//     );
//   };

//   useEffect(() => {
//     const autoplay = setInterval(nextSlide, autoplayInterval);
//     return () => clearInterval(autoplay);
//   }, [autoplayInterval]);

//   return (
//     <div className="relative flex items-center overflow-hidden">
//       <button
//         className="absolute left-0 z-10 bg-transparent text-3xl text-black cursor-pointer"
//         onClick={prevSlide}
//       >
//         &#10094;
//       </button>
//       <div className="w-full flex transition-transform duration-1000 ease-in-out">
//         {data
//           .slice(currentSlide, currentSlide + slidesToShow)
//           .map((item, index) => (
//             <div key={index} className="w-full flex justify-center">
//               <div className="w-full max-w-sm p-4 bg-white shadow-lg rounded-lg mx-2">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold">{item.name}</h3>
//                   <p className="text-gray-500">{item.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//       <button
//         className="absolute right-0 z-10 bg-transparent text-3xl text-black cursor-pointer"
//         onClick={nextSlide}
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default SliderTrend;
