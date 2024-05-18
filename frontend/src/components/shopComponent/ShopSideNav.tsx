import Brand from "./Brand";
import Category from "./Category";
import Price from "./Price";
import Range from "./Range";
import { BrandProps, CategoryProps, PriceRange } from "../../types/ProductType";

interface ShopSideNavProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryProps[]>>;
  setSelectedBrand: React.Dispatch<React.SetStateAction<BrandProps[]>>;
  setSelectedPriceRanges: React.Dispatch<React.SetStateAction<PriceRange[]>>;
  selectedPriceRanges: PriceRange[];
  rangeValue: number;
  setRangeValue: React.Dispatch<React.SetStateAction<number>>;
}

const ShopSideNav: React.FC<ShopSideNavProps> = ({
  setSelectedCategory,
  setSelectedBrand,
  setSelectedPriceRanges,
  selectedPriceRanges,
  rangeValue,
  setRangeValue,
}) => {
  return (
    <div className="w-full flex flex-col gap-6 ">
      <Category icons={false} setSelectedCategory={setSelectedCategory} />
      <Range rangeValue={rangeValue} setRangeValue={setRangeValue} />
      <Brand setSelectedBrand={setSelectedBrand} />
      <Price
        setSelectedPriceRanges={setSelectedPriceRanges}
        selectedPriceRanges={selectedPriceRanges}
      />
    </div>
  );
};

export default ShopSideNav;
