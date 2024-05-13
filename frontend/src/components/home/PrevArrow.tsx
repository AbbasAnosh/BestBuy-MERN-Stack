import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const PrevArrow: React.FC<{ onClick: () => void }> = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-14 rounded-md text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-2"
      onClick={onClick}
    >
      <span>
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};

export default PrevArrow;
