import { RangeProp } from "../../types/ProductType";

const Range: React.FC<RangeProp> = ({ rangeValue, setRangeValue }) => {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  };

  return (
    <div className="space-y-6 py-8 ">
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
