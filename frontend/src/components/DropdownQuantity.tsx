import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const data = [
  {
    city: "san",
    emoation: "San Francisco",
  },
  {
    city: "calgary",
    emoation: "Calgary",
  },
  {
    city: "toronto",
    emoation: "Toronto",
  },
];

const DropdownQuantity = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-[340px] h-[240px] rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg 
      rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        Quantity
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
          {data.map((d) => (
            <ul
              className="flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white p-4 border-l-4"
              key={d.city}
            >
              <li className="font-bold ">{d.city}</li>
              <li>{d.emoation}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownQuantity;
