const DashboardNavbar = () => {
  return (
    <div className="w-full p-[20px] flex items-center justify-between">
      <div className="flex">
        <img
          src="logo.svg"
          alt=""
          className="flex items-center font-bold gap-[10px]"
        />
        <span>BestBuy</span>
      </div>
      <div className="flex items-center gap-[20px]">
        <img src="/search.svg" alt="" className="" />
        <img src="/app.svg" alt="" className="" />
        <img src="/expand.svg" alt="" className="" />
        <div className="relative ">
          <img src="/notifications.svg" alt="" className="" />
          <span className="text-white w-[16px] h-[16px] rounded-[50%] absolute -top-[10px] -right-[10px] bg-red-bg flex items-center justify-center text-[12px]">
            1
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-[26px] h-[26px] rounded-[50%] object-cover"
          />
          <span>anosh</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
    </div>
  );
};

export default DashboardNavbar;
