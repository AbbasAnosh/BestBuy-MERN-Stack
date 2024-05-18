import Breadcrumbs from "../../components/shopComponent/BreadCrumps";
import { useGetMenProductsQuery } from "../../slices/productsApiSlice";
import NewProduct from "../../components/home/products/NewProdcut";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../../components/shopComponent/Pagination";

const Men = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error } = useGetMenProductsQuery({ pageNumber });
  const navigate = useNavigate();
  const handlePageClick = (e) => {
    const newPageNumber = e.selected + 1;

    navigate(`/men/page/${newPageNumber}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="max-w-7xl mx-auto">
      <Breadcrumbs title="Men" prevLocation="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
        {data?.menProducts.map((men) => (
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