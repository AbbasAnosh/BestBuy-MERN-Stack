import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from "../../slices/usersApiSlice";
import { toast } from "react-toastify";

const UserEdite = () => {
  const { id: userId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const { data: User, error, refetch } = useGetUserDetailsQuery(userId);

  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (User) {
      setName(User.name);
      setEmail(User.email);
      setIsAdmin(User.isAdmin);
    }
  }, [User]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateUser({
        userId,
        name,
        email,
        isAdmin,
      });
      toast.success("User updated successfully");
      refetch();
      navigate("/admin/userlist");
    } catch (err: any) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div>
      <div className="mb-10 flex font-semibold flex-col max-w-7xl mx-auto">
        <Link to="/admin/userlist" className="hover:text-[#E56A40]">
          Go Back
        </Link>
        {updateLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl mx-auto my-10 p-8 shadow-lg rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Update User
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <input
                  id="isAdmin"
                  type="checkbox"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                  className="w-4 h-4 mr-3  "
                />
                <label htmlFor="checkbox" className="text-black text-sm">
                  IsAdmin
                </label>
              </div>
              {/* <input
                type="text"
                id="isAdmin"
                name="isAdmin"
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              /> */}
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserEdite;
