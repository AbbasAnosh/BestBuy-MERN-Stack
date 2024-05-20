import moment from "moment";
import { Link } from "react-router-dom";
import { useDeleteUserMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import { UserProps } from "../types/ProductType";

type UserType = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
};
type RefetchFunction = () => Promise<UserType>;

const UserTable = ({
  data,
  refetch,
}: {
  data: UserProps[];
  refetch: RefetchFunction;
}) => {
  const [deleteUser] = useDeleteUserMutation();

  const deleteHandler = async (id: string) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteUser(id);
        toast.success("User deleted successfully");
        refetch();
      } catch (err) {
        toast.error("Something is wrong, can't delete the user");
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            Users
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Users lists of the website
          </p>
        </div>
      </div>
      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td className="py-4 px-4 text-center">ID</td>
            <td className="py-4 px-4 text-center">Name</td>
            <td className="py-4 px-4 text-center">Email</td>
            <td className="py-4 px-4 text-center">Admin</td>
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
          {data?.map((user: UserProps) => (
            <tr
              className="hover:bg-gray-100 transition-colors group h-24"
              key={user._id}
            >
              <td className="font-medium text-center">{user._id}</td>
              <td className="font-medium text-center">{user.name}</td>
              <td className="font-medium text-center">
                {user.createdAt.substring(0, 10)}
              </td>
              <td className="text-center">
                <span className="font-medium">${user.totalPrice}</span>
              </td>
              <td>
                <span className="inline-block w-20 group-hover:hidden">
                  {moment(user.createdAt).format("MMMM Do YYYY")}
                </span>
                <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                  <Link
                    to={`/admin/user/${user._id}/edit`}
                    className="p-2 hover:rounded-md hover:bg-gray-200"
                  >
                    <img
                      src="../../public/icons/pencil.svg"
                      className="w-6 h-6 fill-current"
                      alt=""
                    />
                  </Link>
                  <button
                    onClick={() => deleteHandler(user._id)}
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

export default UserTable;
