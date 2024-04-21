const Filter = () => {
  return (
    <div className="divide-y divide-gray-200 space-y-5">
      <div>
        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
          categories
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cat-1"
              className="text-[#065345] focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Bedroom
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cat-1"
              className="text-[#065345] focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Sofa
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cat-1"
              className="text-[#065345] focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Office
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cat-1"
              className="text-[#065345] focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Outdoor
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
          Brands
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cat-1"
              className="text-[#065345] focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Bedroom
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cat-1"
              className="text-[#065345] focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Sofa
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cat-1"
              className="text-[#065345] focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Office
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="cat-1"
              className="text-[#065345] focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="cat-1"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Outdoor
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
