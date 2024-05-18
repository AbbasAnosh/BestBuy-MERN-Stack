import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../designLayout/Image";
import { useAddProductToWishListMutation } from "../../../slices/wishListApiSlice";
import toast, { Toaster } from "react-hot-toast";
import Badge from "./Badge";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import Rating from "../../Rating";

const Product = (props) => {
  const [addProductToWishList] = useAddProductToWishListMutation();
  const handleAddToWishList = async (e) => {
    e.preventDefault();
    try {
      const result = await addProductToWishList({ _id: props.id }).unwrap();
      toast.success("... added to wishlist");
    } catch (err) {
      toast.error(err.message || err.error);
    }
  };
  const product = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-96 relative overflow-y-hidden ">
        <div className="relative">
          <Image className="w-full h-full" imgSrc={props.img} />
          <div className="absolute top-6 left-8">
            {props.isNewArrival && <Badge text="New" />}
            {props.isFeatured && <Badge text="Featured" />}
          </div>
        </div>

        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li
              onClick={() => {
                const productToAdd = {
                  ...product,
                  qty: product.qty || 1,
                };
                dispatch(addToCart(productToAdd));
                toast.success("... added to cart");
              }}
              className="text-[#064F48] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-[#064F48] hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart className="text-[#064F48]" />
              </span>
            </li>
            <li
              onClick={() => handleDetails(props.id)}
              className="text-[#064F48] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-[#064F48] hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant className="text-[#064F48]" />
              </span>
            </li>
            <li
              onClick={handleAddToWishList}
              className="text-[#064F48] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-[#064F48] hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Wish List
              <span>
                <BsSuitHeartFill className="text-[#064F48]" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-md text-primeColor font-bold">
            {props?.productName?.length > 25
              ? `${props?.productName.substring(0, 20)}...`
              : props.productName}
          </h2>
          <p className="text-[#064F48] text-[14px] font-normal">
            ${props.price}
          </p>
        </div>
        <Rating value={props.rating} review={props.review} />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "white",
            color: "black",
          },
        }}
      />
    </div>
  );
};

export default Product;
