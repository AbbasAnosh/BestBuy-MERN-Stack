import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { BrandProps, BrandsProps } from "../../types/ProductType";
type Brands = {
  _id: number;
  title: string;
};
const Brand: React.FC<BrandsProps> = ({ setSelectedBrand }) => {
  const [showBrands, setShowBrands] = useState(true);
  const handleBrandChange = (brand: BrandProps, isChecked: boolean) => {
    setSelectedBrand((prevSelectedBrands) => {
      if (isChecked) {
        return [...prevSelectedBrands, brand];
      } else {
        return prevSelectedBrands.filter((b) => b !== brand);
      }
    });
  };

  const brands: Brands[] = [
    {
      _id: 1,
      title: "Apple",
    },
    {
      _id: 2,
      title: "Michael Kors",
    },
    {
      _id: 3,
      title: "Samsung",
    },

    {
      _id: 4,
      title: "Nikon",
    },
    {
      _id: 5,
      title: "Microsoft",
    },
    {
      _id: 6,
      title: "Ray Ban",
    },
    {
      _id: 7,
      title: "Adidas",
    },
    {
      _id: 8,
      title: "Coach",
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
                <input
                  type="checkbox"
                  id={String(item._id)}
                  onChange={(e) =>
                    handleBrandChange(item.title, e.target.checked)
                  }
                />
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
