import React from "react";

const Checkbox = () => {
  return (
    <div className="bg-slate-400 p-8 space-y-6 rounded-sm ">
      <div>
        <p className="text-lg font-sm border-b-2 pb-4">Filter by Price</p>
      </div>
      <div className="space-y-6 mt-4">
        <div className="flex items-center">
          <input
            id="checkbox1"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox1" className="text-black text-sm">
            $50 - $100L (208)
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="checkbox1"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-2 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox1" className="text-black text-sm">
            $100L - $500 (311)
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="checkbox2"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-gray-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox2" className="text-black text-sm">
            $500 - $1,000 (485)
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checkbox2"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-gray-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox2" className="text-black text-sm">
            $1000 - $10,000 (485)
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
