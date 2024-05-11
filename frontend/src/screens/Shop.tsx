import Brand from "../components/shop/Brand";
import Categories from "../components/shop/Categories";
import Checkbox from "../components/shop/Checkbox";
import Product from "../components/shop/Product";
import Range from "../components/shop/Range";
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
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {data &&
                  data?.map((product: ProductProps) => (
                    <Product {...product} key={product._id} />
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
