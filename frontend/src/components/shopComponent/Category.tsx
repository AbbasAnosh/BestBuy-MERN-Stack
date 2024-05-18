import { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import {
  CategoriesProp,
  CategoryProp,
  CategoryProps,
} from "../../types/ProductType";

const Category: React.FC<CategoriesProp> = ({ setSelectedCategory }) => {
  const [showSubCatOne, setShowSubCatOne] = useState(true);

  const category: CategoryProp[] = [
    {
      _id: 1,
      title: "Women",
    },
    {
      _id: 2,
      title: "Men",
    },
    {
      _id: 3,
      title: "Kids",
    },
    {
      _id: 4,
      title: "Travel",
    },
  ];

  const handleCategoryChange = (
    category: CategoryProps,
    isChecked: boolean
  ) => {
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
                    id={String(item._id)}
                    onChange={(e) =>
                      handleCategoryChange(item.title, e.target.checked)
                    }
                  />
                  {item.title}
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
