import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-[#064F48] w-[65px] h-[25px] rounded-sm text-white flex justify-center items-center font-small text-sm hover:bg-[#E56A40] duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;
