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
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../components/shopComponent/Pagination";

const ShopPage = () => {
  const { pageNumber } = useParams();
  const { data } = useGetProductsQuery({ pageNumber });

  const Products = data?.products;

  const [selectedCategory, setSelectedCategory] = useState<CategoryProps[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<BrandProps[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<PriceRange[]>(
    []
  );
  const [priceRange, setPriceRange] = useState({ min: 5, max: 10000 });
  const [sortOption, setSortOption] = useState("");

  const navigate = useNavigate();

  const applyFilters = (products) => {
    return products
      .filter((product) => {
        const isCategorySelected =
          selectedCategory.length === 0 ||
          selectedCategory.includes(product.category);

        const isBrandSelected =
          selectedBrand.length === 0 || selectedBrand.includes(product.brand);

        const isSpecificPriceInRange =
          selectedPriceRanges.length === 0 ||
          selectedPriceRanges.some(
            (range) =>
              product.price >= range.priceOne && product.price <= range.priceTwo
          );

        const isPriceInRange =
          product.price >= priceRange.min && product.price <= priceRange.max;

        return (
          isCategorySelected &&
          isBrandSelected &&
          isPriceInRange &&
          isSpecificPriceInRange
        );
      })
      .sort((a, b) => {
        if (sortOption === "Best Sellers") {
          return b.rating - a.rating;
        } else if (sortOption === "New Arrival") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortOption === "Featured") {
          return a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1;
        }
        return 0;
      });
  };

  const filteredAndSortedProducts = applyFilters(Products || []);

  const handlePageClick = (e) => {
    const newPageNumber = e.selected + 1;

    navigate(`/shop/page/${newPageNumber}`);
  };

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
          <ProductBanner setSortOption={setSortOption} />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
            {filteredAndSortedProducts?.map((product: ProductProps) => (
              <div key={product._id} className="px-2">
                <Product
                  id={product._id}
                  img={product.image}
                  productName={product.name}
                  price={product.price}
                  isNewArrival={product.isNewArrival}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Pagination pageCount={data?.pages} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

export default ShopPage;
