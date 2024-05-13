import React from "react";

import Brand from "./Brand";
import Category from "./Category";
import Price from "./Price";
import Color from "./Color";

import Range from "../shop/Range";

const ShopSideNav = ({ setSelectedCategory }) => {
  return (
    <div className="w-full flex flex-col gap-6 ">
      <Category icons={false} setSelectedCategory={setSelectedCategory} />
      <Range />
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;
