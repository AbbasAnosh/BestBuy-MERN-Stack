import { topDealUsers } from "../data";

const TopBox = () => {
  return (
    <div className="">
      <h1 className="mb-[20px]">Top Deals</h1>
      <div className="flex flex-col justify-between mb-[30px]">
        {topDealUsers.map((user) => (
          <div
            className="flex items-center justify-between mb-[30px]"
            key={user.id}
          >
            <div className="flex gap-[20px]">
              <img
                src={user.img}
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
              <div className="flex flex-col gap-[5px]">
                <span className="text-[14px] font-[500]">{user.username}</span>
                <span className="text-[12px]">{user.email}</span>
              </div>
            </div>
            <span className="font-[500]">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
