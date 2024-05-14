import React from "react";
import NavTitle from "./NavTitle";
import { PriceProps, PriceRange } from "../../types/ProductType";

const Price: React.FC<PriceProps> = ({
  setSelectedPriceRanges,
  selectedPriceRanges,
}) => {
  const handlePriceRangeChange = (selectedRange: PriceRange) => {
    setSelectedPriceRanges((prevRanges) => {
      if (prevRanges.find((range) => range._id === selectedRange._id)) {
        return prevRanges.filter((range) => range._id !== selectedRange._id);
      } else {
        return [...prevRanges, selectedRange];
      }
    });
  };
  const priceList = [
    {
      _id: 950,
      priceOne: 0.0,
      priceTwo: 49.99,
    },
    {
      _id: 951,
      priceOne: 50.0,
      priceTwo: 99.99,
    },
    {
      _id: 952,
      priceOne: 100.0,
      priceTwo: 199.99,
    },
    {
      _id: 953,
      priceOne: 200.0,
      priceTwo: 399.99,
    },
    {
      _id: 954,
      priceOne: 400.0,
      priceTwo: 599.99,
    },
    {
      _id: 955,
      priceOne: 600.0,
      priceTwo: 1000.0,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              <input
                type="checkbox"
                id={String(item._id)}
                checked={selectedPriceRanges.some(
                  (range) => range._id === item._id
                )}
                onChange={() => handlePriceRangeChange(item)}
              />
              ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
