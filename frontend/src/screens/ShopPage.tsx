import { useState } from "react";

import Breadcrumbs from "../components/shopComponent/BreadCrumps";
import ProductBanner from "../components/shopComponent/ProductBanner";
import ShopSideNav from "../components/shopComponent/ShopSideNav";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from "../components/home/products/Product";
import {
  BrandProps,
  CategoryProps,
  PriceRange,
  ProductProps,
} from "../types/ProductType";

const ShopPage = () => {
  const { data } = useGetProductsQuery({});

  // const [itemsPerPage, setItemsPerPage] = useState(48);
  const [selectedCategory, setSelectedCategory] = useState<CategoryProps[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<BrandProps[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<PriceRange[]>(
    []
  );
  const [priceRange, setPriceRange] = useState({ min: 5, max: 10000 });
  // const itemsPerPageFromBanner = (itemsPerPage) => {
  //   setItemsPerPage(itemsPerPage);
  // };

  const filteredProducts = data?.filter((product: ProductProps) => {
    const category = product.category;
    const brand = product.brand;
    const isCategorySelected =
      selectedCategory.length === 0 ||
      (category && selectedCategory.includes(category));
    const isBrandSelected =
      selectedBrand.length === 0 || (brand && selectedBrand.includes(brand));
    const isPriceInRange = selectedPriceRanges.some(
      (range) =>
        product.price >= range.priceOne && product.price <= range.priceTwo
    );

    const isPriceRange =
      product.price >= priceRange.min && product.price <= priceRange.max;

    return (
      isCategorySelected &&
      isBrandSelected &&
      (selectedPriceRanges.length === 0 || isPriceInRange) &&
      isPriceRange
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Breadcrumbs title="Products" prevLocation="" />

      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full">
          <ShopSideNav
            setSelectedCategory={setSelectedCategory}
            setSelectedBrand={setSelectedBrand}
            setSelectedPriceRanges={setSelectedPriceRanges}
            selectedPriceRanges={selectedPriceRanges}
            rangeValue={priceRange.max}
            setRangeValue={(value) =>
              setPriceRange({ ...priceRange, max: value })
            }
          />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
            {filteredProducts?.map((product: ProductProps) => (
              <div key={product._id} className="px-2">
                <Product
                  id={product._id}
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
