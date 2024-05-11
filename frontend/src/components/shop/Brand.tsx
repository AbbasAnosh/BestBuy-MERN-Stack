import React from "react";

const Brand = () => {
  return (
    <div className="bg-slate-400 p-8 space-y-6 rounded-sm ">
      <div>
        <p className="text-lg font-sm border-b-2 pb-4">Filter by Brand</p>
      </div>
      <div className="space-y-6 mt-4">
        <div className="flex items-center">
          <input
            id="checkbox1"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox1" className="text-black text-sm">
            Apple (254)
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="checkbox1"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-2 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox1" className="text-black text-sm">
            Bosh (39)
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="checkbox2"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-gray-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox2" className="text-black text-sm">
            Canon Inc. (128)
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checkbox2"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-gray-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox2" className="text-black text-sm">
            Dell (310)
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checkbox2"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-gray-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox2" className="text-black text-sm">
            Hewlett-Packard (42)
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checkbox2"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-gray-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox2" className="text-black text-sm">
            Hitachi (217)
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checkbox2"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-gray-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox2" className="text-black text-sm">
            LG Electronics (310)
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checkbox2"
            type="checkbox"
            className="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-gray-200 focus:ring-offset-4 focus:ring-[#007bff]"
          />
          <label htmlFor="checkbox2" className="text-black text-sm">
            Panasonic (74)
          </label>
        </div>
      </div>
    </div>
  );
};

export default Brand;
