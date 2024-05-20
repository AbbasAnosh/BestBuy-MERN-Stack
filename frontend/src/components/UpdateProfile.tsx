import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useProfileMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { RootState } from "../store";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [UpdateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo, userInfo.name, userInfo.email]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirm) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await UpdateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials(res));
        toast.success("Profile updated");
      } catch (err: any) {
        toast.error(err?.data?.message || err?.error);
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center justify-center px-5">
        <div className=" tex[#064F48] rounded-3xl w-full overflow-hidden">
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 py-10 px-10">
              <img src="/accountUpdate.svg" alt="" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-[#064F48]">
                  Update Acount
                </h1>
                <p>Enter your new information to update your account</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label
                      htmlFor=""
                      className="text-xs font-semibold px-1 text-[#064F48]"
                    >
                      Name
                    </label>
                    <div className="flex">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="w-full  pr-3 py-2 rounded-lg border-2 border-[#064F48] ring-0 focus:ring-0 outline-none focus:border-[#064F48]"
                        placeholder="your name"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label
                      htmlFor=""
                      className="text-xs font-semibold px-1 text-[#064F48]"
                    >
                      Email
                    </label>
                    <div className="flex">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="w-full  pr-3 py-2 rounded-lg border-2 border-[#064F48] ring-0 focus:ring-0 outline-none focus:border-[#064F48]"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label
                      htmlFor=""
                      className="text-xs font-semibold px-1 text-[#064F48]"
                    >
                      Password
                    </label>
                    <div className="flex">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="w-full pr-3 py-2 rounded-lg border-2 border-[#064F48] ring-0 focus:ring-0 outline-none focus:border-[#064F48]"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label
                      htmlFor=""
                      className="text-xs font-semibold px-1 text-[#064F48]"
                    >
                      Confirm Password
                    </label>
                    <div className="flex">
                      <input
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        type="confirm password"
                        className="w-full pr-3 p-2 py-2 rounded-lg border-2 border-[#064F48] ring-0 focus:ring-0 outline-none focus:border-[#064F48]"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-[#064F48] hover:bg-[#E56A40] focus:bg-[#064F48] text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateProfile;
