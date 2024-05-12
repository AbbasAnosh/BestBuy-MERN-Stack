import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Brand = () => {
  const [showBrands, setShowBrands] = useState(true);

  const brands = [
    {
      _id: 900,
      title: "Apple",
    },
    {
      _id: 901,
      title: "Bosh",
    },
    {
      _id: 902,
      title: "Canon Inc.",
    },

    {
      _id: 903,
      title: "Dell",
    },
    {
      _id: 903,
      title: "LG Electronics",
    },
    {
      _id: 903,
      title: "Panasonic",
    },
  ];

  return (
    <div>
      <div
        onClick={() => setShowBrands(!showBrands)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Brand" icons={true} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brands.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                <input type="checkbox" id={item._id} />
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
