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

export interface ProfileProps {
  label: string;
  href: string;
  icon: JSX.Element;
}

export interface ReactPayPalScriptOptions {
  clientID: string;
  currency: string;
}
