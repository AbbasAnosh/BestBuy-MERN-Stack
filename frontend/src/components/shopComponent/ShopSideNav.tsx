import React from "react";

import Brand from "./Brand";
import Category from "./Category";
import Price from "./Price";
import Color from "./Color";
import Search from "../shop/Search";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6 ">
      <Search />
      <Category icons={false} />
      <Brand />
      <Color />
      <Price />
    </div>
  );
};

export default ShopSideNav;
