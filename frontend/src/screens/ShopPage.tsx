import { useState } from "react";
import Breadcrumbs from "../components/shopComponent/ComponentName";
import ProductBanner from "../components/shopComponent/ProductBanner";
import ShopSideNav from "../components/shopComponent/ShopSideNav";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from "../components/home/products/Product";
import {
  BrandProps,
  CategoryProps,
  NewProductProps,
  PaginationProps,
  PriceRange,
} from "../types/ProductType";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../components/shopComponent/Pagination";
import Button from "../constants/Button";

const ShopPage = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<CategoryProps[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<BrandProps[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 5, max: 10000 });
  const [rangeValue, setRangeValue] = useState(10000);
  const [sortOption, setSortOption] = useState("");
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<PriceRange[]>(
    []
  );

  const filters = {
    pageNumber,
    category: selectedCategory,
    brand: selectedBrand,
    minPrice: priceRange.min,
    maxPrice: priceRange.max,
    rangeValue: rangeValue,
    sort: sortOption,
    priceRanges: selectedPriceRanges
      .map((range) => `${range.priceOne}-${range.priceTwo}`)
      .join(","),
  };

  const { data } = useGetProductsQuery(filters);

  const handlePageClick = (e: PaginationProps) => {
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
            rangeValue={rangeValue}
            setRangeValue={setRangeValue}
          />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <div className="bg-[#F3F4F6] rounded-md md:flex items-center h-[50vh] mb-3 hidden">
            <img
              src="/images/shop-page.svg"
              alt=""
              className="flex-1 h-full w-full object-contain"
            />
            <div className="flex-1 space-y-6">
              <p className="text-3xl">
                Grab up to 50% off on <br /> Selected Products
              </p>
            </div>
          </div>
          <ProductBanner setSortOption={setSortOption} />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
            {data?.products?.map((product: NewProductProps) => (
              <div key={product._id} className="px-2">
                <Product {...product} key={product._id} />
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
