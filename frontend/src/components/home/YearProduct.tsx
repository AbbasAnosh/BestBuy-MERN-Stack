import React from "react";
import { Link } from "react-router-dom";
import productOfTheYear from "/img/bag.png";

import Image from "./designLayout/Image";
import ShopNow from "./designLayout/Button";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="w-full h-80 mb-20 bg-[#EFD29B] flex flex-col lg:flex-row items-center justify-between p-16 font-titleFont">
        <div className="w-1/2">
          <Image
            className="w-full h-64 object-cover hidden md:inline-block"
            imgSrc={productOfTheYear}
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of The year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
