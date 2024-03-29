import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export type RatingProps = {
  value: number;
  reviews: number;
};

const Rating = ({ value, reviews }: RatingProps) => {
  return (
    <div className="flex items-center mt-6 justify-between space-x-16">
      <div className="flex space-x-2 text-[#FDCA44]">
        <span>
          {value >= 1 ? (
            <FaStar />
          ) : value >= 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 2 ? (
            <FaStar />
          ) : value >= 1.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 3 ? (
            <FaStar />
          ) : value >= 2.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 4 ? (
            <FaStar />
          ) : value >= 3.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 5 ? (
            <FaStar />
          ) : value >= 4.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      </div>
      <p className="text-[#075049] text-sm text-nowrap">
        {reviews} <span className="text-[#E56A40]">reviews</span>
      </p>
    </div>
  );
};

export default Rating;
