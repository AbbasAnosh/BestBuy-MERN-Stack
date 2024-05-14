import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ParentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      image: "/img/bag.png",
      text: "Explore our exclusive collection of bags. Find your perfect match!",
    },
    {
      id: 2,
      image: "/img/headphone.png",
      text: "Discover the latest in headphone technology and immerse yourself in sound.",
    },
    {
      id: 3,
      image: "/img/sneakers.png",
      text: "Step up your game with our stylish and comfortable sneakers.",
    },
  ];

  const numberOfSlides = data.length;
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? numberOfSlides - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === numberOfSlides - 1 ? 0 : prev + 1));
  };
  const autoSlideTime = 5000;

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, autoSlideTime);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="relative overflow-hidden h-[calc(100vh-10rem)] w-full">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${numberOfSlides * 100}vw`,
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {data.map((slide, index) => (
          <div
            key={slide.id}
            className="w-screen flex items-center flex-col md:flex-row h-full bg-gradient-to-r from-blue-500 to-blue-300"
          >
            <div className="w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center items-center  p-10 text-center">
              <h1 className="text-white text-xl md:text-5xl font-bold mb-4">
                {slide.text}
              </h1>
              <button className="md:mt-4 px-6 py-2 bg-white text-blue-500 font-bold rounded hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full">
              <img
                className="w-56 h-56 md:h-full md:w-full object-cover"
                src={slide.image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex absolute inset-x-0 bottom-0 lg:bottom-16 justify-center gap-2.5">
        <div
          className="w-8 h-8 lg:w-12 lg:h-12 bg-white flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-200 transition-colors"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-blue-500 text-2xl" />
        </div>
        <div
          className="w-8 h-8 lg:w-12 lg:h-12 bg-white flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-200 transition-colors"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-blue-500 text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ParentSlider;
