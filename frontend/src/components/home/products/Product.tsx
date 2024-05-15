import { BsSuitHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../designLayout/Image";
import { useAddProductToWishListMutation } from "../../../slices/wishListApiSlice";
import { toast } from "react-toastify";

const Product = (props) => {
  const [addProductToWishList] = useAddProductToWishListMutation();
  const handleAddToWishList = async (e) => {
    e.preventDefault();
    console.log(e.message, "messsageeedfds");
    try {
      const result = await addProductToWishList({ _id: props.id }).unwrap();
      console.log("Product creation result:", result);
      toast.success("Product added to wishlist");
    } catch (err) {
      toast.error(err.message || err.error);
    }
  };

  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div className="relative">
          <Image className="w-full h-full" imgSrc={props.img} />
          <div className="absolute top-0 right-0 z-50">
            {props.isNewArrival && (
              <div className="py-[5px] px-[10px] text-white bg-[#77dd77] font-medium rounded-bl-[5px]">
                New
              </div>
            )}

            {props.isFeatured && (
              <div className="py-[5px] px-[10px] text-white bg-[#77dd77] font-medium rounded-bl-[5px]">
                Featured
              </div>
            )}
          </div>
        </div>

        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            <li
              onClick={handleAddToWishList}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
