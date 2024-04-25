import Single from "../components/SinglePage";
import { singleUser } from "../data";

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
};

export default User;
