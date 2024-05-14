const ProductBanner = ({ setSortOption }) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
        <div className="flex items-center gap-2 text-base text-[#767676] relative">
          <label className="block">Sort by:</label>
          <select
            id="sortSelect"
            onChange={(e) => setSortOption(e.target.value)}
            className="w-36 md:w-52 border-[1px] border-gray-200 py-1 px-1 cursor-pointer text-primeColor text-base block  appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="">All Products</option>
            <option value="Best Sellers">Top Products</option>
            <option value="New Arrival">New Arrival</option>
            <option value="Featured">Featured</option>
          </select>
        </div>
        <div className="flex items-center gap-2 text-[#767676] relative">
          <label className="hidden md:block">Show:</label>
          <select
            onChange={(e) => {}}
            id="itemsPerPageSelect"
            className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-2 cursor-pointer text-primeColor text-base block  appearance-none focus-within:outline-none focus-visible:border-primeColor"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
