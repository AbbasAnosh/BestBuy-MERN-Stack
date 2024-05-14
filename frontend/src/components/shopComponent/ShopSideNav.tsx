import Brand from "./Brand";
import Category from "./Category";
import Price from "./Price";
import Range from "../shop/Range";
import { ShopSideNavProps } from "../../types/ProductType";

const ShopSideNav: React.FC<ShopSideNavProps> = ({
  setSelectedCategory,
  setSelectedBrand,
  setSelectedPriceRanges,
  selectedPriceRanges,
}) => {
  return (
    <div className="w-full flex flex-col gap-6 ">
      <Category icons={false} setSelectedCategory={setSelectedCategory} />
      <Brand setSelectedBrand={setSelectedBrand} />
      <Price
        setSelectedPriceRanges={setSelectedPriceRanges}
        selectedPriceRanges={selectedPriceRanges}
      />
    </div>
  );
};

export default ShopSideNav;
