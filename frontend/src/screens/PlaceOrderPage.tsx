import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { toast } from "react-toastify";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";
const PlaceOrderPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);
  const [createOrder] = useCreateOrderMutation();
  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      toast.success(res.message);
      navigate(`/order/${res._id}`);
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div className="bg-[#EEE1D1] ">
      <div className="max-w-4xl pt-16 mx-auto w-full mb-24">
        <CheckoutSteps activeStep={4} />
      </div>
      <div className="grid lg:grid-cols-3 gap-12 p-4 lg:p-10 max-w-7xl mx-auto">
        <div className="lg:col-span-2 bg-[#EEE1D1] divide-y divide-[#064F48]">
          <div className=" bg-[#EEE1D1] divide-y divide-[#064F48]">
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-extrabold text-[#064F48] inline-block">
                Shipping
              </h2>
              <p>
                <span className="text-lg font-bold text-[#064F48]">
                  Address:
                </span>{" "}
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </div>
            <div className="space-y-6 mb-8 pt-6">
              <h2 className="text-2xl font-extrabold text-[#064F48] inline-block">
                Payment Method
              </h2>
              <p>
                <span className="text-lg font-bold text-[#064F48]">
                  Method:
                </span>{" "}
                {cart.paymentMethod}
              </p>
            </div>
          </div>
          <div className="divide-y divide-[#064F48]">
            {cart.cartItems.length === 0 ? (
              <h3>Your Cart is Empty</h3>
            ) : (
              <>
                {cart?.cartItems?.map((item: any, index: any) => (
                  <div
                    className="grid md:grid-cols-4 items-center gap-8 py-6"
                    key={index}
                  >
                    <div className="md:col-span-2 flex items-center gap-6">
                      <div className="w-32 h-22 shrink-0 bg-[#E56A40] rounded-lg p-4">
                        <img
                          src={item.image}
                          className="w-full h-full object-contain rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="text-md lg:text-lg font-bold text-[#064F48]">
                          <Link to={`/products/${item.product}`}>
                            {item.name}
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div className="text-nowrap flex justify-between space-x-8 lg:space-x-14">
                      <div className="flex flex-col gap-3 items-center">
                        <h3 className="text-md lg:text-lg text-bold text-[#064F48]">
                          Quantity
                        </h3>
                        <h3 className="text-sm lg:text-md bg-[#E56A40] py-1 px-2 rounded-lg text-white">
                          {item.qty}
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3 items-center">
                        <h3 className="text-md lg:text-lg text-bold text-[#064F48]">
                          Price
                        </h3>
                        <h3 className="text-sm lg:text-md bg-[#E56A40] py-1 px-2 rounded-lg text-white">
                          ${item.price}
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3 items-center">
                        <h3 className="text-md lg:text-lg text-bold text-[#064F48]">
                          Total
                        </h3>
                        <h3 className="text-sm lg:text-md bg-[#E56A40] py-1 px-2 rounded-lg text-white">
                          ${(item.qty * item.price).toFixed(2)}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div>
          <div className="bg-[#E56A40] rounded p-6">
            <h3 className="text-xl font-extrabold text-[#EBD0D1] border-b border-[#064F48] pb-4">
              Order Summary
            </h3>
            <ul className="text-[#EBD0D1] divide-y divide-[#064F48] mt-6">
              <li className="flex flex-wrap gap-4 text-md py-4">
                Items{" "}
                <span className="ml-auto font-bold">${cart.itemsPrice}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4">
                Shipping{" "}
                <span className="ml-auto font-bold">${cart.shippingPrice}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4">
                Tax <span className="ml-auto font-bold">${cart.taxAmount}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
                Total <span className="ml-auto">${cart.totalPrice}</span>
              </li>
            </ul>

            <button
              type="button"
              disabled={cart.cartItems.length === 0}
              onClick={placeOrderHandler}
              className="mt-6 text-md px-6 py-2.5 w-full bg-[#064F48] text-white rounded"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
