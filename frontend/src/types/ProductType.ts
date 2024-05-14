export interface ProductProps {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand?: string;
  category?: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  isLoading: boolean;
  error?: string;
}

export interface CartState {
  cartItems: ProductProps[];
  shippingAddress: {};
  paymentMethod: string;
}

export interface ProfileProps {
  label: string;
  href: string;
  icon: JSX.Element;
}

export interface ReactPayPalScriptOptions {
  clientID: string;
  currency: string;
}

export interface formDataProps {
  name: string;
  price: string;
  image: string;
  brand: string;
  category: string;
  countInStock: string;
  description: string;
}

export type PriceRange = {
  _id: number;
  priceOne: number;
  priceTwo: number;
};
export type BrandProps = {
  _id: string;
  title: string;
};
export type CategoryProps = {
  _id: string;
  title: string;
};
export type RangeProp = {
  rangeValue: number;
  setRangeValue: (value: number) => void;
};

export type ShopSideNavProps = {
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryProps[]>>;
  setSelectedBrand: React.Dispatch<React.SetStateAction<BrandProps[]>>;
  setSelectedPriceRanges: React.Dispatch<React.SetStateAction<PriceRange[]>>;
  selectedPriceRanges: PriceRange[];
  rangeValue: number;
  setRangeValue: (value: number) => void;
};

export type PriceProps = {
  setSelectedPriceRanges: React.Dispatch<React.SetStateAction<PriceRange[]>>;
  selectedPriceRanges: PriceRange[];
};

export type CategoriesProps = {
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryProps[]>>;
};

export type BrandsProps = {
  setSelectedBrand: React.Dispatch<React.SetStateAction<BrandProps[]>>;
};
