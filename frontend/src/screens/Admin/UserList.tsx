import { Link } from "react-router-dom";
import { FaTimes, FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../slices/usersApiSlice";
import { toast } from "react-toastify";
const UserList = () => {
  const { data: users, isLoading, error, refetch } = useGetUsersQuery({});
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
    <div className="bg-[#EEE1D1]">
      <div className="p-6 lg:max-w-6xl max-w-2xl h-[70vh] mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-extrabold text-[#064F48] inline-block">
            Orders
          </h2>
        </div>
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
                      NAME
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                      EMAIL
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                      ADMIN
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr className="hover:bg-blue-50" key={user._id}>
                      <td className="px-6 py-4 text-sm">{user._id}</td>
                      <td>{user.name}</td>
                      <td className="px-6 py-4 text-sm">
                        <Link to={`mailto:${user.email}`}>{user.email}</Link>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {user.isAdmin ? (
                          <FaCheck className="text-green-500" />
                        ) : (
                          <FaTimes className="text-[#E56A40]" />
                        )}
                      </td>
                      <td>
                        <Link
                          to={`/admin/user/${user._id}/edit`}
                          className="flex gap-2"
                        >
                          <button className="px-3 py-2 bg-[#064F48] text-sm text-white rounded-md">
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => deleteHandler(user._id)}
                            className="px-3 py-2 bg-[#E56A40] text-sm text-white rounded-md"
                          >
                            <FaTrash />
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
      </div>
    </div>
  );
};

export default UserList;
