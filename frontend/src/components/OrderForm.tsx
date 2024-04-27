import { Link } from "react-router-dom";
import { useGetMyOrdersQuery } from "../slices/ordersApiSlice";
import { FaTimes } from "react-icons/fa";

const OrderForm = ({ orders, error, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white ">
            <thead className="bg-[#064F48] whitespace-nowrap">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  DATE
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  TOTAL
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  PAID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  DELIVERED
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap divide-y divide-gray-200">
              {orders.map((order) => (
                <tr className="hover:bg-blue-50" key={order._id}>
                  <td className="px-6 py-4 text-sm">{order._id}</td>
                  <td className="px-6 py-4 text-sm">
                    {order.createdAt.substring(0, 10)}
                  </td>
                  <td className="px-6 py-4 text-sm">{order.totalPrice}</td>
                  <td className="px-6 py-4 text-sm">
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <FaTimes className="text-[#E56A40]" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <FaTimes className="text-[#E56A40]" />
                    )}
                  </td>
                  <td>
                    <Link to={`/order/${order._id}`}>
                      <button className="px-3 py-2 bg-[#064F48] text-sm text-white rounded-md">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default OrderForm;
