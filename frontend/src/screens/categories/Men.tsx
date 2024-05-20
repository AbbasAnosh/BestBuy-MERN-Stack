import Breadcrumbs from "../../components/shopComponent/BreadCrumps";
import { useGetMenProductsQuery } from "../../slices/productsApiSlice";
import NewProduct from "../../components/home/products/NewProdcut";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../../components/shopComponent/Pagination";
import { NewProductProps, PaginationProps } from "../../types/ProductType";
import Button from "../../constants/Button";

const Men = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error } = useGetMenProductsQuery({ pageNumber });
  const navigate = useNavigate();
  const handlePageClick = (e: PaginationProps) => {
    const newPageNumber = e.selected + 1;

    navigate(`/men/page/${newPageNumber}`);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Breadcrumbs title="Men" prevLocation="" />
      <div className="bg-[#F3F4F6] rounded-md md:flex items-center h-[50vh] mb-3 hidden">
        <img
          src="/images/man.png"
          alt=""
          className="flex-1 h-full w-full object-contain"
        />
        <div className="flex-1 space-y-6">
          <p className="text-3xl">
            Grab up to 50% off on <br /> Selected Products
          </p>
          <Button text="Buy Now"></Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
        {data?.menProducts.map((men: NewProductProps) => (
          <NewProduct {...men} key={men._id} />
        ))}
      </div>
      <div>
        <Pagination pageCount={data?.pages} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

export default Men;
