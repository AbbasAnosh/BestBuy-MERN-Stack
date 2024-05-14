import Brand from "../components/shop/Brand";
import Categories from "../components/shop/Categories";
import Checkbox from "../components/shop/Checkbox";
import Product from "../components/shopComponent/Product";
import Range from "../components/shopComponent/Range";
import Search from "../components/shop/Search";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { ProductProps } from "../types/ProductType";

const Shop = () => {
  const { data, isLoading, error } = useGetProductsQuery({});
  const iserror: any = error;
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex gap-12">
        <div className="w-1/4 space-y-12">
          <Search />
          <Categories />
          <Range />
          <Checkbox />
          <Brand />
        </div>
        <div className="w-3/4">
          {isLoading ? (
            <>
              <h3>isLoading</h3>
            </>
          ) : error ? (
            <div>{iserror?.data?.message}</div>
          ) : (
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {data &&
                  data?.map((product: ProductProps) => (
                    <Product {...product} key={product._id} />
                  ))}
              </div>
              <nav aria-label="Page navigation">
                <ul className="inline-flex space-x-2">
                  <li>
                    <button className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                      1
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                      2
                    </button>
                  </li>
                  <li>
                    <button className="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline">
                      3
                    </button>
                  </li>
                  <li>
                    <button className="flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
