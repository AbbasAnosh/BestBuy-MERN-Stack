import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Category = ({ setSelectedCategory }) => {
  const [showSubCatOne, setShowSubCatOne] = useState(true);

  const category = [
    {
      _id: 9006,
      title: "Computers & Accessories",
    },
    {
      _id: 9007,
      title: "Smartphones & Tablets",
    },
    {
      _id: 9008,
      title: "TV, Video & Audio",
    },
    {
      _id: 9009,
      title: "Cameras, Photo & Video",
    },
    {
      _id: 90010,
      title: "Headphones",
    },
    {
      _id: 90011,
      title: "Wearable Electronics",
    },
  ];

  const handleCategoryChange = (category, isChecked) => {
    setSelectedCategory((prevSelectedCategories) => {
      if (isChecked) {
        return [...prevSelectedCategories, category];
      } else {
        return prevSelectedCategories.filter((c) => c !== category);
      }
    });
  };

  return (
    <div className="w-full">
      <div
        onClick={() => setShowSubCatOne(!showSubCatOne)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Category" icons={true} />
      </div>
      <div>
        {showSubCatOne && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
              {category.map((item) => (
                <li
                  key={item._id}
                  className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
                >
                  <input
                    type="checkbox"
                    id={item._id}
                    onChange={(e) =>
                      handleCategoryChange(item.title, e.target.checked)
                    }
                  />
                  {item.title}
                  {item.icons && (
                    <span
                      onClick={() => setShowSubCatOne(!showSubCatOne)}
                      className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                    >
                      <ImPlus />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Category;
