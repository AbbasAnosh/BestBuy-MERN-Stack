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
