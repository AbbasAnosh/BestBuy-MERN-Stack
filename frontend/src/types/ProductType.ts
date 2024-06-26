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
  isFeatured: boolean;
  isNewArrival: boolean;
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
}[];
export type CategoryProps = {
  _id: string;
  title: string;
  icons: boolean;
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

export type NewProductProps = {
  qty: number;
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
  isFeatured: boolean;

  isNewArrival: boolean;
};

export interface CategoryProp {
  _id: number;
  title: string;
}

export interface CategoriesProp {
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryProps[]>>;
}

export type PaginationProps = {
  data: ProductProps;
  selected: number;
};

export interface userInfo {
  _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  auth: any;
}

export interface OrderProps {
  _id: string;
  orderItems: ProductProps[];
  shippingAddress: {};
  paymentMethod: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
  createdAt: string;
  updatedAt: string;
  user: string;
  isPaidAt: string;
  isDeliveredAt: string;
}
export interface UserProps {
  _id: string;
  name: string;
  email: string;
  totalPrice: number;
  auth: any;
  password: string;
  createdAt: string;
  updatedAt: string;
  isAdmin: boolean;
}

export interface ReviewProps {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  numReviews: number;
  createdAt: string;
}

export type ProductTableProps = {
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
  isFeatured: boolean;
  isNewArrival: boolean;
  createdAt: string;
};
