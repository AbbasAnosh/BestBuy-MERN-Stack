import moment from "moment";
import { TbListDetails } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderTable = ({ data }) => {
  const orders = data;

  return (
    <>
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            Orders
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Order Lists of customers
          </p>
        </div>
      </div>
      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td className="pl-10">
              <div className="flex items-center gap-x-4">
                <span>Product Name</span>
              </div>
            </td>
            <td className="py-4 px-4 text-center">ID</td>
            <td className="py-4 px-4 text-center">USER</td>
            <td className="py-4 px-4 text-center">DATE</td>
            <td className="py-4 px-4 text-center">TOTAL</td>
            <td className="py-4 px-4 text-center">PAID</td>
            <td className="py-4 px-4 text-center">DELIVERED</td>
            <td className="py-4 pr-10 pl-4 text-center">
              <img
                src="../../public/icons/filter.svg"
                className="w-6 h-6 fill-current"
                alt=""
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr
              className="hover:bg-gray-100 transition-colors group"
              key={order._id}
            >
              <td className="flex gap-x-4 items-center py-4 pl-6">
                {order.orderItems.map((orderImage) => (
                  <img
                    src={orderImage.image}
                    alt=""
                    className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                  />
                ))}
                <div>
                  {order.orderItems.map((orderName) => (
                    <h1 className="text-lg font-semibold text-gray-700">
                      {orderName.name}
                    </h1>
                  ))}
                </div>
              </td>
              <td className="font-medium text-center">{order._id}</td>
              <td className="font-medium text-center">
                {order.user && order.user.name}
              </td>
              <td className="font-medium text-center">
                {order.createdAt.substring(0, 10)}
              </td>
              <td className="text-center">
                <span className="font-medium">${order.totalPrice}</span>
              </td>
              <td>
                <div className="flex gap-x-2 justify-center items-center">
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <FaTimes className="text-[#E56A40]" />
                  )}
                </div>
              </td>
              <td>
                <div className="flex gap-x-2 justify-center items-center">
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes className="text-[#E56A40]" />
                  )}
                </div>
              </td>
              <td>
                <span className="inline-block w-20 group-hover:hidden">
                  {moment(order.createdAt).format("MMMM Do YYYY")}
                </span>
                <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                  <Link
                    to={`/order/${order._id}`}
                    className="p-2 hover:rounded-md hover:bg-gray-200"
                  >
                    <TbListDetails className="text-xl text-black" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OrderTable;
