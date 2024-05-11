import React, { useState } from "react";

const Range = () => {
  const [rangeValue, setRangeValue] = useState(50);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="bg-slate-400 p-8 space-y-6 rounded-sm ">
      <div>
        <p className="text-lg font-sm border-b-2 pb-4">Price Range</p>
      </div>

      <div className="flex items-center">
        <input
          type="range"
          className="w-full"
          min="5"
          max="10000"
          step="1"
          value={rangeValue}
          id="myRange"
          onChange={handleRangeChange}
        />
        <output
          className="ml-4 text-gray-700"
          htmlFor="myRange"
          id="rangeValue"
        >
          {rangeValue}
        </output>
      </div>
    </div>
  );
};

export default Range;
