import React from "react";
import { useGetTravelProductsQuery } from "../../slices/productsApiSlice";
import Breadcrumbs from "../../components/shopComponent/BreadCrumps";
import NewProduct from "../../components/home/products/NewProdcut";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../../components/shopComponent/Pagination";

const Travel = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error } = useGetTravelProductsQuery({ pageNumber });
  const navigate = useNavigate();
  const handlePageClick = (e) => {
    const newPageNumber = e.selected + 1;

    navigate(`/travel/page/${newPageNumber}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="max-w-7xl mx-auto">
      <Breadcrumbs title="Travel" prevLocation="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
        {data?.travelProducts.map((travel) => (
          <NewProduct {...travel} key={travel._id} />
        ))}
      </div>
      <div>
        <Pagination pageCount={data?.pages} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

export default Travel;
