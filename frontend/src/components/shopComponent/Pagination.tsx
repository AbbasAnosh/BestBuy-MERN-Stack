import ReactPaginate from "react-paginate";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { PaginationProps } from "../../types/ProductType";
const Pagination = ({
  pageCount,
  handlePageClick,
}: {
  pageCount: number;
  handlePageClick: (e: PaginationProps) => void;
}) => {
  return (
    <div className="flex items-center justify-center pb-3">
      <ReactPaginate
        nextLabel={
          <FaChevronRight className="bg-[#064F48] text-3xl font-bold p-1 w-6 h-6 text-white rounded-sm" />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        breakLabel="..."
        pageCount={pageCount}
        previousLabel={
          <FaChevronLeft className="bg-[#064F48] text-3xl font-bold p-1 w-6 h-6 text-white rounded-sm" />
        }
        pageLinkClassName=""
        pageClassName="list-none py-[2px] px-[12px] border border-[#E56A40] rounded-md h-[31.5px] w-[31.5px] flex justify-center items-center mt-[2px]"
        containerClassName="flex text-base font-semibold space-x-4 list-none h-[31.5px] w-[32.5px] justify-center items-center mt-[2px] cursor-pointer"
        activeClassName="bg-[#064F48] rounded-md text-white"
      />
    </div>
  );
};

export default Pagination;
