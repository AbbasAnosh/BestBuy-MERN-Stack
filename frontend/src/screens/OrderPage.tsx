import { Link, useParams } from "react-router-dom";
import {
  useDeliverOrdersMutation,
  useGetOrderDetailsQuery,
  useGetPayPalClientIdQuery,
  usePayOrderMutation,
} from "../slices/ordersApiSlice";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const OrderPage = () => {
  const { id: orderId } = useParams();
  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  const [deliverOrders, { isLoading: loadingDeliver }] =
    useDeliverOrdersMutation();

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const { userInfo } = useSelector((state: any) => state.auth);
  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPayPalClientIdQuery({});

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPayPalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            client_id: paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPayPalScript();
        }
      }
    }
  }, [order, paypal, paypalDispatch, loadingPayPal, errorPayPal]);

  const onApprove = (data, actions) => {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success("Payment successful");
      } catch (err) {
        toast.error(err?.data?.message || err.message);
      }
    });
  };
  const onApproveTest = async () => {
    await payOrder({ orderId, details: { payer: {} } });
    refetch();
    toast.success("Payment successful");
  };
  const onError = (err) => {
    toast.error(err.message);
  };
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: order.totalPrice,
            },
          },
        ],
      })
      .then((orderId) => {
        return orderId;
      });
  };

  const deliverOrderHandler = async () => {
    try {
      await deliverOrders(orderId);
      refetch();
      toast.success("Order delivered");
    } catch (err) {
      toast.error(err?.data?.message || err.message);
    }
  };

  return isLoading ? (
    <h1>Loading</h1>
  ) : error ? (
    <h1>There is an error</h1>
  ) : (
    <div className="bg-[#EEE1D1] ">
      <div className="grid lg:grid-cols-3 gap-12 p-4 lg:p-10 max-w-7xl mx-auto">
        <div className="lg:col-span-2 bg-[#EEE1D1] divide-y divide-[#064F48]">
          <div className=" bg-[#EEE1D1] divide-y divide-[#064F48]">
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-extrabold text-[#064F48] inline-block">
                Shipping
              </h2>
              <p>
                <span className="text-lg font-bold text-[#064F48]">Name:</span>{" "}
                {order.user.name}
              </p>
              <p>
                <span className="text-lg font-bold text-[#064F48]">Email:</span>{" "}
                {order.user.email}
              </p>
              <p>
                <span className="text-lg font-bold text-[#064F48]">
                  Address:
                </span>{" "}
                {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              <p className="  text-white text-lg">
                {order.isDelivered ? (
                  <p className="bg-[#064F48] max-w-md p-3 rounded-md">
                    Deliverd on {order.deliveredAt}
                  </p>
                ) : (
                  <p className="bg-[#E56A40] max-w-md p-3 rounded-md">
                    Not Delivered
                  </p>
                )}
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
                {order.paymentMethod}
              </p>
              <p className="  text-white text-lg">
                {order.isPaid ? (
                  <p className="bg-[#064F48] max-w-md p-3 rounded-md">
                    Paid on {order.paidAt}
                  </p>
                ) : (
                  <p className="bg-[#E56A40] max-w-md p-3 rounded-md">
                    Not Paid
                  </p>
                )}
              </p>
            </div>
          </div>
          <div className="divide-y divide-[#064F48] mb-8 pt-6">
            {order?.orderItems?.map((item: any, index: any) => (
              <div>
                <h2 className="text-2xl font-extrabold text-[#064F48] inline-block">
                  Payment Method
                </h2>
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
                        ${item.price.toFixed(2)}
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
              </div>
            ))}
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
                <span className="ml-auto font-bold">${order.itemsPrice}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4">
                Shipping{" "}
                <span className="ml-auto font-bold">
                  ${order.shippingPrice}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4">
                Tax <span className="ml-auto font-bold">${order.taxPrice}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
                Total <span className="ml-auto">${order.totalPrice}</span>
              </li>
            </ul>
            {userInfo &&
              userInfo.isAdmin &&
              order.isPaid &&
              !order.isDelivered && (
                <button
                  onClick={deliverOrderHandler}
                  type="button"
                  className="mt-6 text-md px-6 py-2.5 w-full bg-[#064F48] text-white rounded"
                >
                  Delivered
                </button>
              )}
            {!order.isPaid && (
              <div>
                {loadingPay && <h1>loading</h1>}
                {isPending ? (
                  <h1>Loading</h1>
                ) : (
                  <div className="space-y-3">
                    {/* <button
                      onClick={onApproveTest}
                      type="button"
                      className="mt-6 text-md px-6 py-2.5 w-full bg-[#064F48] text-white rounded"
                    >
                      Pay Order
                    </button> */}
                    <div>
                      <PayPalButtons
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                      ></PayPalButtons>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
