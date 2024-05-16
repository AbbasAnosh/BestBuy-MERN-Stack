import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartState } from "../../../types/ProductType";
import { BsSuitHeartFill } from "react-icons/bs";
import { useGetWishListQuery } from "../../../slices/wishListApiSlice";

const CartIcon = () => {
  const { cartItems } = useSelector((state: { cart: CartState }) => state.cart);
  const { data: wishlistData } = useGetWishListQuery({});
  const wishlistItems = wishlistData?.wishlistItems;
  return (
    <div className="flex flex-col gap-4">
      <Link to="/cart">
        <div className="relative bg-[#064F48] p-2 rounded-sm">
          <FaShoppingCart className="text-xl text-white" />
          {cartItems.length > 0 && (
            <span className="absolute -top-3 -right-2 text-xs w-5 h-5 flex items-center justify-center rounded-full bg-red-600 text-white">
              {cartItems.reduce((acc: number, item: any) => acc + item.qty, 0)}
            </span>
          )}
        </div>
      </Link>
      <Link to="/wishlist">
        <div className="relative bg-[#064F48] p-2 rounded-sm">
          <BsSuitHeartFill className="text-xl text-white" />
          {wishlistItems && wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-3 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-red-600 text-white">
              {wishlistItems.length}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CartIcon;
