import { useEffect, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { x: "-30vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showHeadings, setShowHeadings] = useState(true);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/img/headphone.png",
      headings: [
        {
          title: "Discover Luxury",
          text: "Experience audio like never before with our premium headphones. Dive into deep bass, crisp highs, and an all-around stellar sound.",
        },
      ],
      button: "Shop Now",
    },
    {
      id: 2,
      image: "/img/img2.png",
      headings: [
        {
          title: "Step Up Your Game",
          text: "Hit the streets in style with our trendy sneakers. Perfect for the fashion-forward, active individual ready to make a statement.",
        },
      ],
      button: "Get Yours",
    },
    {
      id: 3,
      image: "/img/bag.png",
      headings: [
        {
          title: "Unmatched Clarity",
          text: "Whether it's music, podcasts, or calls, our headphones deliver unparalleled sound clarity to elevate your listening journey.",
        },
      ],
      button: "Find Your Pair",
    },
  ];

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);
  return (
    <div className="w-full h-auto overflow-x-hidden bg-gray-100">
      <div className="w-screen h-[510px] relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={sliderVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-screen h-full flex flex-col md:flex-row"
          >
            <div className="flex flex-col items-center md:flex-row w-screen overflow-hidden relative bg-gray-100">
              <div className="w-screen flex flex-col justify-center items-start text-left p-2 md:p-10 lg:p-28 md:flex-1">
                <AnimatePresence>
                  {showHeadings && (
                    <motion.div
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {slides[currentSlide].headings.map((heading, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="space-y-2"
                        >
                          <p className="text-lg md:text-xl lg:text-2xl font-bold uppercase text-[#064F48]">
                            {heading.title}
                          </p>
                          <p className="text-md md:text-lg">{heading.text}</p>
                        </motion.div>
                      ))}
                      <motion.button
                        className="mt-4 bg-[#064F48] text-white text-md md:text-lg w-28 h-10 lg:w-[185px] lg:h-[50px] hover:bg-[#E56A40] duration-100 font-bold"
                        variants={itemVariants}
                      >
                        {slides[currentSlide].button}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="md:flex-1">
                <img
                  className="w-full h-auto object-cover"
                  src={slides[currentSlide].image}
                  alt=""
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hidden absolute w-fit left-0 right-0 mx-auto md:flex gap-8 bottom-10 md:bottom-23">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer
            hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <FaArrowLeftLong />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer
            hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
