// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { BiSolidCartAlt } from "react-icons/bi";
// import { MdFavoriteBorder } from "react-icons/md";

// interface ArrowProps {
//   className?: string;
//   style?: React.CSSProperties;
//   onClick?: () => void;
// }

// const SampleNextArrow: React.FC<ArrowProps> = ({
//   className,
//   style,
//   onClick,
// }) => {
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "#064F48",
//         color: "white",
//         borderRadius: "50%",
//         width: "40px",
//         height: "40px",
//         textAlign: "center",
//         cursor: "pointer",
//         fontSize: "24px",
//         lineHeight: "40px",
//         right: "20px",
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };

// const SamplePrevArrow: React.FC<ArrowProps> = ({
//   className,
//   style,
//   onClick,
// }) => {
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "#064F48",
//         color: "white",
//         borderRadius: "50%",
//         width: "40px",
//         height: "40px",
//         zIndex: "10",
//         textAlign: "center",
//         cursor: "pointer",
//         fontSize: "24px",
//         lineHeight: "40px",
//         left: "-10px",
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };

// const SliderTrend: React.FC = () => {
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

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-[90vw] h-[50vh] mx-auto lg:pl-[45px]">
//       <Slider {...settings}>
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className="card group inline-block m-2.5 max-w-[280px] text-center bg-white border border-gray-300 rounded-lg p-5 shadow-sm hover:shadow-md relative overflow-hidden"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-[150px] object-cover rounded-t-lg"
//             />
//             <h3 className="text-lg mt-0">{item.name}</h3>
//             <p className="text-base text-gray-600 mb-5">{item.price}</p>
//             <div className="icons opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 ease-in-out">
//               <button
//                 type="button"
//                 className=" bg-purple-500 text-white p-2 rounded-full shadow-lg z-10 text-xl"
//               >
//                 <BiSolidCartAlt />
//               </button>
//               <button
//                 type="button"
//                 className=" bg-purple-500 text-white p-2 rounded-full shadow-lg z-10 text-xl"
//               >
//                 <MdFavoriteBorder />
//               </button>
//             </div>
//             <div className="overlay absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition-opacity duration-300 ease-in-out"></div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SliderTrend;
