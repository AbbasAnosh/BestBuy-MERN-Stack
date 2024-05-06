import moment from "moment";
import { useDeleteProductMutation } from "../slices/productsApiSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductTable = ({ data, refetch }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const deleteHandler = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        toast.success("Product deleted successfully");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            Products
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Prodcuts in the Shop
          </p>
        </div>
        <Link
          to="/admin/addproduct"
          className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-[#064F48] rounded-xl hover:bg-[#C86840] focus:outline-none focus:ring-2 focus:ring-[#064F48] focus:ring-offset-1"
        >
          <img
            src="../../public/icons/plus.svg"
            className="w-6 h-6 fill-current"
            alt=""
          />
          <span className="text-sm font-semibold tracking-wide">
            Create Item
          </span>
        </Link>
      </div>
      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td className="pl-10">
              <div className="flex items-center gap-x-4">
                <span>Product Name</span>
              </div>
            </td>
            <td className="py-4 px-4 text-center">Pricing</td>
            <td className="py-4 px-4 text-center">Brand</td>
            <td className="py-4 px-4 text-center">Rating</td>
            <td className="py-4 px-4 text-center">Count In Stock</td>
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
          {data?.map((product) => (
            <tr
              className="hover:bg-gray-100 transition-colors group"
              key={product._id}
            >
              <td className="flex gap-x-4 items-center py-4 pl-10">
                <img
                  src={product.image}
                  alt=""
                  className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                />
                <div>
                  <a href="#" className="text-lg font-semibold text-gray-700">
                    {product.name}
                  </a>
                  <div className="font-medium text-gray-400">
                    {product.category}
                  </div>
                </div>
              </td>
              <td className="font-medium text-center">${product.price}</td>
              <td className="font-medium text-center">{product.brand}</td>
              <td className="text-center">
                <span className="font-medium">{product.rating}</span>
                <span className="text-gray-400">/5</span>
              </td>
              <td>
                <div className="flex gap-x-2 justify-center items-center">
                  {product.countInStock}
                </div>
              </td>
              <td>
                <span className="inline-block w-20 group-hover:hidden">
                  {moment(product.createdAt).format("MMMM Do YYYY")}
                </span>
                <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                  <Link
                    to={`/admin/product/${product._id}/edit`}
                    className="p-2 hover:rounded-md hover:bg-gray-200"
                  >
                    <img
                      src="../../public/icons/pencil.svg"
                      className="w-6 h-6 fill-current"
                      alt=""
                    />
                  </Link>
                  <button
                    onClick={() => deleteHandler(product._id)}
                    className="p-2 hover:rounded-md hover:bg-gray-200"
                  >
                    <img
                      src="../../public/icons/trash.svg"
                      className="w-6 h-6 fill-current"
                      alt=""
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;

{
  /* <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200">
          {status.map((item, index) => (
            <li key={index}>
              <button
                className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group"
                key={item.name}
              >
                <img src={item.icon} className="w-6 h-6 fill-current" alt="" />
                <span className="font-medium"> {item.name} </span>
                <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
              </button>
            </li>
          ))}
        </ul> */
}

// const status = [
//     { name: "Published", icon: LayersIcon },
//     { name: "Draft", icon: DraftIcon },
//     { name: "Hidden", icon: InvisibleIcon },
//     { name: "Rejected", icon: RejectedIcon },
//     { name: "Under Review", icon: MailIcon },
//   ];
