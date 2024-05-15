import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartState } from "../../../types/ProductType";

const CartIcon = () => {
  const { cartItems } = useSelector((state: { cart: CartState }) => state.cart);
  return (
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
  );
};

export default CartIcon;
