import React, { useState } from "react";

import Breadcrumbs from "../components/shopComponent/BreadCrumps";
import ProductBanner from "../components/shopComponent/ProductBanner";
import ShopSideNav from "../components/shopComponent/ShopSideNav";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from "../components/home/products/Product";

const ShopPage = () => {
  const { data, isLoading, error } = useGetProductsQuery({});
  const iserror: any = error;
  const [itemsPerPage, setItemsPerPage] = useState(48);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Breadcrumbs title="Products" prevLocation="" />

      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
            {data?.map((product) => (
              <div key={product.id} className="px-2">
                <Product
                  id={product.id}
                  img={product.image}
                  productName={product.name}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
